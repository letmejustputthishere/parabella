<script lang="typescript">
	import page from "page";

	import Chart from "./components/Chart.svelte";
	import Survey from "./pages/Survey.svelte";
	import LandingPage from "./pages/LandingPage.svelte";
	
	let mode: number = 1	
	
	// reactive variables
	let page_;
	let context;

	page('/search', 		  				(c)=>{ page_ = AllListings; context = c });
	page("/", (c) => {
		page_ = LandingPage;
		context = c;
	});
	page("/survey", (c) => {
		page_ = Survey;
		context = c;
	});
	page("/dashboard", (c) => {
		page_ = Chart;
		context = c;

<svelte:component this={page_} context={context}/>

{#if mode === 1}
	<LandingPage bind:mode />
{:else if mode === 2}
	<Survey />
{:else if mode === 3}
	<Chart />
{/if}
