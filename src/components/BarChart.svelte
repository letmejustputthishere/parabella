<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";

    export let id: string;
    export let answers: number[];
    export let labels: string[];
    export let competition: number[];

    function initChart() {
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
        const canvas = <HTMLCanvasElement>document.getElementById(id);
        const ctx = canvas.getContext("2d");

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

    onMount(initChart);
</script>

<canvas {id} width="4" height="4" />
