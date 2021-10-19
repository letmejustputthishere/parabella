<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import Dashboard from "./routes/Dashboard.svelte";
    import Survey from "./routes/Survey.svelte";
    import LandingPage from "./routes/LandingPage.svelte";

    let language = "english";

    export let url = "";

    // let answers: number[][] = [
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0, 0, 0, 0],
    //     [0, 0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0, 0, 0],
    //     [0, 0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0],
    // ];

    let answers: number[][] = [
        [1, 2, 1, 5, 1, 3, 5, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2],
        [1, 3],
        [2, 4],
        [4, 4],
        [2, 3],
        [1, 3],
        [2, 2],
        [3, 2, 2, 2, 2],
        [3, 1, 1],
        [2, 3],
        [1, 4],
        [4, 4, 1, 2],
        [2, 4, 5],
        [1, 4],
        [3, 4],
        [2, 4],
        [5, 4],
    ];
</script>

<svelte:head>
    <title>Parabella Analytics</title>
</svelte:head>

<div class="h-screen flex flex-col items-start justify-start">
    <select bind:value={language} class="text-gray-700 border ml-1">
        <option value={"english"}> english </option>
        <option value={"german"}> german </option>
    </select>

    <div class="flex-grow w-full">
        <Router {url}>
            <!-- <Route path="/"><Survey {language} bind:answers/></Route> -->
            <!-- <Route path="/"><Dashboard {language} bind:answers /></Route> -->

            <Route path="/"><LandingPage {language} /></Route>
            <Route path="survey"><Survey {language} bind:answers /></Route>
            <Route path="dashboard"><Dashboard {language} {answers} /></Route>
        </Router>
    </div>
</div>

<style>
    :global(body.landing-page) {
        /* background-image: url("/bg.jpeg"); */
        background-color: black;
        background-size: cover;
    }
    :global(body.survey) {
        background-image: none;
        background-color: white;
    }
</style>
