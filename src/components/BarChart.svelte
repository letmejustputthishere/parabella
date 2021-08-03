<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";
    import { calculateNestedSum, calculateSum } from "../utils/calculations";

    export let id: string;
    export let answers: number[];
    export let competition: number[];

    function initChart() {
        const data = {
            labels: [""],
            datasets: [
                {
                    label: "Your company",
                    data: [calculateSum(answers)],
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
                    data: [calculateSum(competition)],
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
        const canvas = <HTMLCanvasElement>document.getElementById(id);
        const ctx = canvas.getContext("2d");

        new Chart(ctx, {
            type: "bar",
            data: data,
            options: {
                indexAxis: "y",
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            min: 0,
                            max: 5 * answers.length,
                            callback: function (value: number) {
                                return (
                                    (
                                        (value / (5 * answers.length)) *
                                        100
                                    ).toFixed(0) + "%"
                                ); // convert it to percentage
                            },
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Percentage",
                        },
                    },
                    y: {
                        beginAtZero: true,
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

    onMount(initChart);
</script>

<canvas {id} width="4" height="4" />
