import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute } from './ssr-maH9RnpE.js';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { r as rawData, P as PieChart } from './PieChart-BkkDFOp9.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './client-BUusD8wq.js';
import dayjs from 'dayjs';

const css$1 = {
  code: ".bar-chart-panel.svelte-11kpusc{width:100%;height:auto;aspect-ratio:16 / 9}",
  map: '{"version":3,"file":"BarChart.svelte","sources":["BarChart.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Bar } from \\"svelte-chartjs\\";\\nimport {\\n  Chart as ChartJS,\\n  CategoryScale,\\n  LinearScale,\\n  BarElement,\\n  PointElement,\\n  LineElement,\\n  Title,\\n  Tooltip,\\n  Legend\\n} from \\"chart.js\\";\\nimport { onMount, afterUpdate } from \\"svelte\\";\\nimport ChartDataLabels from \\"chartjs-plugin-datalabels\\";\\nChartJS.register(\\n  CategoryScale,\\n  LinearScale,\\n  BarElement,\\n  PointElement,\\n  LineElement,\\n  Title,\\n  Tooltip,\\n  Legend,\\n  ChartDataLabels\\n  // 注册插件\\n);\\nexport let bgColor = \\"transparent\\";\\nexport let barColor = \\"\\";\\nexport let dataRes;\\nexport let timeLabels = [];\\nexport let titleText;\\nlet innerData;\\nlet innerLabels;\\nlet datasets = [];\\nconst gridColor = \\"#272D3233\\";\\n[];\\nlet barData = {\\n  labels: [],\\n  datasets: []\\n};\\nlet options = {\\n  responsive: true,\\n  layout: {},\\n  plugins: {\\n    legend: {\\n      display: false\\n    },\\n    title: {\\n      display: true,\\n      text: titleText,\\n      // 在這裡設置標題文本\\n      font: {\\n        size: 12\\n      },\\n      align: \\"start\\",\\n      color: \\"#fff\\"\\n    },\\n    // annotation: {\\n    //   drawTime: \'beforeDatasetsDraw\',\\n    //   annotations: [] as Annotation[],\\n    // },\\n    datalabels: {\\n      display: false\\n      // 禁用数据标签\\n    }\\n  },\\n  scales: {\\n    x: {\\n      grid: {\\n        display: true\\n      }\\n    },\\n    y: {\\n      grid: {\\n        display: true,\\n        color: gridColor\\n      },\\n      type: \\"linear\\",\\n      position: \\"left\\"\\n    }\\n  }\\n};\\nconst updateChart = () => {\\n  if (!dataRes) {\\n    return;\\n  }\\n  innerData = Object.values(dataRes);\\n  innerLabels = timeLabels;\\n  datasets = [\\n    {\\n      label: \\"device\\",\\n      data: innerData,\\n      borderColor: barColor || \\"#4CADFE\\",\\n      backgroundColor: `${barColor}80` || \\"#4CADFE80\\",\\n      borderWidth: 1,\\n      maxBarThickness: 48\\n    }\\n  ];\\n  barData = {\\n    labels: innerLabels,\\n    datasets\\n  };\\n};\\nonMount(() => {\\n  updateChart();\\n});\\nafterUpdate(() => {\\n  updateChart();\\n});\\n<\/script>\\n\\n<div class=\\"bar-chart-panel\\" style={`background-color:${bgColor}`}>\\n  {#if innerData && innerLabels.length}\\n    <Bar data={barData} {options} />\\n  {/if}\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  .bar-chart-panel {\\n    width: 100%;\\n    height: auto;\\n    aspect-ratio: 16 / 9;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsHE,+BAAiB,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,EAAE,CAAC,CAAC,CAAC,CACrB"}'
};
const BarChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);
  let { bgColor = "transparent" } = $$props;
  let { barColor = "" } = $$props;
  let { dataRes } = $$props;
  let { timeLabels = [] } = $$props;
  let { titleText } = $$props;
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0) $$bindings.bgColor(bgColor);
  if ($$props.barColor === void 0 && $$bindings.barColor && barColor !== void 0) $$bindings.barColor(barColor);
  if ($$props.dataRes === void 0 && $$bindings.dataRes && dataRes !== void 0) $$bindings.dataRes(dataRes);
  if ($$props.timeLabels === void 0 && $$bindings.timeLabels && timeLabels !== void 0) $$bindings.timeLabels(timeLabels);
  if ($$props.titleText === void 0 && $$bindings.titleText && titleText !== void 0) $$bindings.titleText(titleText);
  $$result.css.add(css$1);
  return `<div class="bar-chart-panel svelte-11kpusc"${add_attribute("style", `background-color:${bgColor}`, 0)}>${``} </div>`;
});
const css = {
  code: ".main-container.svelte-u5vrpx.svelte-u5vrpx{width:1280px;height:948px;display:flex;justify-content:center;align-items:center}.main-container.svelte-u5vrpx .center-panel.svelte-u5vrpx{width:85%;height:auto;aspect-ratio:4 / 3;background-color:#213e61;border-radius:70px;display:flex;flex-direction:column;padding:40px 40px;box-sizing:border-box}.main-container.svelte-u5vrpx .center-panel .title-row.svelte-u5vrpx{width:100%;align-items:center;display:flex;justify-content:center}.main-container.svelte-u5vrpx .center-panel .title-row .title-text.svelte-u5vrpx{color:#fff;font-size:22px;margin:0 0 10px 0}.main-container.svelte-u5vrpx .center-panel .desc-row.svelte-u5vrpx{height:30px;width:100%;display:flex;justify-content:space-between}.main-container.svelte-u5vrpx .center-panel .desc-row .nav-btn.svelte-u5vrpx{all:unset;width:60px;height:30px;background-color:transparent;font-size:20px;margin-right:5px;cursor:pointer;transition:0.3s;display:flex;justify-content:center;align-items:center;color:#fff}.main-container.svelte-u5vrpx .center-panel .desc-row .nav-btn.svelte-u5vrpx:hover{background-color:#3ea5ea}.main-container.svelte-u5vrpx .center-panel .desc-row .date.svelte-u5vrpx{color:#ffffff80;font-size:20px}.main-container.svelte-u5vrpx .center-panel .center-row.svelte-u5vrpx{display:flex;height:calc(100% - 40px);width:100%}.main-container.svelte-u5vrpx .center-panel .center-row .left-side.svelte-u5vrpx{height:100%;width:75%}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap.svelte-u5vrpx{display:flex;height:calc(100% - 0px);flex-wrap:wrap}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart.svelte-u5vrpx{width:calc(50% - 10px);box-sizing:border-box;padding:10px;height:100%;border:1px solid #3075a3;border-radius:40px;background-color:rgb(25, 36, 56);display:flex;justify-content:center;flex-direction:column;align-items:center}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart .text.svelte-u5vrpx{color:#fff;font-size:20px}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart .today.svelte-u5vrpx{display:flex;flex-direction:column;align-items:center}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart .today .today-dsum-title.svelte-u5vrpx{font-size:16px;color:#fff}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart .today .today-dsum-value.svelte-u5vrpx{font-size:22px;color:#3ea5ea}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom.svelte-u5vrpx{display:flex;flex-wrap:wrap}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom .each-info.svelte-u5vrpx{display:flex;flex-direction:column;align-items:center;width:50%}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom .each-info .info-title.svelte-u5vrpx{font-size:16px;color:#fff}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom .each-info .info-value.svelte-u5vrpx{font-size:18px;color:#3ea5ea}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart .piechart-title.svelte-u5vrpx{color:#fff;font-size:18px;margin:4cqh 0 20px 0}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart.svelte-u5vrpx:nth-child(odd){margin:0 5px 0 0}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart.svelte-u5vrpx:nth-child(1){margin-bottom:5px}.main-container.svelte-u5vrpx .center-panel .center-row .left-side .chart-wrap .each-chart.svelte-u5vrpx:nth-child(2){margin-bottom:5px}.main-container.svelte-u5vrpx .center-panel .center-row .right-side.svelte-u5vrpx{display:flex;flex-direction:column;height:calc(100% - 10px);width:25%}.main-container.svelte-u5vrpx .center-panel .center-row .right-side .top-panel.svelte-u5vrpx{width:100%;height:100%;border:1px solid #3075a3;border-radius:40px;background-color:rgb(25, 36, 56);display:flex;flex-direction:column;align-items:center;box-sizing:border-box;padding:10px}.main-container.svelte-u5vrpx .center-panel .center-row .right-side .top-panel .right-title.svelte-u5vrpx{margin-top:20px;margin-bottom:20px;color:#fff;justify-content:center;font-size:20px}.main-container.svelte-u5vrpx .center-panel .center-row .right-side .top-panel .each-info.svelte-u5vrpx{display:flex;margin:0 0 20px 30px}.main-container.svelte-u5vrpx .center-panel .center-row .right-side .top-panel .each-info .info-title.svelte-u5vrpx{color:#fff;width:120px}.main-container.svelte-u5vrpx .center-panel .center-row .right-side .top-panel .each-info .info-value.svelte-u5vrpx{color:#3ea5ea;width:100px}.main-container.svelte-u5vrpx .center-panel .center-row .right-side .tip.svelte-u5vrpx{width:100%;display:flex;justify-content:center;color:#fff;font-size:16px;margin:10px 0 0 0}",
  map: '{"version":3,"file":"OtherPort.svelte","sources":["OtherPort.svelte"],"sourcesContent":["<script lang=\\"ts\\">import BarChart from \\"./BarChart.svelte\\";\\nimport rawData from \\"./energy_water_data_sorted.json\\";\\nimport PieChart from \\"./PieChart.svelte\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport dayjs from \\"dayjs\\";\\nexport let portName = \\"\\";\\nlet timeLabels = [\\n  \\"1\\",\\n  \\"2\\",\\n  \\"3\\",\\n  \\"4\\",\\n  \\"5\\",\\n  \\"6\\",\\n  \\"7\\",\\n  \\"8\\",\\n  \\"9\\",\\n  \\"10\\",\\n  \\"11\\",\\n  \\"12\\",\\n  \\"13\\",\\n  \\"14\\",\\n  \\"15\\",\\n  \\"16\\",\\n  \\"17\\",\\n  \\"18\\",\\n  \\"19\\",\\n  \\"20\\",\\n  \\"21\\",\\n  \\"22\\",\\n  \\"23\\"\\n];\\nlet originalDate = rawData.RESULT[0].USE_DATE;\\nlet formattedDate = dayjs(originalDate, \\"YYYYMMDD\\").format(\\"YYYY/MM/DD\\");\\nlet dataRes = rawData.RESULT.map((item, index) => {\\n  return {\\n    port: item.PORT,\\n    userHour: item.USE_HOUR,\\n    power_hsum: item.POWER_HSUM,\\n    power_dsum_zone_ratio: item.POWER_DSUM_ZONE_RATIO,\\n    water_hsum: item.WATER_HSUM,\\n    water_dsum_zone_ratio: item.WATER_DSUM_ZONE_RATIO,\\n    POWER_YSUM: item.POWER_YSUM,\\n    POWER_MSUM: item.POWER_MSUM,\\n    POWER_YSUM_CO2: item.POWER_YSUM_CO2,\\n    POWER_MSUM_CO2: item.POWER_MSUM_CO2,\\n    WATER_YSUM_CO2: item.WATER_YSUM_CO2,\\n    WATER_MSUM_CO2: item.WATER_MSUM_CO2,\\n    WATER_YSUM: item.WATER_YSUM,\\n    WATER_MSUM: item.WATER_MSUM,\\n    POWER_DSUM: item.POWER_DSUM,\\n    WATER_DSUM: item.WATER_DSUM\\n  };\\n});\\nconsole.log(\\"dataRes::: \\", dataRes);\\nlet dataResPort = dataRes.filter((item) => {\\n  return item.port === portName;\\n});\\nlet barDataPower = dataResPort.map((item) => {\\n  return item.power_hsum;\\n});\\nlet barDataWater = dataResPort.map((item) => {\\n  return item.water_hsum;\\n});\\nconst pieDataPower = {\\n  POWER_DSUM_ZONE_RATIO: dataResPort[22].power_dsum_zone_ratio\\n};\\nconst labelsPower = pieDataPower.POWER_DSUM_ZONE_RATIO.map(\\n  (item) => item.zone\\n);\\nconst ratiosPower = pieDataPower.POWER_DSUM_ZONE_RATIO.map(\\n  (item) => item.ratio\\n);\\nconst pieDataWater = {\\n  Water_DSUM_ZONE_RATIO: dataResPort[22].power_dsum_zone_ratio\\n};\\nconst labelsWater = pieDataWater.Water_DSUM_ZONE_RATIO.map(\\n  (item) => item.zone\\n);\\nconst ratiosWater = pieDataWater.Water_DSUM_ZONE_RATIO.map(\\n  (item) => item.ratio\\n);\\nfunction getPortNAme(portName2) {\\n  switch (portName2) {\\n    case \\"KHH\\":\\n      return \\"\\\\u9AD8\\\\u96C4\\\\u6E2F\\";\\n    case \\"PUT\\":\\n      return \\"\\\\u5E03\\\\u888B\\\\u6E2F\\";\\n    case \\"APG\\":\\n      return \\"\\\\u5B89\\\\u5E73\\\\u6E2F\\";\\n    case \\"MZG\\":\\n      return \\"\\\\u99AC\\\\u516C\\\\u6E2F\\";\\n    default:\\n      \\"\\\\u5176\\\\u4ED6\\";\\n  }\\n}\\nfunction toMainPort() {\\n  goto(\\"/MAIN\\");\\n}\\n<\/script>\\n\\n{#if portName}\\n  <div class=\\"main-container\\">\\n    <div class=\\"center-panel\\">\\n      <div class=\\"title-row\\">\\n        <div class=\\"title-text\\">\\n          {getPortNAme(portName)}能源管理資訊平台\\n        </div>\\n      </div>\\n      <div class=\\"desc-row\\">\\n        <button class=\\"nav-btn\\" on:click={toMainPort}>總港</button>\\n        <div class=\\"date\\">{formattedDate}</div>\\n      </div>\\n      <div class=\\"center-row\\">\\n        <div class=\\"left-side\\">\\n          <div class=\\"chart-wrap\\">\\n            <div class=\\"each-chart\\">\\n              <div class=\\"text\\">智慧電表電力資訊</div>\\n              <div class=\\"today\\">\\n                <div class=\\"today-dsum-title\\">當日累計用電量</div>\\n                <div class=\\"today-dsum-value\\">\\n                  {dataResPort[22].POWER_DSUM}度\\n                </div>\\n              </div>\\n              <BarChart\\n                dataRes={barDataPower}\\n                {timeLabels}\\n                titleText=\\"本日發電量 (逐時統計)\\"\\n              />\\n              <div class=\\"chart-bottom\\">\\n                <div class=\\"each-info\\">\\n                  <div class=\\"info-title\\">當月累計用電量</div>\\n                  <div class=\\"info-value\\">\\n                    {Math.round(dataResPort[22].POWER_MSUM)} 度\\n                  </div>\\n                </div>\\n                <div class=\\"each-info\\">\\n                  <div class=\\"info-title\\">當月累計碳排量</div>\\n                  <div class=\\"info-value\\">\\n                    {Math.round(dataResPort[22].POWER_MSUM_CO2)} 噸\\n                  </div>\\n                </div>\\n                <div class=\\"each-info\\">\\n                  <div class=\\"info-title\\">當年累計用電量</div>\\n                  <div class=\\"info-value\\">\\n                    {Math.round(dataResPort[22].POWER_YSUM)} 噸\\n                  </div>\\n                </div>\\n                <div class=\\"each-info\\">\\n                  <div class=\\"info-title\\">當年累計碳排量</div>\\n                  <div class=\\"info-value\\">\\n                    {Math.round(dataResPort[22].POWER_YSUM_CO2)} 噸\\n                  </div>\\n                </div>\\n              </div>\\n              <div class=\\"piechart-title\\">重要場域當日用電比例</div>\\n              <PieChart labels={labelsPower} ratios={ratiosPower} />\\n            </div>\\n            <div class=\\"each-chart\\">\\n              <div class=\\"text\\">智慧水表水情資訊</div>\\n              <div class=\\"today\\">\\n                <div class=\\"today-dsum-title\\">當日累計用水量</div>\\n                <div class=\\"today-dsum-value\\">\\n                  {dataResPort[22].WATER_DSUM}噸\\n                </div>\\n              </div>\\n              <BarChart\\n                dataRes={barDataWater}\\n                {timeLabels}\\n                titleText=\\"本日用水量 (逐時統計)\\"\\n              />\\n              <div class=\\"chart-bottom\\">\\n                <div class=\\"each-info\\">\\n                  <div class=\\"info-title\\">當月累計用水量</div>\\n                  <div class=\\"info-value\\">\\n                    {Math.round(dataResPort[22].WATER_MSUM)} 噸\\n                  </div>\\n                </div>\\n                <div class=\\"each-info\\">\\n                  <div class=\\"info-title\\">當月累計碳排量</div>\\n                  <div class=\\"info-value\\">\\n                    {Math.round(dataResPort[22].WATER_MSUM_CO2)} 噸\\n                  </div>\\n                </div>\\n                <div class=\\"each-info\\">\\n                  <div class=\\"info-title\\">當年累計用水量</div>\\n                  <div class=\\"info-value\\">\\n                    {Math.round(dataResPort[22].WATER_MSUM)} 噸\\n                  </div>\\n                </div>\\n                <div class=\\"each-info\\">\\n                  <div class=\\"info-title\\">當年累計碳排量</div>\\n                  <div class=\\"info-value\\">\\n                    {Math.round(dataResPort[22].WATER_YSUM_CO2)} 噸\\n                  </div>\\n                </div>\\n              </div>\\n\\n              <div class=\\"piechart-title\\">重要場域當日用水比例</div>\\n              <PieChart labels={labelsWater} ratios={ratiosWater} />\\n            </div>\\n          </div>\\n        </div>\\n        <div class=\\"right-side\\">\\n          <div class=\\"top-panel\\">\\n            <div class=\\"right-title\\">綠色能源資訊</div>\\n            <div class=\\"each-info\\">\\n              <div class=\\"info-title\\">當日累計用電量</div>\\n              <div class=\\"info-value\\">\\n                {Math.round(dataResPort[22].POWER_DSUM)} 度\\n              </div>\\n            </div>\\n            <div class=\\"each-info\\">\\n              <div class=\\"info-title\\">當日累計用水量</div>\\n              <div class=\\"info-value\\">\\n                {Math.round(dataResPort[22].WATER_DSUM)} 噸\\n              </div>\\n            </div>\\n            <div class=\\"each-info\\">\\n              <div class=\\"info-title\\">當月累計碳排量</div>\\n              <div class=\\"info-value\\">\\n                {Math.round(dataResPort[22].WATER_MSUM)} 噸\\n              </div>\\n            </div>\\n            <div class=\\"each-info\\">\\n              <div class=\\"info-title\\">當年累計碳排量</div>\\n              <div class=\\"info-value\\">\\n                {Math.round(dataResPort[22].WATER_YSUM)} 噸\\n              </div>\\n            </div>\\n          </div>\\n          <div class=\\"tip\\">備註：每15分鐘更新一次</div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n{/if}\\n\\n<style lang=\\"postcss\\">\\n  .main-container {\\n    width: 1280px;\\n    height: 948px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n.main-container .center-panel {\\n      width: 85%;\\n      height: auto;\\n      aspect-ratio: 4 / 3;\\n      background-color: #213e61;\\n      border-radius: 70px;\\n      display: flex;\\n      flex-direction: column;\\n      padding: 40px 40px;\\n      box-sizing: border-box;\\n    }\\n.main-container .center-panel .title-row {\\n        width: 100%;\\n        align-items: center;\\n        display: flex;\\n        justify-content: center;\\n      }\\n.main-container .center-panel .title-row .title-text {\\n          color: #fff;\\n          font-size: 22px;\\n          margin: 0 0 10px 0;\\n        }\\n.main-container .center-panel .desc-row {\\n        height: 30px;\\n        width: 100%;\\n        display: flex;\\n        justify-content: space-between;\\n      }\\n.main-container .center-panel .desc-row .nav-btn {\\n          all: unset;\\n          width: 60px;\\n          height: 30px;\\n          background-color: transparent;\\n          font-size: 20px;\\n          margin-right: 5px;\\n          cursor: pointer;\\n          transition: 0.3s;\\n          display: flex;\\n          justify-content: center;\\n          align-items: center;\\n          color: #fff;\\n        }\\n.main-container .center-panel .desc-row .nav-btn:hover {\\n            background-color: #3ea5ea;\\n          }\\n.main-container .center-panel .desc-row .date {\\n          color: #ffffff80;\\n          font-size: 20px;\\n        }\\n.main-container .center-panel .center-row {\\n        display: flex;\\n        height: calc(100% - 40px);\\n        width: 100%;\\n      }\\n.main-container .center-panel .center-row .left-side {\\n          height: 100%;\\n          width: 75%;\\n        }\\n.main-container .center-panel .center-row .left-side .area-title {\\n            display: flex;\\n            flex-direction: column;\\n            color: #fff;\\n            font-size: 16px;\\n            font-weight: 400;\\n            height: 20px;\\n          }\\n.main-container .center-panel .center-row .left-side .chart-wrap {\\n            display: flex;\\n            height: calc(100% - 0px);\\n            flex-wrap: wrap;\\n          }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart {\\n              width: calc(50% - 10px);\\n              box-sizing: border-box;\\n              padding: 10px;\\n              height: 100%;\\n              border: 1px solid #3075a3;\\n              border-radius: 40px;\\n              background-color: rgb(25, 36, 56);\\n              display: flex;\\n              justify-content: center;\\n              flex-direction: column;\\n              align-items: center;\\n            }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .text {\\n                color: #fff;\\n                font-size: 20px;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .today {\\n                display: flex;\\n                flex-direction: column;\\n                align-items: center;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .today .today-dsum-title {\\n                  font-size: 16px;\\n                  color: #fff;\\n                }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .today .today-dsum-value {\\n                  font-size: 22px;\\n                  color: #3ea5ea;\\n                }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom {\\n                display: flex;\\n                flex-wrap: wrap;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom .each-info {\\n                  display: flex;\\n                  flex-direction: column;\\n                  align-items: center;\\n                  width: 50%;\\n                }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom .each-info .info-title {\\n                    font-size: 16px;\\n                    color: #fff;\\n                  }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom .each-info .info-value {\\n                    font-size: 18px;\\n                    color: #3ea5ea;\\n                  }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .piechart-title {\\n                color: #fff;\\n                font-size: 18px;\\n                margin: 4cqh 0 20px 0;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart:nth-child(odd) {\\n                margin: 0 5px 0 0;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart:nth-child(1) {\\n                margin-bottom: 5px;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart:nth-child(2) {\\n                margin-bottom: 5px;\\n              }\\n.main-container .center-panel .center-row .right-side {\\n          display: flex;\\n          flex-direction: column;\\n          height: calc(100% - 10px);\\n          width: 25%;\\n        }\\n.main-container .center-panel .center-row .right-side .top-panel {\\n            width: 100%;\\n            height: 100%;\\n            border: 1px solid #3075a3;\\n            border-radius: 40px;\\n            background-color: rgb(25, 36, 56);\\n            display: flex;\\n            flex-direction: column;\\n            align-items: center;\\n            box-sizing: border-box;\\n            padding: 10px;\\n          }\\n.main-container .center-panel .center-row .right-side .top-panel .right-title {\\n              margin-top: 20px;\\n              margin-bottom: 20px;\\n              color: #fff;\\n              justify-content: center;\\n              font-size: 20px;\\n            }\\n.main-container .center-panel .center-row .right-side .top-panel .each-info {\\n              display: flex;\\n              margin: 0 0 20px 30px;\\n            }\\n.main-container .center-panel .center-row .right-side .top-panel .each-info .info-title {\\n                color: #fff;\\n                width: 120px;\\n              }\\n.main-container .center-panel .center-row .right-side .top-panel .each-info .info-value {\\n                color: #3ea5ea;\\n                width: 100px;\\n              }\\n.main-container .center-panel .center-row .right-side .tip {\\n            width: 100%;\\n            display: flex;\\n            justify-content: center;\\n            color: #fff;\\n            font-size: 16px;\\n            margin: 10px 0 0 0;\\n          }\\n.main-container .center-panel .center-row .right-side .bottom-panel {\\n            width: 100%;\\n            height: 60%;\\n            border: 1px solid #3075a3;\\n            border-radius: 40px;\\n            background-color: rgb(25, 36, 56);\\n          }\\n</style>\\n"],"names":[],"mappings":"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"}'
};
function getPortNAme(portName2) {
  switch (portName2) {
    case "KHH":
      return "高雄港";
    case "PUT":
      return "布袋港";
    case "APG":
      return "安平港";
    case "MZG":
      return "馬公港";
  }
}
const OtherPort = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { portName = "" } = $$props;
  let timeLabels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23"
  ];
  let originalDate = rawData.RESULT[0].USE_DATE;
  let formattedDate = dayjs(originalDate, "YYYYMMDD").format("YYYY/MM/DD");
  let dataRes = rawData.RESULT.map((item, index) => {
    return {
      port: item.PORT,
      userHour: item.USE_HOUR,
      power_hsum: item.POWER_HSUM,
      power_dsum_zone_ratio: item.POWER_DSUM_ZONE_RATIO,
      water_hsum: item.WATER_HSUM,
      water_dsum_zone_ratio: item.WATER_DSUM_ZONE_RATIO,
      POWER_YSUM: item.POWER_YSUM,
      POWER_MSUM: item.POWER_MSUM,
      POWER_YSUM_CO2: item.POWER_YSUM_CO2,
      POWER_MSUM_CO2: item.POWER_MSUM_CO2,
      WATER_YSUM_CO2: item.WATER_YSUM_CO2,
      WATER_MSUM_CO2: item.WATER_MSUM_CO2,
      WATER_YSUM: item.WATER_YSUM,
      WATER_MSUM: item.WATER_MSUM,
      POWER_DSUM: item.POWER_DSUM,
      WATER_DSUM: item.WATER_DSUM
    };
  });
  console.log("dataRes::: ", dataRes);
  let dataResPort = dataRes.filter((item) => {
    return item.port === portName;
  });
  let barDataPower = dataResPort.map((item) => {
    return item.power_hsum;
  });
  let barDataWater = dataResPort.map((item) => {
    return item.water_hsum;
  });
  const pieDataPower = {
    POWER_DSUM_ZONE_RATIO: dataResPort[22].power_dsum_zone_ratio
  };
  const labelsPower = pieDataPower.POWER_DSUM_ZONE_RATIO.map((item) => item.zone);
  const ratiosPower = pieDataPower.POWER_DSUM_ZONE_RATIO.map((item) => item.ratio);
  const pieDataWater = {
    Water_DSUM_ZONE_RATIO: dataResPort[22].power_dsum_zone_ratio
  };
  const labelsWater = pieDataWater.Water_DSUM_ZONE_RATIO.map((item) => item.zone);
  const ratiosWater = pieDataWater.Water_DSUM_ZONE_RATIO.map((item) => item.ratio);
  if ($$props.portName === void 0 && $$bindings.portName && portName !== void 0) $$bindings.portName(portName);
  $$result.css.add(css);
  return `${portName ? `<div class="main-container svelte-u5vrpx"><div class="center-panel svelte-u5vrpx"><div class="title-row svelte-u5vrpx"><div class="title-text svelte-u5vrpx">${escape(getPortNAme(portName))}能源管理資訊平台</div></div> <div class="desc-row svelte-u5vrpx"><button class="nav-btn svelte-u5vrpx" data-svelte-h="svelte-13e14oo">總港</button> <div class="date svelte-u5vrpx">${escape(formattedDate)}</div></div> <div class="center-row svelte-u5vrpx"><div class="left-side svelte-u5vrpx"><div class="chart-wrap svelte-u5vrpx"><div class="each-chart svelte-u5vrpx"><div class="text svelte-u5vrpx" data-svelte-h="svelte-14wuy1v">智慧電表電力資訊</div> <div class="today svelte-u5vrpx"><div class="today-dsum-title svelte-u5vrpx" data-svelte-h="svelte-1fyvvt1">當日累計用電量</div> <div class="today-dsum-value svelte-u5vrpx">${escape(dataResPort[22].POWER_DSUM)}度</div></div> ${validate_component(BarChart, "BarChart").$$render(
    $$result,
    {
      dataRes: barDataPower,
      timeLabels,
      titleText: "本日發電量 (逐時統計)"
    },
    {},
    {}
  )} <div class="chart-bottom svelte-u5vrpx"><div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-1ul533h">當月累計用電量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].POWER_MSUM))} 度</div></div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-1eabzw1">當月累計碳排量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].POWER_MSUM_CO2))} 噸</div></div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-9yqpoh">當年累計用電量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].POWER_YSUM))} 噸</div></div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-s71u65">當年累計碳排量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].POWER_YSUM_CO2))} 噸</div></div></div> <div class="piechart-title svelte-u5vrpx" data-svelte-h="svelte-6ci6sg">重要場域當日用電比例</div> ${validate_component(PieChart, "PieChart").$$render($$result, { labels: labelsPower, ratios: ratiosPower }, {}, {})}</div> <div class="each-chart svelte-u5vrpx"><div class="text svelte-u5vrpx" data-svelte-h="svelte-fh1lmh">智慧水表水情資訊</div> <div class="today svelte-u5vrpx"><div class="today-dsum-title svelte-u5vrpx" data-svelte-h="svelte-1kvtp98">當日累計用水量</div> <div class="today-dsum-value svelte-u5vrpx">${escape(dataResPort[22].WATER_DSUM)}噸</div></div> ${validate_component(BarChart, "BarChart").$$render(
    $$result,
    {
      dataRes: barDataWater,
      timeLabels,
      titleText: "本日用水量 (逐時統計)"
    },
    {},
    {}
  )} <div class="chart-bottom svelte-u5vrpx"><div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-1d8vrps">當月累計用水量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].WATER_MSUM))} 噸</div></div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-1eabzw1">當月累計碳排量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].WATER_MSUM_CO2))} 噸</div></div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-1439od0">當年累計用水量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].WATER_MSUM))} 噸</div></div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-s71u65">當年累計碳排量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].WATER_YSUM_CO2))} 噸</div></div></div> <div class="piechart-title svelte-u5vrpx" data-svelte-h="svelte-12qxedd">重要場域當日用水比例</div> ${validate_component(PieChart, "PieChart").$$render($$result, { labels: labelsWater, ratios: ratiosWater }, {}, {})}</div></div></div> <div class="right-side svelte-u5vrpx"><div class="top-panel svelte-u5vrpx"><div class="right-title svelte-u5vrpx" data-svelte-h="svelte-2tz9xw">綠色能源資訊</div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-zveyea">當日累計用電量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].POWER_DSUM))} 度</div></div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-3rirln">當日累計用水量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].WATER_DSUM))} 噸</div></div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-1eabzw1">當月累計碳排量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].WATER_MSUM))} 噸</div></div> <div class="each-info svelte-u5vrpx"><div class="info-title svelte-u5vrpx" data-svelte-h="svelte-s71u65">當年累計碳排量</div> <div class="info-value svelte-u5vrpx">${escape(Math.round(dataResPort[22].WATER_YSUM))} 噸</div></div></div> <div class="tip svelte-u5vrpx" data-svelte-h="svelte-1ry2n6a">備註：每15分鐘更新一次</div></div></div></div></div>` : ``}`;
});

export { OtherPort as O };
//# sourceMappingURL=OtherPort-B1dhEU-h.js.map
