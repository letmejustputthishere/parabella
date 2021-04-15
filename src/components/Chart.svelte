<script>
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";

    var plugin = {
        beforeDraw: function (chart) {
            var chartArea = chart.chartArea;
            var ctx = chart.ctx;

            // Replace these IDs if you have given your axes IDs in the config
            console.log(chart.scales);
            var xScale = chart.scales["x"];
            var yScale = chart.scales["y"];

            var midX = xScale.getPixelForValue(0);
            var midY = yScale.getPixelForValue(0);

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

    const data2 = {
        datasets: [
            {
                label: "Scatter Dataset",
                data: [
                    {
                        x: -10,
                        y: 0,
                    },
                    {
                        x: 0,
                        y: -6,
                    },
                    {
                        x: 10,
                        y: 5,
                    },
                    {
                        x: 0.5,
                        y: 5.5,
                    },
                ],
                backgroundColor: "rgb(255, 99, 132)",
            },
        ],
    };

    const data = {
        labels: [
            "Eating",
            "Drinking",
            "Sleeping",
            "Designing",
            "Coding",
            "Cycling",
            "Running",
        ],
        datasets: [
            {
                label: "My First Dataset",
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                pointBackgroundColor: "rgb(255, 99, 132)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)",
            },
            {
                label: "My Second Dataset",
                data: [28, 48, 40, 19, 96, 27, 100],
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

    function createChart() {
        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "radar",
            data: data,
            options: {
                elements: {
                    line: {
                        borderWidth: 3,
                    },
                },
            },
        });

        var ctx = document.getElementById("myChart2").getContext("2d");
        var myChart2 = new Chart(ctx, {
            type: "scatter",
            plugins: [plugin],
            data: data2,
            options: {
                scales: {
                    x: {
                        type: "linear",
                        position: "bottom",
                    },
                },
            },
        });
    }

    onMount(createChart);
</script>

<canvas id="myChart" width="4" height="4" />
<canvas id="myChart2" width="4" height="4" />
