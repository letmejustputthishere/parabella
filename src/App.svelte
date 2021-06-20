<script lang="ts">
	import Chart from "./routes/Dashboard.svelte";
	import Survey from "./pages/Survey.svelte";
	import LandingPage from "./pages/LandingPage.svelte";

	let mode: number = 1;


</script>


{#if mode === 1}
	<LandingPage bind:mode />
{:else if mode === 2}
	<Survey />
{:else if mode === 3}
	<Chart />
{/if}
