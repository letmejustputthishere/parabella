<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";

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

    let competition = [
        [3.4, 2.1, 4, 1.2, 1, 3, 4, 1, 3.5],
        [3.4, 2.1, 4, 1.2, 1, 3, 4, 1, 3.5, 2],
        [3.4, 2.1, 4, 1.2, 1, 3, 4, 1, 3.5, 2, 5],
        [3.4, 2.1, 4, 1.2, 1, 3, 4, 1, 3.5, 2],
    ];

    var plugin = {
        beforeDraw: function (chart: any) {
            var chartArea = chart.chartArea;
            var ctx = chart.ctx;

            // Replace these IDs if you have given your axes IDs in the config
            var xScale = chart.scales["x"];
            var yScale = chart.scales["y"];

            console.log(ctx);

            var midX = xScale.getPixelForValue(xScale.max / 2);
            var midY = yScale.getPixelForValue(yScale.max / 2);

            // Top left quadrant
            ctx.fillStyle = "rgba(255, 99, 132, 0.2)";
            ctx.fillRect(
                chartArea.left,
                chartArea.top,
                midX - chartArea.left,
                midY - chartArea.top
            );

            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.font = "2em sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(
                "Fashionistas",
                xScale.getPixelForValue(11.25),
                yScale.getPixelForValue(150)
            );

            ctx.fillText(
                "Digital Masters",
                xScale.getPixelForValue(3 * 11.25),
                yScale.getPixelForValue(150)
            );

            ctx.fillText(
                "Beginners",
                xScale.getPixelForValue(11.25),
                yScale.getPixelForValue(155 / 2 - 5)
            );

            ctx.fillText(
                "Conservatives",
                xScale.getPixelForValue(3 * 11.25),
                yScale.getPixelForValue(155 / 2 - 5)
            );

            // Top right quadrant
            ctx.fillStyle = "rgba(54, 162, 235, 0.2)";
            ctx.fillRect(
                midX,
                chartArea.top,
                chartArea.right - midX,
                midY - chartArea.top
            );

            // Bottom right quadrant
            ctx.fillStyle = "rgba(52, 211, 153, 0.2)";
            ctx.fillRect(
                midX,
                midY,
                chartArea.right - midX,
                chartArea.bottom - midY
            );

            // Bottom left quadrant
            ctx.fillStyle = "rgba(251, 191, 36, 0.2)";
            ctx.fillRect(
                chartArea.left,
                midY,
                midX - chartArea.left,
                chartArea.bottom - midY
            );
        },
    };

    function calculateSum(array: number[]) {
        let sum = 0;
        for (let index = 0; index < array.length; index++) {
            sum += array[index];
        }
        return sum;
    }

    function calculateNestedSum(array: number[][]) {
        let sum = 0;
        for (let index = 1; index < array.length; index++) {
            sum += calculateSum(array[index]);
        }
        return sum;
    }

    const data2 = {
        datasets: [
            {
                label: "Your company",
                data: [
                    {
                        x: calculateSum(answers[0]),
                        y: calculateNestedSum(answers),
                    },
                ],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                pointBackgroundColor: "rgb(255, 99, 132)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)",
            },
            {
                label: "Competition",
                data: [
                    {
                        x: 22,
                        y: 63,
                    },
                ],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(54, 162, 235)",
                pointBackgroundColor: "rgb(54, 162, 235)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(54, 162, 235)",
            },
        ],
    };

    function initChart(
        id: string,
        answers: number[],
        labels: string[],
        competition: number[]
    ) {
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Your company",
                    data: answers,
                    fill: true,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgb(255, 99, 132)",
                    pointBackgroundColor: "rgb(255, 99, 132)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgb(255, 99, 132)",
                },
                {
                    label: "Competition",
                    data: competition,
                    fill: true,
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgb(54, 162, 235)",
                    pointBackgroundColor: "rgb(54, 162, 235)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgb(54, 162, 235)",
                },
            ],
        };
        var ctx = document.getElementById(id).getContext("2d");
        new Chart(ctx, {
            type: "radar",
            data: data,
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        suggestedMin: 1,
                        suggestedMax: 5,
                    },
                },
                elements: {
                    line: {
                        borderWidth: 3,
                    },
                },
            },
        });
    }
    function createChart() {
        initChart("digital-enablement", answers[0], labels[0], competition[0]);
        initChart("stp", answers[1], labels[1], competition[1]);
        initChart("ptp", answers[2], labels[2], competition[2]);
        initChart("otc", answers[3], labels[3], competition[3]);

        // create scatter
        var ctx = document.getElementById("scatter").getContext("2d");
        new Chart(ctx, {
            type: "scatter",
            plugins: [plugin],
            data: data2,
            options: {
                scales: {
                    x: {
                        type: "linear",
                        position: "bottom",
                        min: 0,
                        max: 45,
                    },
                    y: {
                        type: "linear",
                        min: 0,
                        max: 155,
                    },
                },
                pointRadius: 10,
            },
        });
    }

    onMount(createChart);
</script>

<div class="flex flex-col justify-center items-center">
    <div class="w-2/3">
        <h1 class="-ml-6 text-4xl mb-3">Digital Enablement</h1>
        <canvas id="digital-enablement" width="4" height="4" />
    </div>
    <div class="w-2/3">
        <h1 class="-ml-6 text-4xl mb-3">Technology Adoption</h1>
        <h2 class="text-2xl mb-3">Source to Pay</h2>
        <canvas id="stp" width="4" height="4" />
        <h2 class="text-2xl mb-3">Plan to Produce</h2>
        <canvas id="ptp" width="4" height="4" />
        <h2 class="text-2xl mb-3">Order to Cash</h2>
        <canvas id="otc" width="4" height="4" />
    </div>
    <div class="w-2/3">
        <h1 class="text-4xl mb-3">Your category</h1>
        <canvas id="scatter" width="4" height="4" />
    </div>
</div>
