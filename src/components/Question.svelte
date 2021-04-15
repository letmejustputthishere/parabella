<script lang="ts">
    let choices = [1, 2, 3, 4, 5];
    let currentChoice = 1;


    export let question = "";
</script>

<div class="text-center">
    <h1>{question}</h1>
    <header class="flex flex-row items-center justify-center">
        {#each choices as choice}
            <label>
                <input class="rounded text-pink-600" type="radio" bind:group={currentChoice} value={choice} />
                {choice}
            </label>
        {/each}
    </header>
</div>


