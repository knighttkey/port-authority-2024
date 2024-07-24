<script lang="ts">
  import rawData from "./energy_water_data_sorted.json";
  import PieChart from "./PieChart.svelte";
  import { goto } from "$app/navigation";
  import dayjs from "dayjs";
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
    "23",
  ];
  console.log(timeLabels, timeLabels.length);
  // rawData.RESULT[0]
  // console.log("rawData.RESULT[0]::: ", rawData.RESULT[0]);
  let originalDate = rawData.RESULT[0].USE_DATE;
  let formattedDate = dayjs(originalDate, "YYYYMMDD").format("YYYY/MM/DD");
  const totelPower = {
    POWER_DSUM_ZONE_RATIO: [
      { zone: "高雄港", ratio: 28, dsum: 585.8 },
      { zone: "布袋港", ratio: 23, dsum: 485.8 },
      { zone: "馬公港", ratio: 25, dsum: 515.8 },
      { zone: "安平港", ratio: 24, dsum: 490.8 },
    ],
  }; //2078.2

  const totalLabelsPower = totelPower.POWER_DSUM_ZONE_RATIO.map(
    (item) => item.zone
  );
  const totalRatiosPower = totelPower.POWER_DSUM_ZONE_RATIO.map(
    (item) => item.ratio
  );
  const totelWater = {
    Water_DSUM_ZONE_RATIO: [
      { zone: "高雄港", ratio: 34, dsum: 2408 },
      { zone: "布袋港", ratio: 20, dsum: 1408 },
      { zone: "馬公港", ratio: 25, dsum: 1708 },
      { zone: "安平港", ratio: 21, dsum: 1458 },
    ],
  }; //6982

  const totalLabelsWater = totelWater.Water_DSUM_ZONE_RATIO.map(
    (item) => item.zone
  );
  const totalRatiosWater = totelWater.Water_DSUM_ZONE_RATIO.map(
    (item) => item.ratio
  );

  function toAPG() {
    goto("/APG");
  }
  function toKHH() {
    goto("/KHH");
  }
  function toMZG() {
    goto("/MZG");
  }
  function toPUT() {
    goto("/PUT");
  }
</script>

<div class="main-container">
  <div class="center-panel">
    <div class="title-row">
      <div class="title-text">總港能源管理資訊平台</div>
    </div>
    <div class="desc-row">
      <div class="date">{formattedDate}</div>
    </div>
    <div class="center-row">
      <div class="left-side">
        <div class="area-title">
          <button class="nav-btn" on:click={toKHH}>高雄</button>
          <button class="nav-btn" on:click={toPUT}>布袋</button>
          <button class="nav-btn" on:click={toMZG}>馬公</button>
          <button class="nav-btn" on:click={toAPG}>安平</button>
        </div>
        <div class="chart-wrap">
          <div class="each-chart">
            <div class="piechart-title">各港區智慧電表當日用電比例</div>
            <div class="piechart-wrap">
              <PieChart labels={totalLabelsPower} ratios={totalRatiosPower} />
            </div>
            <div class="chart-bottom"></div>
          </div>
          <div class="each-chart">
            <div class="piechart-title">各港區智慧水表當日用水比例</div>
            <div class="piechart-wrap">
              <PieChart labels={totalLabelsWater} ratios={totalRatiosWater} />
            </div>

            <div class="chart-bottom"></div>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="top-panel"></div>
        <div class="tip">備註：每15分鐘更新一次</div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .main-container {
    width: 1280px;
    height: 948px;
    display: flex;
    justify-content: center;
    align-items: center;
    .center-panel {
      width: 85%;
      height: auto;
      aspect-ratio: 4 / 3;
      background-color: #213e61;
      border-radius: 70px;
      display: flex;
      flex-direction: column;
      padding: 40px 40px;
      box-sizing: border-box;
      .title-row {
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        .title-text {
          color: #fff;
          font-size: 22px;
          margin: 0 0 10px 0;
        }
      }
      .desc-row {
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .date {
          color: #ffffff80;
          font-size: 20px;
        }
      }
      .center-row {
        display: flex;
        height: calc(100% - 40px);
        width: 100%;
        .left-side {
          height: 100%;
          width: 75%;
          .area-title {
            display: flex;
            flex-direction: row;
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            height: 20px;
            margin-bottom: 20px;
            .nav-btn {
              all: unset;
              width: 60px;
              height: 30px;
              background-color: transparent;
              font-size: 20px;
              margin-right: 5px;
              cursor: pointer;
              transition: 0.3s;
              display: flex;
              justify-content: center;
              align-items: center;
              &:hover {
                background-color: #3ea5ea;
              }
            }
          }
          .chart-wrap {
            display: flex;
            height: calc(100% - 40px);
            flex-wrap: wrap;
            .each-chart {
              width: calc(50% - 10px);
              box-sizing: border-box;
              padding: 10px;
              height: 100%;
              border: 1px solid #3075a3;
              border-radius: 40px;
              background-color: rgb(25, 36, 56);
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              .text {
                color: #fff;
                font-size: 20px;
              }
              .piechart-wrap {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
              }
              .chart-bottom {
                display: flex;
                flex-wrap: wrap;

                .each-info {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 50%;
                  .info-title {
                    font-size: 16px;
                    color: #fff;
                  }
                  .info-value {
                    font-size: 16px;
                    color: #3ea5ea;
                  }
                }
              }
              .piechart-title {
                color: #fff;
                font-size: 18px;
                margin: 4cqh 0 20px 0;
              }
              &:nth-child(odd) {
                margin: 0 5px 0 0;
              }
              &:nth-child(1) {
                margin-bottom: 5px;
              }
              &:nth-child(2) {
                margin-bottom: 5px;
              }
            }
          }
        }
        .right-side {
          display: flex;
          flex-direction: column;
          height: calc(100% - 10px);
          width: 25%;
          .top-panel {
            width: 100%;
            height: 100%;
            border: 1px solid #3075a3;
            border-radius: 40px;
            background-color: rgb(25, 36, 56);
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            padding: 10px;
            .right-title {
              margin-top: 20px;
              margin-bottom: 20px;
              color: #fff;
              justify-content: center;
              font-size: 20px;
            }
            .each-info {
              display: flex;
              margin: 0 0 20px 30px;
              .info-title {
                color: #fff;
                width: 120px;
              }
              .info-value {
                color: #3ea5ea;
                width: 100px;
              }
            }
          }
          .tip {
            width: 100%;
            display: flex;
            justify-content: center;
            color: #fff;
            font-size: 16px;
            margin: 10px 0 0 0;
          }
          .bottom-panel {
            width: 100%;
            height: 60%;
            border: 1px solid #3075a3;
            border-radius: 40px;
            background-color: rgb(25, 36, 56);
          }
        }
      }
    }
  }
</style>
