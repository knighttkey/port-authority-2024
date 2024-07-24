<script lang="ts">
  import { Pie } from "svelte-chartjs";
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
  export let labels: string[];

  export let ratios: number[];

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: ratios,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Power DSum Zone Ratio'
      },
      datalabels: {
        display: true,
        color: 'white',
        formatter: (value: number, context: any) => {
          return context.chart.data.labels[context.dataIndex] + '\n' + value + '%';
        }
      }
    }
  };
</script>

<div class="pie-container">
  <Pie data={chartData} {options} />
</div>

<style lang="postcss">
  .pie-container {
    width: 70%;
    height: 70%;
    canvas {
      max-width: 600px;
      max-height: 600px;
    }
  }
</style>
