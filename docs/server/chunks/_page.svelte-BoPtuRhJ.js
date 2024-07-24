import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-maH9RnpE.js';
import { r as rawData, P as PieChart } from './PieChart-BkkDFOp9.js';
import './client-BUusD8wq.js';
import dayjs from 'dayjs';
import 'chart.js';
import 'chartjs-plugin-datalabels';
import './exports-BGi7-Rnc.js';

const css = {
  code: ".main-container.svelte-1avcnve.svelte-1avcnve{width:1280px;height:948px;display:flex;justify-content:center;align-items:center}.main-container.svelte-1avcnve .center-panel.svelte-1avcnve{width:85%;height:auto;aspect-ratio:4 / 3;background-color:#213e61;border-radius:70px;display:flex;flex-direction:column;padding:40px 40px;box-sizing:border-box}.main-container.svelte-1avcnve .center-panel .title-row.svelte-1avcnve{width:100%;align-items:center;display:flex;justify-content:center}.main-container.svelte-1avcnve .center-panel .title-row .title-text.svelte-1avcnve{color:#fff;font-size:22px;margin:0 0 10px 0}.main-container.svelte-1avcnve .center-panel .desc-row.svelte-1avcnve{height:30px;width:100%;display:flex;justify-content:flex-end}.main-container.svelte-1avcnve .center-panel .desc-row .date.svelte-1avcnve{color:#ffffff80;font-size:20px}.main-container.svelte-1avcnve .center-panel .center-row.svelte-1avcnve{display:flex;height:calc(100% - 40px);width:100%}.main-container.svelte-1avcnve .center-panel .center-row .left-side.svelte-1avcnve{height:100%;width:75%}.main-container.svelte-1avcnve .center-panel .center-row .left-side .area-title.svelte-1avcnve{display:flex;flex-direction:row;color:#fff;font-size:16px;font-weight:400;height:20px;margin-bottom:20px}.main-container.svelte-1avcnve .center-panel .center-row .left-side .area-title .nav-btn.svelte-1avcnve{all:unset;width:60px;height:30px;background-color:transparent;font-size:20px;margin-right:5px;cursor:pointer;transition:0.3s;display:flex;justify-content:center;align-items:center}.main-container.svelte-1avcnve .center-panel .center-row .left-side .area-title .nav-btn.svelte-1avcnve:hover{background-color:#3ea5ea}.main-container.svelte-1avcnve .center-panel .center-row .left-side .chart-wrap.svelte-1avcnve{display:flex;height:calc(100% - 40px);flex-wrap:wrap}.main-container.svelte-1avcnve .center-panel .center-row .left-side .chart-wrap .each-chart.svelte-1avcnve{width:calc(50% - 10px);box-sizing:border-box;padding:10px;height:100%;border:1px solid #3075a3;border-radius:40px;background-color:rgb(25, 36, 56);display:flex;justify-content:center;flex-direction:column;align-items:center}.main-container.svelte-1avcnve .center-panel .center-row .left-side .chart-wrap .each-chart .piechart-wrap.svelte-1avcnve{width:100%;height:100%;display:flex;justify-content:center}.main-container.svelte-1avcnve .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom.svelte-1avcnve{display:flex;flex-wrap:wrap}.main-container.svelte-1avcnve .center-panel .center-row .left-side .chart-wrap .each-chart .piechart-title.svelte-1avcnve{color:#fff;font-size:18px;margin:4cqh 0 20px 0}.main-container.svelte-1avcnve .center-panel .center-row .left-side .chart-wrap .each-chart.svelte-1avcnve:nth-child(odd){margin:0 5px 0 0}.main-container.svelte-1avcnve .center-panel .center-row .left-side .chart-wrap .each-chart.svelte-1avcnve:nth-child(1){margin-bottom:5px}.main-container.svelte-1avcnve .center-panel .center-row .left-side .chart-wrap .each-chart.svelte-1avcnve:nth-child(2){margin-bottom:5px}.main-container.svelte-1avcnve .center-panel .center-row .right-side.svelte-1avcnve{display:flex;flex-direction:column;height:calc(100% - 10px);width:25%}.main-container.svelte-1avcnve .center-panel .center-row .right-side .top-panel.svelte-1avcnve{width:100%;height:100%;border:1px solid #3075a3;border-radius:40px;background-color:rgb(25, 36, 56);display:flex;flex-direction:column;align-items:center;box-sizing:border-box;padding:10px}.main-container.svelte-1avcnve .center-panel .center-row .right-side .tip.svelte-1avcnve{width:100%;display:flex;justify-content:center;color:#fff;font-size:16px;margin:10px 0 0 0}",
  map: '{"version":3,"file":"MainPort.svelte","sources":["MainPort.svelte"],"sourcesContent":["<script lang=\\"ts\\">import rawData from \\"./energy_water_data_sorted.json\\";\\nimport PieChart from \\"./PieChart.svelte\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport dayjs from \\"dayjs\\";\\nlet timeLabels = [\\n  \\"1\\",\\n  \\"2\\",\\n  \\"3\\",\\n  \\"4\\",\\n  \\"5\\",\\n  \\"6\\",\\n  \\"7\\",\\n  \\"8\\",\\n  \\"9\\",\\n  \\"10\\",\\n  \\"11\\",\\n  \\"12\\",\\n  \\"13\\",\\n  \\"14\\",\\n  \\"15\\",\\n  \\"16\\",\\n  \\"17\\",\\n  \\"18\\",\\n  \\"19\\",\\n  \\"20\\",\\n  \\"21\\",\\n  \\"22\\",\\n  \\"23\\"\\n];\\nconsole.log(timeLabels, timeLabels.length);\\nlet originalDate = rawData.RESULT[0].USE_DATE;\\nlet formattedDate = dayjs(originalDate, \\"YYYYMMDD\\").format(\\"YYYY/MM/DD\\");\\nconst totelPower = {\\n  POWER_DSUM_ZONE_RATIO: [\\n    { zone: \\"\\\\u9AD8\\\\u96C4\\\\u6E2F\\", ratio: 28, dsum: 585.8 },\\n    { zone: \\"\\\\u5E03\\\\u888B\\\\u6E2F\\", ratio: 23, dsum: 485.8 },\\n    { zone: \\"\\\\u99AC\\\\u516C\\\\u6E2F\\", ratio: 25, dsum: 515.8 },\\n    { zone: \\"\\\\u5B89\\\\u5E73\\\\u6E2F\\", ratio: 24, dsum: 490.8 }\\n  ]\\n};\\nconst totalLabelsPower = totelPower.POWER_DSUM_ZONE_RATIO.map(\\n  (item) => item.zone\\n);\\nconst totalRatiosPower = totelPower.POWER_DSUM_ZONE_RATIO.map(\\n  (item) => item.ratio\\n);\\nconst totelWater = {\\n  Water_DSUM_ZONE_RATIO: [\\n    { zone: \\"\\\\u9AD8\\\\u96C4\\\\u6E2F\\", ratio: 34, dsum: 2408 },\\n    { zone: \\"\\\\u5E03\\\\u888B\\\\u6E2F\\", ratio: 20, dsum: 1408 },\\n    { zone: \\"\\\\u99AC\\\\u516C\\\\u6E2F\\", ratio: 25, dsum: 1708 },\\n    { zone: \\"\\\\u5B89\\\\u5E73\\\\u6E2F\\", ratio: 21, dsum: 1458 }\\n  ]\\n};\\nconst totalLabelsWater = totelWater.Water_DSUM_ZONE_RATIO.map(\\n  (item) => item.zone\\n);\\nconst totalRatiosWater = totelWater.Water_DSUM_ZONE_RATIO.map(\\n  (item) => item.ratio\\n);\\nfunction toAPG() {\\n  goto(\\"/APG\\");\\n}\\nfunction toKHH() {\\n  goto(\\"/KHH\\");\\n}\\nfunction toMZG() {\\n  goto(\\"/MZG\\");\\n}\\nfunction toPUT() {\\n  goto(\\"/PUT\\");\\n}\\n<\/script>\\n\\n<div class=\\"main-container\\">\\n  <div class=\\"center-panel\\">\\n    <div class=\\"title-row\\">\\n      <div class=\\"title-text\\">總港能源管理資訊平台</div>\\n    </div>\\n    <div class=\\"desc-row\\">\\n      <div class=\\"date\\">{formattedDate}</div>\\n    </div>\\n    <div class=\\"center-row\\">\\n      <div class=\\"left-side\\">\\n        <div class=\\"area-title\\">\\n          <button class=\\"nav-btn\\" on:click={toKHH}>高雄</button>\\n          <button class=\\"nav-btn\\" on:click={toPUT}>布袋</button>\\n          <button class=\\"nav-btn\\" on:click={toMZG}>馬公</button>\\n          <button class=\\"nav-btn\\" on:click={toAPG}>安平</button>\\n        </div>\\n        <div class=\\"chart-wrap\\">\\n          <div class=\\"each-chart\\">\\n            <div class=\\"piechart-title\\">各港區智慧電表當日用電比例</div>\\n            <div class=\\"piechart-wrap\\">\\n              <PieChart labels={totalLabelsPower} ratios={totalRatiosPower} />\\n            </div>\\n            <div class=\\"chart-bottom\\"></div>\\n          </div>\\n          <div class=\\"each-chart\\">\\n            <div class=\\"piechart-title\\">各港區智慧水表當日用水比例</div>\\n            <div class=\\"piechart-wrap\\">\\n              <PieChart labels={totalLabelsWater} ratios={totalRatiosWater} />\\n            </div>\\n\\n            <div class=\\"chart-bottom\\"></div>\\n          </div>\\n        </div>\\n      </div>\\n      <div class=\\"right-side\\">\\n        <div class=\\"top-panel\\"></div>\\n        <div class=\\"tip\\">備註：每15分鐘更新一次</div>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  .main-container {\\n    width: 1280px;\\n    height: 948px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n.main-container .center-panel {\\n      width: 85%;\\n      height: auto;\\n      aspect-ratio: 4 / 3;\\n      background-color: #213e61;\\n      border-radius: 70px;\\n      display: flex;\\n      flex-direction: column;\\n      padding: 40px 40px;\\n      box-sizing: border-box;\\n    }\\n.main-container .center-panel .title-row {\\n        width: 100%;\\n        align-items: center;\\n        display: flex;\\n        justify-content: center;\\n      }\\n.main-container .center-panel .title-row .title-text {\\n          color: #fff;\\n          font-size: 22px;\\n          margin: 0 0 10px 0;\\n        }\\n.main-container .center-panel .desc-row {\\n        height: 30px;\\n        width: 100%;\\n        display: flex;\\n        justify-content: flex-end;\\n      }\\n.main-container .center-panel .desc-row .date {\\n          color: #ffffff80;\\n          font-size: 20px;\\n        }\\n.main-container .center-panel .center-row {\\n        display: flex;\\n        height: calc(100% - 40px);\\n        width: 100%;\\n      }\\n.main-container .center-panel .center-row .left-side {\\n          height: 100%;\\n          width: 75%;\\n        }\\n.main-container .center-panel .center-row .left-side .area-title {\\n            display: flex;\\n            flex-direction: row;\\n            color: #fff;\\n            font-size: 16px;\\n            font-weight: 400;\\n            height: 20px;\\n            margin-bottom: 20px;\\n          }\\n.main-container .center-panel .center-row .left-side .area-title .nav-btn {\\n              all: unset;\\n              width: 60px;\\n              height: 30px;\\n              background-color: transparent;\\n              font-size: 20px;\\n              margin-right: 5px;\\n              cursor: pointer;\\n              transition: 0.3s;\\n              display: flex;\\n              justify-content: center;\\n              align-items: center;\\n            }\\n.main-container .center-panel .center-row .left-side .area-title .nav-btn:hover {\\n                background-color: #3ea5ea;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap {\\n            display: flex;\\n            height: calc(100% - 40px);\\n            flex-wrap: wrap;\\n          }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart {\\n              width: calc(50% - 10px);\\n              box-sizing: border-box;\\n              padding: 10px;\\n              height: 100%;\\n              border: 1px solid #3075a3;\\n              border-radius: 40px;\\n              background-color: rgb(25, 36, 56);\\n              display: flex;\\n              justify-content: center;\\n              flex-direction: column;\\n              align-items: center;\\n            }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .text {\\n                color: #fff;\\n                font-size: 20px;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .piechart-wrap {\\n                width: 100%;\\n                height: 100%;\\n                display: flex;\\n                justify-content: center;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom {\\n                display: flex;\\n                flex-wrap: wrap;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom .each-info {\\n                  display: flex;\\n                  flex-direction: column;\\n                  align-items: center;\\n                  width: 50%;\\n                }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom .each-info .info-title {\\n                    font-size: 16px;\\n                    color: #fff;\\n                  }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .chart-bottom .each-info .info-value {\\n                    font-size: 16px;\\n                    color: #3ea5ea;\\n                  }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart .piechart-title {\\n                color: #fff;\\n                font-size: 18px;\\n                margin: 4cqh 0 20px 0;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart:nth-child(odd) {\\n                margin: 0 5px 0 0;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart:nth-child(1) {\\n                margin-bottom: 5px;\\n              }\\n.main-container .center-panel .center-row .left-side .chart-wrap .each-chart:nth-child(2) {\\n                margin-bottom: 5px;\\n              }\\n.main-container .center-panel .center-row .right-side {\\n          display: flex;\\n          flex-direction: column;\\n          height: calc(100% - 10px);\\n          width: 25%;\\n        }\\n.main-container .center-panel .center-row .right-side .top-panel {\\n            width: 100%;\\n            height: 100%;\\n            border: 1px solid #3075a3;\\n            border-radius: 40px;\\n            background-color: rgb(25, 36, 56);\\n            display: flex;\\n            flex-direction: column;\\n            align-items: center;\\n            box-sizing: border-box;\\n            padding: 10px;\\n          }\\n.main-container .center-panel .center-row .right-side .top-panel .right-title {\\n              margin-top: 20px;\\n              margin-bottom: 20px;\\n              color: #fff;\\n              justify-content: center;\\n              font-size: 20px;\\n            }\\n.main-container .center-panel .center-row .right-side .top-panel .each-info {\\n              display: flex;\\n              margin: 0 0 20px 30px;\\n            }\\n.main-container .center-panel .center-row .right-side .top-panel .each-info .info-title {\\n                color: #fff;\\n                width: 120px;\\n              }\\n.main-container .center-panel .center-row .right-side .top-panel .each-info .info-value {\\n                color: #3ea5ea;\\n                width: 100px;\\n              }\\n.main-container .center-panel .center-row .right-side .tip {\\n            width: 100%;\\n            display: flex;\\n            justify-content: center;\\n            color: #fff;\\n            font-size: 16px;\\n            margin: 10px 0 0 0;\\n          }\\n.main-container .center-panel .center-row .right-side .bottom-panel {\\n            width: 100%;\\n            height: 60%;\\n            border: 1px solid #3075a3;\\n            border-radius: 40px;\\n            background-color: rgb(25, 36, 56);\\n          }\\n</style>\\n"],"names":[],"mappings":"AAqHE,6CAAgB,CACd,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CACF,8BAAe,CAAC,4BAAc,CACxB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,UACd,CACJ,8BAAe,CAAC,aAAa,CAAC,yBAAW,CACjC,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACN,8BAAe,CAAC,aAAa,CAAC,UAAU,CAAC,0BAAY,CAC3C,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACnB,CACR,8BAAe,CAAC,aAAa,CAAC,wBAAU,CAChC,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QACnB,CACN,8BAAe,CAAC,aAAa,CAAC,SAAS,CAAC,oBAAM,CACpC,KAAK,CAAE,SAAS,CAChB,SAAS,CAAE,IACb,CACR,8BAAe,CAAC,aAAa,CAAC,0BAAY,CAClC,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,KAAK,CAAE,IACT,CACN,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,yBAAW,CAC3C,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GACT,CACR,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,0BAAY,CACrD,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IACjB,CACV,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,uBAAS,CAC5D,GAAG,CAAE,KAAK,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,WAAW,CAC7B,SAAS,CAAE,IAAI,CACf,YAAY,CAAE,GAAG,CACjB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CACZ,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,uBAAQ,MAAO,CAChE,gBAAgB,CAAE,OACpB,CACd,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,0BAAY,CACrD,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,SAAS,CAAE,IACb,CACV,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,0BAAY,CAC/D,KAAK,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CACvB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CAKZ,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,WAAW,CAAC,6BAAe,CAC5E,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACd,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,WAAW,CAAC,4BAAc,CAC3E,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IACb,CAed,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,WAAW,CAAC,8BAAgB,CAC7E,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACtB,CACd,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,0BAAW,WAAW,GAAG,CAAE,CAC5E,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAClB,CACd,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,0BAAW,WAAW,CAAC,CAAE,CAC1E,aAAa,CAAE,GACjB,CACd,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,CAAC,0BAAW,WAAW,CAAC,CAAE,CAC1E,aAAa,CAAE,GACjB,CACd,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,0BAAY,CAC5C,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,KAAK,CAAE,GACT,CACR,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,WAAW,CAAC,yBAAW,CACrD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,IAAI,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CACjC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IACX,CAoBV,8BAAe,CAAC,aAAa,CAAC,WAAW,CAAC,WAAW,CAAC,mBAAK,CAC/C,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB"}'
};
const MainPort = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  console.log(timeLabels, timeLabels.length);
  let originalDate = rawData.RESULT[0].USE_DATE;
  let formattedDate = dayjs(originalDate, "YYYYMMDD").format("YYYY/MM/DD");
  const totelPower = {
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "高雄港",
        ratio: 28,
        dsum: 585.8
      },
      {
        zone: "布袋港",
        ratio: 23,
        dsum: 485.8
      },
      {
        zone: "馬公港",
        ratio: 25,
        dsum: 515.8
      },
      {
        zone: "安平港",
        ratio: 24,
        dsum: 490.8
      }
    ]
  };
  const totalLabelsPower = totelPower.POWER_DSUM_ZONE_RATIO.map((item) => item.zone);
  const totalRatiosPower = totelPower.POWER_DSUM_ZONE_RATIO.map((item) => item.ratio);
  const totelWater = {
    Water_DSUM_ZONE_RATIO: [
      {
        zone: "高雄港",
        ratio: 34,
        dsum: 2408
      },
      {
        zone: "布袋港",
        ratio: 20,
        dsum: 1408
      },
      {
        zone: "馬公港",
        ratio: 25,
        dsum: 1708
      },
      {
        zone: "安平港",
        ratio: 21,
        dsum: 1458
      }
    ]
  };
  const totalLabelsWater = totelWater.Water_DSUM_ZONE_RATIO.map((item) => item.zone);
  const totalRatiosWater = totelWater.Water_DSUM_ZONE_RATIO.map((item) => item.ratio);
  $$result.css.add(css);
  return `<div class="main-container svelte-1avcnve"><div class="center-panel svelte-1avcnve"><div class="title-row svelte-1avcnve" data-svelte-h="svelte-12qr6u0"><div class="title-text svelte-1avcnve">總港能源管理資訊平台</div></div> <div class="desc-row svelte-1avcnve"><div class="date svelte-1avcnve">${escape(formattedDate)}</div></div> <div class="center-row svelte-1avcnve"><div class="left-side svelte-1avcnve"><div class="area-title svelte-1avcnve"><button class="nav-btn svelte-1avcnve" data-svelte-h="svelte-aq62tf">高雄</button> <button class="nav-btn svelte-1avcnve" data-svelte-h="svelte-sqobcl">布袋</button> <button class="nav-btn svelte-1avcnve" data-svelte-h="svelte-12egp9k">馬公</button> <button class="nav-btn svelte-1avcnve" data-svelte-h="svelte-pp0n1q">安平</button></div> <div class="chart-wrap svelte-1avcnve"><div class="each-chart svelte-1avcnve"><div class="piechart-title svelte-1avcnve" data-svelte-h="svelte-6iluw2">各港區智慧電表當日用電比例</div> <div class="piechart-wrap svelte-1avcnve">${validate_component(PieChart, "PieChart").$$render(
    $$result,
    {
      labels: totalLabelsPower,
      ratios: totalRatiosPower
    },
    {},
    {}
  )}</div> <div class="chart-bottom svelte-1avcnve"></div></div> <div class="each-chart svelte-1avcnve"><div class="piechart-title svelte-1avcnve" data-svelte-h="svelte-w1xmtw">各港區智慧水表當日用水比例</div> <div class="piechart-wrap svelte-1avcnve">${validate_component(PieChart, "PieChart").$$render(
    $$result,
    {
      labels: totalLabelsWater,
      ratios: totalRatiosWater
    },
    {},
    {}
  )}</div> <div class="chart-bottom svelte-1avcnve"></div></div></div></div> <div class="right-side svelte-1avcnve" data-svelte-h="svelte-17dphq8"><div class="top-panel svelte-1avcnve"></div> <div class="tip svelte-1avcnve">備註：每15分鐘更新一次</div></div></div></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MainPort, "MainPort").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BoPtuRhJ.js.map
