<script>
	export let mode: number;
</script>

<div
	id="landing-page"
	class="flex flex-col items-center justify-center h-screen"
>
	<h1 class="text-6xl text-white font-bold">Digitalisierungsindex</h1>
	<button class="border text-2xl text-white mt-4 p-2 px-3"
	on:click|preventDefault={() => mode = 2}
		>JETZT STARTEN</button
	>
</div>

<style>
	#landing-page {
		background-image: url("background.jpeg");
		background-size: cover;
	}
</style>
