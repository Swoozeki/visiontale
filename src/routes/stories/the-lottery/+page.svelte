<script>
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';

	const free = true;
</script>

<div
	in:fade={{ delay: 400 }}
	out:fade
	class="flex min-h-screen flex-col items-center justify-center p-6"
>
	<div class="card max-w-4xl bg-base-200 md:card-side">
		<figure class="md:max-w-xs">
			<img
				src="https://media.newyorker.com/photos/5f15c3b3c0d6d7b73793b17b/3:4/pass/200727_r36770web.jpg"
				alt="cover art"
			/>
		</figure>
		<div class="card-body">
			<h1 class="card-title">
				The Lottery
				{#if free}
					<div class="badge">Free</div>
				{/if}
			</h1>
			<div class="grow">
				<p class="mb-6 opacity-75">Shirley Jackson | June 18, 1948</p>
				<p class="mb-2">
					Highly influential since its publication, the story revolves around a small, seemingly
					ordinary American town during its annual lottery, which the townspeople participate in
					without fully understanding its true nature.
				</p>
			</div>
			<div class="card-actions justify-end">
				<button class="btn btn-neutral" on:click={() => goto('the-lottery/read')}>Read</button>
			</div>
		</div>
	</div>
</div>
