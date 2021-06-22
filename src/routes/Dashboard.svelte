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
            "Cloud-based business network implemented for direct and indirect e-procurement.",
            "Digital supplier management platform in place foster collaboration",
            "Advanced and with supplier connected contract management tool is implemented",
            "Spend management platform in place supported by analytics",
            "Robotic process automation (RPA) technology in place to automate procure to pay processes.",
            "Artificial Intelligence / Machine-learning / Predictive Analytics to optimize Source-to-Pay processes",
            "Transportation Managemenent System  integrated to ERP to optimize inbound transports",
            "Predictive ETA-Calculation for incoming shipments is implemented",
            "Material flow system connection to ERP/WMS is established",
            "Internet of Things (IoT) infrastructure / platform is established",
        ],
        [
            "Advanced Sales & Operations Planning (S&OP) system in place",
            "Integrated demand sensing / planning system is implemented",
            "Integrated supply planning system is implemented",
            "Advanced production planning system is implemented and integrated to ERP",
            "Manufacturing Execution System (MES) is implemented integrated to ERP",
            "Paperless cockpits are established at shopfloor level",
            "Machine-to-machine communication is established",
            "Internet of Things (IoT) infrastructure / platform is implemented",
            "Automated Guided Vehicle / Driverless material transportation systems",
            "Robotics Process Automation (RPA) to automate plan-to-Produce processes",
            "Artificial Intelligence / Machine-learning / Predictive Analytics to optimize Plan-to-Produce processes",
        ],
        [
            "Customer relationship management system implemented and connected to ERP",
            "Chatbots in place to manage customer requests",
            "Robotics Process Automation (RPA) to support source-to-pay processes",
            "Artificial Intelligence / Machine-learning to optimize order-to-cash processes",
            "Warehouse management system implemented and connected to ERP",
            "Hands-free picking (Pick by voice/light, augmented reality)",
            "Internet of Things (IoT) infrastructure / platform",
            "Digital Twin of the distribution warehouse",
            "Transportation management system implemented and connected to ERP",
            "Visibility platform in place for outgoing transports",
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

<div class="flex flex-col justify-center items-center">
    <div class="w-2/3">
        <h1 class="-ml-6 text-4xl mb-3">Digital Enablement</h1>
        <RadarChart
            answers={answers[0]}
            labels={labels[0]}
            competition={competition[0]}
            id="enablement"
        />
    </div>
    <div class="w-2/3">
        <h1 class="-ml-6 text-4xl mb-3">Technology Adoption</h1>
        <div>
            <h2 class="text-2xl mb-3">Source to Pay</h2>
            <RadarChart
                answers={answers[1]}
                labels={labels[1]}
                competition={competition[1]}
                id="stp"
            />
        </div>
        <div>
            <h2 class="text-2xl mb-3">Plan to Produce</h2>
            <RadarChart
                answers={answers[2]}
                labels={labels[2]}
                competition={competition[2]}
                id="ptp"
            />
        </div>
        <div>
            <h2 class="text-2xl mb-3">Order to Cash</h2>
            <RadarChart
                answers={answers[3]}
                labels={labels[3]}
                competition={competition[3]}
                id="otc"
            />
        </div>
    </div>
    <div class="w-2/3">
        <h1 class="text-4xl mb-3">Your category</h1>
        <ScatterChart {answers} />
    </div>
</div>
