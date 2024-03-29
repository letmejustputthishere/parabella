<script>
    import { onMount } from "svelte";
    import ScatterChart from "../components/ScatterChart.svelte";
    import RadarChart from "../components/RadarChart.svelte";
    import BarChart from "../components/BarChart.svelte";
    import { topFunction } from "../utils/scrollToTop";

    export let answers: number[][];
    export let language: string;

    let labels = [
        [
            "Digital Strategy",
            "Training concepts / further education",
            "Process and data harmonization",
            "Digital Portfolio Management",
            "Digitalization, Transformation Governance",
            "Cross functional Teams",
            "Dynamic Capabilities",
            "Resistance to change",
            "Building Transparency",
        ],
        [
            "Cloud-based e-procurement",
            "Supplier management platform",
            "Contract management tool",
            "Spend management platform",
            "RPA",
            "Machine learning",
            "TMS",
            "Predictive analytics",
            "Material flow system",
            "IoT",
        ],
        [
            "S&OP",
            "Demand sensing",
            "Supply planning",
            "Production planning",
            "MES",
            "Paperless Cockpit",
            "M2M",
            "IoT",
            "AD",
            "RPA",
            "Machine learning",
        ],
        [
            "CRM",
            "Chatbot",
            "RPA",
            "Machine learning",
            "WMS",
            "Hands-free picking",
            "IoT",
            "Digital Twin",
            "TMS",
            "Transport platform",
        ],
        [
            "1. No poverty",
            "2. No hunger",
            "3. Health",
            "4. Quality Education",
            "5. Gender equality",
            "6. Clean water",
            "7. Clean energy",
            "8. Economic growth",
            "9. Infrastructure",
            "10. Reduced inequalities",
            "11. Sustainable cities",
            "12. Responsible consumption",
            "13. Climate action",
            "14. Life below water",
            "15. Life on land",
            "16. Peace and justice",
            "17. Partnerships",
        ],
        // ["1.4", "1.b"],
        // ["2.1", "2.1"],
        // ["3.8", "3.9"],
        // ["4.4", "4.a"],
        // ["5.1", "5.5"],
        // ["6.3", "6.4"],
        // ["7.2", "7.a"],
        // ["8.2", "8.3", "8.5", "8.7", "8.8"],
        // ["9.1", "9.3", "9.4"],
        // ["10.2", "10.3"],
        // ["11.2", "11.6"],
        // ["12.2", "12.5", "12.6", "12.8"],
        // ["13.1", "13.2", "13.3"],
        // ["14.1", "14.b"],
        // ["15.a", "15.b"],
        // ["16.5", "16.6"],
        // ["17.12", "17.16"],
    ];

    // mockup data
    let competition = [
        [3.5, 3.5, 4, 3.5, 4, 4.5, 4, 3.5, 3.5],
        [2, 2.5, 2, 2.5, 1.5, 1.5, 2, 1.5, 2, 1.5],
        [2.5, 3, 2.5, 2.5, 2, 2, 2, 1.5, 1.5, 1.5, 1.5],
        [3, 1.5, 1.5, 1.5, 3, 1.5, 1.5, 1.5, 2, 2],
        [1.5, 1, 2, 2.5, 3, 1.5, 2, 3.5, 3, 2.5, 1.5, 2.5, 3, 1, 2, 1.5, 2.5],
    ];

    onMount(topFunction);
</script>

<div class="flex flex-col justify-center items-center m-1 md:m-8">
    <div class="mt-20 w-full md:w-2/3">
        <h1 class="md:-ml-6 text-4xl mb-3">Digital Enablement</h1>
        <div class="flex flex-col justify-center items-center">
            <div class="m-8 w-full md:w-2/3">
                <RadarChart
                    answers={answers[0]}
                    labels={labels[0]}
                    competition={competition[0]}
                    id="enablement"
                />
                <BarChart
                    answers={answers[0]}
                    competition={competition[0]}
                    id="enablement-bar"
                />
            </div>
        </div>
    </div>
    <div class="mt-10 w-full md:w-2/3">
        <h1 class="md:-ml-6 text-4xl mb-3">Technology Adoption</h1>
        <div class="flex flex-col justify-center items-center">
            <div class="m-8 w-full md:w-2/3">
                <h2 class="text-2xl mb-3">Source to Pay</h2>
                <RadarChart
                    answers={answers[1]}
                    labels={labels[1]}
                    competition={competition[1]}
                    id="stp"
                />
                <BarChart
                    answers={answers[1]}
                    competition={competition[1]}
                    id="stp-bar"
                />
            </div>
        </div>
        <div class="flex flex-col justify-center items-center">
            <div class="m-8 w-full md:w-2/3">
                <h2 class="text-2xl mb-3">Plan to Produce</h2>
                <RadarChart
                    answers={answers[2]}
                    labels={labels[2]}
                    competition={competition[2]}
                    id="ptp"
                />
                <BarChart
                    answers={answers[2]}
                    competition={competition[2]}
                    id="ptp-bar"
                />
            </div>
        </div>
        <div class="flex flex-col items-center justify-center">
            <div class="m-8 w-full md:w-2/3">
                <h2 class="text-2xl mb-3">Order to Cash</h2>
                <RadarChart
                    answers={answers[3]}
                    labels={labels[3]}
                    competition={competition[3]}
                    id="otc"
                />
                <BarChart
                    answers={answers[3]}
                    competition={competition[3]}
                    id="otc-bar"
                />
            </div>
        </div>
    </div>
    <div class="mt-10 w-full md:w-2/3">
        <h1 class="md:-ml-6 text-4xl mb-3">
            {language === "english" ? "Your category" : "Ihre Kategorie"}
        </h1>
        <div class="flex flex-col items-center justify-center">
            <div class="m-8 w-full md:w-2/3">
                <!-- dont pass down SDG data as its not relevant here -->
                <ScatterChart answers={answers.slice(0, 4)} {language} />
            </div>
        </div>
    </div>
    <div class="mt-20 w-full md:w-2/3">
        <h1 class="md:-ml-6 text-4xl mb-3">Sustainable Development Goals</h1>
        <div class="flex flex-col justify-center items-center">
            <div class="m-8 w-full md:w-2/3">
                <RadarChart
                    answers={Array.from(
                        answers.slice(4),
                        (answer) =>
                            answer.reduce((a, b) => a + b, 0) / answer.length
                    )}
                    labels={labels[4]}
                    competition={competition[4]}
                    id="sdg"
                />
                <BarChart
                    answers={Array.from(
                        answers.slice(4),
                        (answer) =>
                            answer.reduce((a, b) => a + b, 0) / answer.length
                    )}
                    competition={competition[4]}
                    id="sdg-bar"
                />
            </div>
        </div>
    </div>
</div>
