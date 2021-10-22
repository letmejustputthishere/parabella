<script lang="ts">
    export let question = "";
    export let language: string;
    export let topicIndex: number;
    export let questionIndex: number;
    export let answers: number[][];

    let choicesDigitalEnablementGerman = [
        "Stimme überhaupt nicht zu",
        "Stimme teilweise nicht zu",
        "Stimme weder zu / nicht zu",
        "Stimme teilweise zu",
        "Stimme vollständig zu",
    ];
    let choicesDigitalEnablementEnglish = [
        "Fully disagree",
        "Somewhat disagree",
        "Neither agree nor disagree",
        "Somewhat agree",
        "Fully agree",
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
    let choicesSDGGerman = [
        "Informationen nicht verfügbar",
        "Grosse Herausforderung",
        "Signifikante Herausforderung",
        "Geringe Herausforderung",
        "SDG erreicht",
    ];
    let choicesSDGENglish = [
        "Information unavailable",
        "Major challenges remain",
        "Significant challenges remain",
        "Challenges remain",
        "SDG achieved",
    ];
</script>

<div class="my-12 bg-primary-50 border">
    <h1 class="text-left md:ml-20 text-xl">{question}</h1>
    <div
        class="flex flex-col md:flex-row items-start md:items-center justify-center my-2"
    >
        {#each language === "english" ? (topicIndex > 3 ? choicesSDGENglish : topicIndex >= 1 ? choicesTechnologiesEnglish : choicesDigitalEnablementEnglish) : topicIndex > 3 ? choicesSDGGerman : topicIndex >= 1 ? choicesTechnologiesGerman : choicesDigitalEnablementGerman as choice, index}
            <div class="my-2">
                <label
                    class="flex flex-row md:flex-col md:mx-7 items-center md:items-center justify-center"
                >
                    <input
                        class="h-6 w-6 rounded-xl text-primary-500 ml-2 mr-4"
                        type="radio"
                        bind:group={answers[topicIndex][questionIndex]}
                        value={index + 1}
                    />
                    <span class="md:text-center text-sm md:text-base">
                        {choice}
                    </span>
                </label>
            </div>
        {/each}
    </div>
</div>
