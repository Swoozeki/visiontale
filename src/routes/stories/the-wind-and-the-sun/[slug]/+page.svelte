<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon, PlayCircleIcon } from 'svelte-feather-icons';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import track1 from '$lib/assets/audio/the-wind-and-the-sun/track/1.mp3';
	import track2 from '$lib/assets/audio/the-wind-and-the-sun/track/2.mp3';
	import track3 from '$lib/assets/audio/the-wind-and-the-sun/track/3.mp3';
	import track4 from '$lib/assets/audio/the-wind-and-the-sun/track/4.mp3';
	import track5 from '$lib/assets/audio/the-wind-and-the-sun/track/5.mp3';
	import track6 from '$lib/assets/audio/the-wind-and-the-sun/track/6.mp3';
	import track7 from '$lib/assets/audio/the-wind-and-the-sun/track/7.mp3';
	import track8 from '$lib/assets/audio/the-wind-and-the-sun/track/8.mp3';
	import track9 from '$lib/assets/audio/the-wind-and-the-sun/track/9.mp3';
	import track10 from '$lib/assets/audio/the-wind-and-the-sun/track/10.mp3';
	import track11 from '$lib/assets/audio/the-wind-and-the-sun/track/11.mp3';
	import track12 from '$lib/assets/audio/the-wind-and-the-sun/track/12.mp3';
	import track13 from '$lib/assets/audio/the-wind-and-the-sun/track/13.mp3';
	import track14 from '$lib/assets/audio/the-wind-and-the-sun/track/14.mp3';
	import track15 from '$lib/assets/audio/the-wind-and-the-sun/track/15.mp3';
	import cover from '$lib/assets/images/the-wind-and-the-sun/cover.jpg';
	import type { PageData } from './$types';
	export let data: PageData;
	$: index = data.params.slug;

	let audioEl: HTMLAudioElement;
	let autoPlay = false;
	let audioTrackEnded = false;
	$: if (audioTrackEnded && autoPlay) setTimeout(() => nextPage(), 500);

	const model = [
		{
			text: 'THE WIND AND THE SUN',
			track: track1,
			image: cover
		},
		{
			text: 'Once the Wind and the Sun had an argument.',
			track: track2,
			image: cover
		},
		{
			text: '“I am stronger than you,” said the Wind.',
			track: track3,
			image: cover
		},
		{
			text: '“No, you are not,” said the Sun.',
			track: track4,
			image: cover
		},
		{
			text: 'Just at that moment they saw a traveler walking across the road. He was wrapped in a shawl.',
			track: track5,
			image: cover
		},
		{
			text: 'The Sun and the Wind agreed that whoever could separate the traveller from his shawl was stronger.',
			track: track6,
			image: cover
		},
		{
			text: 'The Wind took the first turn. He blew with all his might to tear the traveller’s shawl from his shoulders.',
			track: track7,
			image: cover
		},
		{
			text: 'But the harder he blew, the tighter the traveller gripped the shawl to his body.',
			track: track8,
			image: cover
		},
		{
			text: 'The struggle went on till the Wind’s turn was over. Now it was the Sun’s turn.',
			track: track9,
			image: cover
		},
		{
			text: 'The Sun smiled warmly.',
			track: track10,
			image: cover
		},
		{
			text: 'The traveller felt the warmth of the smiling Sun. Soon he let the shawl fall open.',
			track: track11,
			image: cover
		},
		{
			text: 'The Sun’s smile grew warmer and warmer... hotter and hotter. Now the traveller no longer needed his shawl.',
			track: track12,
			image: cover
		},
		{
			text: 'He took it off and dropped it on the ground.',
			track: track13,
			image: cover
		},
		{
			text: 'The Sun was declared stronger than the Wind.',
			track: track14,
			image: cover
		},
		{
			text: 'Moral: Brute force can’t achieve what a gentle smile can.',
			track: track15,
			image: cover
		}
	];

	function onKeyUp(e: KeyboardEvent): void {
		switch (e.code) {
			case 'ArrowUp':
			case 'ArrowLeft':
				previousPage();
				break;
			case 'ArrowDown':
			case 'ArrowRight':
				nextPage();
				break;
			default:
				break;
		}
	}

	function nextPage(): void {
		if (index === model.length) return;
		goto(`${++index}`);
	}
	function previousPage(): void {
		if (index === 1) return;
		goto(`${--index}`);
	}
	function onInteract(): void {
		if (!audioEl.played.length) audioEl.play();
	}
</script>

<svelte:window on:keyup|preventDefault={onKeyUp} on:click|preventDefault={onInteract} />

<div in:fade={{ delay: 400 }} out:fade class="h-screen flex flex-col" role="presentation">
	<div class="h-screen flex items-center justify-center flex-col m-6 lg:text-center">
		<p
			bind:innerHTML={model[index - 1].text}
			contenteditable="false"
			class="lg:text-4xl text-xl lg:w-2/3 w-full m-6"
		/>
		{#if model[index - 1].image}
			<div class="image-mask absolute bottom-0 right-0 -z-10">
				<div class="image-container bg-contain h-[1000px] w-[1000px] bg-no-repeat" />
			</div>
		{/if}
		{#if model[index - 1].track}
			<audio
				autoplay
				src={model[index - 1].track}
				bind:ended={audioTrackEnded}
				bind:this={audioEl}
			/>
		{/if}
	</div>

	<div class="bg-base-200 rounded-lg p-6 m-6 flex justify-between fixed bottom-0 left-0 right-0">
		<button class="btn btn-circle bg-base-300 p-2 hover:btn-primary" on:click={previousPage}>
			<ChevronLeftIcon />
		</button>
		<div class="flex justify-betwen gap-4">
			<div class="tooltip tooltip-top indicator" data-tip="Autoplay">
				<span
					class="indicator-item indicator-bottom indicator-center badge badge-neutral"
					class:badge-accent={autoPlay}>{autoPlay ? 'on' : 'off'}</span
				>
				<button
					class="btn btn-circle bg-base-300 p-2 hover:btn-primary"
					on:click={() => (autoPlay = !autoPlay)}
				>
					<PlayCircleIcon />
				</button>
			</div>
			<div class="badge self-center p-4">{index} / {model.length}</div>
		</div>
		<button class="btn btn-circle bg-base-300 p-2 hover:btn-primary" on:click={nextPage}>
			<ChevronRightIcon />
		</button>
	</div>
</div>

<style>
	.image-mask {
		mask-image: linear-gradient(
			310deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 0.1) 40%,
			transparent 50%
		);
	}
	.image-container {
		background-image: url('$lib/assets/images/the-wind-and-the-sun/cover.jpg');
	}
</style>
