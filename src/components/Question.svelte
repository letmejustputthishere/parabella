<script lang="ts">
    export let question = "";
    export let language: string;
    export let topicIndex: number;
    export let questionIndex: number;
    export let answers: number[][];

    let choicesGerman = [
        "Stimme überhaupt nicht zu",
        "Stimme teilweise zu",
        "Stimme weder zu / nicht zu",
        "Stimme teilweise zu",
        "Stimme vollständig zu",
    ];
    let choicesEnglish = [
        "Disagree completely",
        "Agree partially",
        "Neither agree nor disagree",
        "Agree partially",
        "Agree completely",
    ];
</script>

<div class="my-12 bg-primary-50 border">
    <h1 class="text-left ml-20 text-xl">{question}</h1>
    <container class="flex flex-row items-center justify-center my-2">
        {#each language === "english" ? choicesEnglish : choicesGerman as choice, index}
            <label class="flex flex-col mx-7 items-center justify-center">
                <input
                    class="h-6 w-6 rounded-xl text-primary-500"
                    type="radio"
                    bind:group={answers[topicIndex][questionIndex]}
                    value={index + 1}
                />
                <span>
                    {choice}
                </span>
            </label>
        {/each}
    </container>
</div>
