<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";

    export let answers: number[][];
    export let language: string;

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

    var plugin = {
        beforeDraw: function (chart: any) {
            var chartArea = chart.chartArea;
            var ctx = chart.ctx;

            // Replace these IDs if you have given your axes IDs in the config
            var xScale = chart.scales["x"];
            var yScale = chart.scales["y"];

            var midX = xScale.getPixelForValue(xScale.max / 2);
            var midY = yScale.getPixelForValue(yScale.max / 2);

            // calculate the font size depending on the actual size
            // of the canvas element
            let fontSize = Math.floor(
                document.getElementById("scatter")!.offsetWidth / 23
            ).toString();
            ctx.fillStyle = "rgb(0, 0, 0)";
            ctx.font = fontSize + "px sans-serif";
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

            // Top left quadrant
            ctx.fillStyle = "rgba(255, 99, 132, 0.2)";
            ctx.fillRect(
                chartArea.left,
                chartArea.top,
                midX - chartArea.left,
                midY - chartArea.top
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

    function createChart() {
        // create scatter
        const canvas = <HTMLCanvasElement>document.getElementById("scatter");
        const ctx = canvas.getContext("2d");
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
                        title: {
                            text:
                                language === "english"
                                    ? [
                                          "Sum of all",
                                          "digital enablement points achieved",
                                      ]
                                    : [
                                          "Summe aller erreichten",
                                          "Digital Enablement Punkte",
                                      ],
                            display: true,
                            color: "black",
                            font: {
                                size: 30,
                            },
                        },
                    },
                    y: {
                        type: "linear",
                        min: 0,
                        max: 155,
                        title: {
                            text:
                                language === "english"
                                    ? [
                                          "Sum of all Technology",
                                          "points of all departments",
                                      ]
                                    : [
                                          "Summe aller Technology",
                                          "Punkte aller Abteilungen",
                                      ],
                            display: true,
                            color: "black",
                            font: {
                                size: 30,
                            },
                        },
                    },
                },
                pointRadius: 10,
            },
        });
    }

    onMount(createChart);
</script>

<canvas id="scatter" width="4" height="4" />
