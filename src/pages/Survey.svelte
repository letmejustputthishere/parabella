<script lang="ts">
import Question from "../components/Question.svelte";

    let questions = [
        "Our organization has a clear and coherent digital strategy.",
        "Employees are rewarded for learning in digitalization.",
        "Business processes and their data are harmonized thoroughly among business units and plants.",
        "Digital use cases are prioritized using portfolio management.",
        "The responsibility and methodology for governing digital initiatives are clearly defined.",
        "Cross-functional team work is highly important to the company.",
        "Dynamic Capabilities are established in order to react rapidly to internal and external changes.",
        "Our employees are made acquainted with digital 85 technologies and are enabled to use them.",
        "Digitalization is an ongoing strategic change 85 project in our entire company that is communicated across channels."
    ]
</script>


{#each questions as question}
    <Question {question}/>
{/each}