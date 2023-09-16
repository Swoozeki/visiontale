<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ delay: 400 }} out:fade class="h-screen flex flex-col items-center justify-center">
	<h1 class="md:text-9xl text-4xl mx-6 bg-primary text-primary-content p-6 rounded-xl">
		VISIONTALE
	</h1>
	<p class="md:text-3xl text-md mx-6 my-4">An immersive reading experience like no other!</p>
</div>
