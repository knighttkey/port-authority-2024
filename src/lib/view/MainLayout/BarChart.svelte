<script lang="ts">
  import { Bar } from "svelte-chartjs";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import type { ChartOptions } from "chart.js";
  import type { ChartData } from "chart.js";
  import { onMount, afterUpdate } from "svelte";

  import ChartDataLabels from "chartjs-plugin-datalabels";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels // 注册插件
  );

  export let bgColor: string = "transparent";
  export let barColor: string = "";
  export let dataRes: number[];
  export let timeLabels: string[] = [];
  export let titleText:string

  let innerData: number[];
  let innerLabels: string[];
  let datasets = [];
  const gridColor = "#272D3233";

  interface BarChartDataSet {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }

  interface Annotation {
    type: string;
    yMin: number;
    yMax: number;
    borderColor: string;
    borderWidth: number;
    label: {
      content: string;
      enabled: boolean;
    };
  }
  [];

  let barData = {
    labels: [],
    datasets: [],
  } as ChartData<"bar", number[], unknown>;

  let options: ChartOptions<"bar"> = {
    responsive: true,
    layout: {},
    plugins: {
      legend: {
        display: false,
      },
	  title: {
                display: true,
                text: titleText, // 在這裡設置標題文本
                font: {
                    size: 12
                },
				align:'start',
				color:'#fff'
            },
      // annotation: {
      //   drawTime: 'beforeDatasetsDraw',
      //   annotations: [] as Annotation[],
      // },
      datalabels: {
        display: false, // 禁用数据标签
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: true,
          color: gridColor,
        },
        type: "linear",
        position: "left",
      },
    },
  };

  interface ExtendedBarDataSet extends BarChartDataSet {
    barThickness?: number;
    maxBarThickness?: number;
  }

  const updateChart = () => {
    if (!dataRes) {
      return;
    }
    innerData = Object.values(dataRes);
    innerLabels = timeLabels;

    datasets = [
      {
        label: "device",
        data: innerData,
        borderColor: barColor || "#4CADFE",
        backgroundColor: `${barColor}80` || "#4CADFE80",
        borderWidth: 1,
        maxBarThickness: 48,
      },
    ] as ExtendedBarDataSet[];

    barData = {
      labels: innerLabels as string[],
      datasets: datasets as ExtendedBarDataSet[],
    } as ChartData<"bar", number[], unknown>;
  };

  onMount(() => {
    updateChart();
  });

  afterUpdate(() => {
    updateChart();
  });
</script>

<div class="bar-chart-panel" style={`background-color:${bgColor}`}>
  {#if innerData && innerLabels.length}
    <Bar data={barData} {options} />
  {/if}
</div>

<style lang="postcss">
  .bar-chart-panel {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }
</style>
