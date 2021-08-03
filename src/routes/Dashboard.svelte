<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";
    import ScatterChart from "../components/ScatterChart.svelte";
    import RadarChart from "../components/RadarChart.svelte";

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
        ["Source to Pay", "Plan to Produce", "Order to Cash"],
    ];

    // mockup data
    let competition = [
        [3.4, 2.1, 4, 1.2, 1, 3, 4, 1, 3.5],
        [3.4, 2.1, 4, 1.2, 1, 3, 4, 1, 3.5, 2],
        [3.4, 2.1, 4, 1.2, 1, 3, 4, 1, 3.5, 2, 5],
        [3.4, 2.1, 4, 1.2, 1, 3, 4, 1, 3.5, 2],
    ];
</script>

<div class="flex flex-col justify-center items-center m-8">
    <div class="m-20 w-2/3">
        <h1 class="-ml-6 text-4xl mb-3">Digital Enablement</h1>
        <div class="m-8">
            <RadarChart
                answers={answers[0]}
                labels={labels[0]}
                competition={competition[0]}
                id="enablement"
            />
        </div>
    </div>
    <div class="m-20 w-2/3">
        <h1 class="-ml-6 text-4xl mb-3">Technology Adoption</h1>
        <div class="m-8">
            <h2 class="text-2xl mb-3">Source to Pay</h2>
            <RadarChart
                answers={answers[1]}
                labels={labels[1]}
                competition={competition[1]}
                id="stp"
            />
        </div>
        <div class="m-8">
            <h2 class="text-2xl mb-3">Plan to Produce</h2>
            <RadarChart
                answers={answers[2]}
                labels={labels[2]}
                competition={competition[2]}
                id="ptp"
            />
        </div>
        <div class="m-8">
            <h2 class="text-2xl mb-3">Order to Cash</h2>
            <RadarChart
                answers={answers[3]}
                labels={labels[3]}
                competition={competition[3]}
                id="otc"
            />
        </div>
    </div>
    <div class="m-20 w-2/3">
        <div class="m-8">
            <h1 class="text-4xl mb-3">
                {language === "english" ? "Your category" : "Ihre Kategorie"}
            </h1>
            <ScatterChart {answers} {language} />
        </div>
    </div>
</div>
