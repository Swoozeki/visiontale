<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	export let data: PageData;

	function onClickStart(): void {
		goto(`the-wind-and-the-sun/${data.index}`);
	}
</script>

<div class="h-screen flex items-center justify-center" in:fade={{ delay: 400 }} out:fade>
	<button class="btn btn-primary" on:click={onClickStart}>Start</button>
</div>
