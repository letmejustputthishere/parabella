<script lang="ts">
    export let question = "";
    export let language: string;
    export let topicIndex: number;
    export let questionIndex: number;
    export let answers: number[][];

    let choicesDigitalEnablementGerman = [
        "Stimme überhaupt nicht zu",
        "Stimme teilweise zu",
        "Stimme weder zu / nicht zu",
        "Stimme teilweise zu",
        "Stimme vollständig zu",
    ];
    let choicesDigitalEnablementEnglish = [
        "Disagree completely",
        "Agree partially",
        "Neither agree nor disagree",
        "Agree partially",
        "Agree completely",
    ];
    let choicesTechnologiesGerman = [
        "Vorerst nicht relevant",
        "Relevant für das Unternehmen, geplant für die nächsten 2 Jahre",
        "Erster Pilot umgesetzt",
        "Umsetzung über den ersten Piloten hinaus; in einigen Bereichen im Einsatz",
        "Skalierung auf prozessweiter Ebene",
    ];
    let choicesTechnologiesEnglish = [
        "Not relevant for the time being",
        "Relevant for the company, planned for the next 2 years",
        "First pilot implemented",
        "Implementation beyond initial pilot; in use in some areas",
        "Scaling on a process-wide level",
    ];
</script>

<div class="my-12 bg-primary-50 border">
    <h1 class="text-left ml-20 text-xl">{question}</h1>
    <container class="flex flex-row items-center justify-center my-2">
        {#each language === "english" ? (topicIndex >= 1 ? choicesTechnologiesEnglish : choicesDigitalEnablementEnglish) : topicIndex >= 1 ? choicesTechnologiesGerman : choicesDigitalEnablementGerman as choice, index}
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
