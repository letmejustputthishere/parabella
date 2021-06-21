<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Dashboard from "./routes/Dashboard.svelte";
	import Survey from "./routes/Survey.svelte";
	import LandingPage from "./routes/LandingPage.svelte";

	let language = "english";

	export let url = "";
</script>

<select bind:value={language} class="text-gray-700 border ml-1">
	<option value={"english"}> english </option>
	<option value={"german"}> german </option>
</select>

<Router {url}>
	<div>
		<Route path="survey"><Survey {language} /></Route>
		<Route path="dashboard" component={Dashboard} />
		<Route path="/"><LandingPage {language} /></Route>
	</div>
</Router>

<style>
	:global(body.landing-page) {
		background-image: url("background.jpeg");
		background-color: black;
		background-size: cover;
	}
	:global(body.survey) {
		background-image: none;
		background-color: white;
	}
</style>
