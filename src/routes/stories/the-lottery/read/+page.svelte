<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import Swiper from 'swiper';
	import 'swiper/css';
	import 'swiper/css/effect-creative';
	import { EffectCreative } from 'swiper/modules';
	import type { SwiperOptions } from 'swiper/types';

	import { ChevronDownIcon, ChevronUpIcon, PlayCircleIcon } from 'svelte-feather-icons';
	import type { Book, ParsedBook, BookMeta } from '$lib/models/Story';

	export let data: {
		book: Book;
		parsedBook: ParsedBook;
		meta: BookMeta;
		activeExcerptIndex: number;
	};
	$: book = data.book;
	$: parsedBook = data.parsedBook;
	$: activeExcerptIndex = data.activeExcerptIndex;
	$: activeExcerpt = parsedBook[activeExcerptIndex];

	let audioEl: HTMLAudioElement;
	let autoPlay = false;
	let audioTrackEnded = false;
	$: if (audioTrackEnded && autoPlay) setTimeout(() => next(), 500);

	let swiper: Swiper;
	onMount(() => {
		scrollTo({ index: activeExcerptIndex, behavior: 'instant' });
		const options: SwiperOptions = {
			initialSlide: activeExcerptIndex,
			effect: 'creative',
			creativeEffect: {
				prev: {
					shadow: true,
					translate: [0, 0, -400]
				},
				next: {
					translate: ['100%', 0, 0]
				}
			},
			speed: 1000,
			spaceBetween: '24px',
			modules: [EffectCreative],
			allowTouchMove: false
		};
		swiper = new Swiper('.swiper', options);

		return () => {
			swiper.destroy();
		};
	});

	function onKeyUp(e: KeyboardEvent): void {
		switch (e.code) {
			case 'ArrowUp':
			case 'ArrowLeft':
				previous();
				break;
			case 'ArrowDown':
			case 'ArrowRight':
				next();
				break;
			default:
				break;
		}
	}

	function next(): void {
		if (activeExcerptIndex === parsedBook.length - 1) return;

		swiper.slideNext();
		activeExcerptIndex += 1;
		goto(activeExcerptIndex);
	}
	function previous(): void {
		if (activeExcerptIndex === 0) return;

		swiper.slidePrev();
		activeExcerptIndex -= 1;
		goto(activeExcerptIndex);
	}
	function goto(index: number): void {
		scrollTo({ index });
		window.history.pushState(history.state, '', `read?index=${index}`);
	}
	function onInteract(): void {
		if (!audioEl) return;
		if (!audioEl.played.length) audioEl.play();
	}
	function scrollTo({ index, behavior }: { index: number; behavior?: ScrollBehavior }): void {
		document
			.getElementById(parsedBook[index].id)
			?.scrollIntoView({ block: 'center', behavior: behavior || 'smooth' });
	}
</script>

<svelte:window on:keyup|preventDefault={onKeyUp} on:click|preventDefault={onInteract} />

<div in:fade={{ delay: 400 }} out:fade class="h-screen p-4 lg:p-6">
	<div class="grid h-full grid-cols-12 gap-4 lg:gap-6">
		<div class="col-span-3 lg:col-span-5">
			<div class="swiper h-full rounded-lg">
				<div class="swiper-wrapper rounded-lg">
					{#each parsedBook as excerpt}
						<div
							class="swiper-slide rounded-lg bg-cover bg-bottom"
							style="background-image:url({excerpt.image})"
						></div>
					{/each}
				</div>
			</div>
		</div>
		<div class="prose relative col-span-7 max-w-[80ch] overflow-hidden rounded-lg lg:col-span-6">
			<div
				id="title"
				class="grid h-full place-content-center justify-center p-6 text-center transition-all duration-500"
				class:opacity-0={activeExcerpt.id !== 'title'}
			>
				<h1 class="mb-6 text-5xl">{book.meta.title.text}</h1>
				<p>{book.meta.author.text} | {book.meta.publishDate}</p>
			</div>

			{#each book.chapters as chapter, c}
				<div class="my-6">
					{#if chapter.title}
						<div
							id={`title-c${c + 1}`}
							class="grid h-full place-content-center justify-center p-6 text-center transition-all duration-500"
							class:opacity-5={activeExcerpt.id !== `title-c${c + 1}`}
						>
							<h1 class="text-5xl">{chapter.title?.text}</h1>
						</div>
					{/if}

					{#each chapter.paragraphs as paragraph, p}
						<p
							contenteditable="false"
							class="p-6 {p === 0
								? 'first-letter:float-left first-letter:mr-2 first-letter:text-7xl'
								: ''}"
						>
							{#each paragraph as line, l}
								<span
									class="prose-md xl:prose-xl transition-all duration-500"
									class:opacity-5={activeExcerpt.id !== `c${c + 1}p${p + 1}l${l + 1}`}
									id={`c${c + 1}p${p + 1}l${l + 1}`}
								>
									{line.text}
								</span>
								{#if line.track}
									<audio
										autoplay
										src={line.track}
										bind:ended={audioTrackEnded}
										bind:this={audioEl}
									/>
								{/if}
							{/each}
						</p>
					{/each}
				</div>
			{/each}

			<div class="badge sticky bottom-6 left-1/2 translate-y-1/2 p-4">
				{#if activeExcerpt.type === 'title'}
					Title
				{:else if activeExcerpt.type === 'chapter-title'}
					Chapter title
				{:else}
					{activeExcerpt.meta?.paragraph} / {activeExcerpt.meta?.total}
				{/if}
			</div>
		</div>
		<div
			class="col-span-2 flex flex-col items-center justify-between rounded-lg bg-base-200 p-4 lg:col-span-1"
		>
			<button class="btn btn-circle bg-base-300 p-2 hover:btn-primary" on:click={previous}>
				<ChevronUpIcon />
			</button>
			<div class="flex flex-col items-center gap-6">
				<div class="indicator tooltip tooltip-top" data-tip="Autoplay">
					<span
						class="indicator-bottom indicator-center badge indicator-item badge-neutral"
						class:badge-accent={autoPlay}>{autoPlay ? 'on' : 'off'}</span
					>
					<button
						class="btn btn-circle bg-base-300 p-2 hover:btn-primary"
						on:click={() => (autoPlay = !autoPlay)}
					>
						<PlayCircleIcon />
					</button>
				</div>
			</div>
			<button class="btn btn-circle bg-base-300 p-2 hover:btn-primary" on:click={next}>
				<ChevronDownIcon />
			</button>
		</div>
	</div>
</div>

<style>
	:root {
		font-family: 'EB Garamond Variable', serif;
	}
</style>
