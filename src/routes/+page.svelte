<script>
	import { fade } from 'svelte/transition';
	import { ChevronRightIcon } from 'svelte-feather-icons';
</script>

<div
	in:fade={{ delay: 400 }}
	out:fade
	class="flex min-h-screen flex-col items-center justify-center p-6"
>
	<div class="-rotate-6 text-center">
		<h1 class="p-6 text-6xl drop-shadow-md sm:text-9xl">VISIONTALE</h1>
		<p class="bg-base-200 px-12 py-6 text-lg sm:text-xl md:text-4xl">
			an immersive reading experience
		</p>
	</div>

	<a
		class="absolute bottom-0 right-0 m-6 flex animate-slide-right items-center gap-2"
		href="/stories/the-lottery"
	>
		<p>read</p>
		<div class="rounded-full bg-base-200 p-2">
			<ChevronRightIcon />
		</div>
	</a>
</div>
