<script lang="ts">
	import { ChevronLeftIcon, ChevronRightIcon } from 'svelte-feather-icons';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import track1 from '$lib/assets/audio/the-lottery/track/1.mp3';
	import track2 from '$lib/assets/audio/the-lottery/track/2.mp3';
	import track3 from '$lib/assets/audio/the-lottery/track/3.mp3';
	import track4 from '$lib/assets/audio/the-lottery/track/4.mp3';
	import track5 from '$lib/assets/audio/the-lottery/track/5.mp3';
	import track6 from '$lib/assets/audio/the-lottery/track/6.mp3';
	import track7 from '$lib/assets/audio/the-lottery/track/7.mp3';
	import track8 from '$lib/assets/audio/the-lottery/track/8.mp3';
	import track9 from '$lib/assets/audio/the-lottery/track/9.mp3';
	import track10 from '$lib/assets/audio/the-lottery/track/10.mp3';
	import track11 from '$lib/assets/audio/the-lottery/track/11.mp3';
	import track12 from '$lib/assets/audio/the-lottery/track/12.mp3';
	import track13 from '$lib/assets/audio/the-lottery/track/13.mp3';
	import track14 from '$lib/assets/audio/the-lottery/track/14.mp3';
	import track15 from '$lib/assets/audio/the-lottery/track/15.mp3';
	import type { PageData } from './$types';
	export let data: PageData;
	$: index = data.params.slug;

	const model = [
		{
			text: 'THE WIND AND THE SUN',
			track: track1
		},
		{
			text: 'Once the Wind and the Sun had an argument.',
			track: track2
		},
		{
			text: '“I am stronger than you,” said the Wind.',
			track: track3
		},
		{
			text: '“No, you are not,” said the Sun.',
			track: track4
		},
		{
			text: 'Just at that moment they saw a traveler walking across the road. He was wrapped in a shawl.',
			track: track5
		},
		{
			text: 'The Sun and the Wind agreed that whoever could separate the traveller from his shawl was stronger.',
			track: track6
		},
		{
			text: 'The Wind took the first turn. He blew with all his might to tear the traveller’s shawl from his shoulders.',
			track: track7
		},
		{
			text: 'But the harder he blew, the tighter the traveller gripped the shawl to his body.',
			track: track8
		},
		{
			text: 'The struggle went on till the Wind’s turn was over. Now it was the Sun’s turn.',
			track: track9
		},
		{
			text: 'The Sun smiled warmly.',
			track: track10
		},
		{
			text: 'The traveller felt the warmth of the smiling Sun. Soon he let the shawl fall open.',
			track: track11
		},
		{
			text: 'The Sun’s smile grew warmer and warmer... hotter and hotter. Now the traveller no longer needed his shawl',
			track: track12
		},
		{
			text: 'He took it off and dropped it on the ground.',
			track: track13
		},
		{
			text: 'The Sun was declared stronger than the Wind.',
			track: track14
		},
		{
			text: 'Moral: Brute force can’t achieve what a gentle smile can.',
			track: track15
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
</script>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<div in:fade={{ delay: 400 }} out:fade class="h-screen flex flex-col" role="presentation">
	<div class="h-screen flex items-center justify-center flex-col m-6">
		<p
			bind:innerHTML={model[index - 1].text}
			contenteditable="false"
			class="lg:text-4xl text-xl lg:w-2/3 w-full m-6 lg:text-center"
		/>
		{#if model[index - 1].track}
			<audio autoplay src={model[index - 1].track} />
		{/if}
	</div>

	<div class="bg-base-200 rounded-lg p-6 m-6 flex justify-between fixed bottom-0 left-0 right-0">
		<button class="rounded-full bg-base-300 p-2" on:click={previousPage}>
			<ChevronLeftIcon />
		</button>
		<div class="badge self-center p-4">{index} / {model.length}</div>
		<button class="rounded-full bg-base-300 p-2" on:click={nextPage}>
			<ChevronRightIcon />
		</button>
	</div>
</div>
