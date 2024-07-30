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
  // rawData.RESULT[0]
  // console.log("rawData.RESULT[0]::: ", rawData.RESULT[0]);
  let originalDate = rawData.RESULT[0].USE_DATE;
  let formattedDate = dayjs(originalDate, "YYYYMMDD").format(
    "YYYY/MM/DD 23:59"
  );
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

  function toKEE() {
    goto("/KEE");
  }
  function toTPE() {
    goto("/TPE");
  }
  function toSUA() {
    goto("/SUA");
  }
  function toTXG() {
    goto("/TXG");
  }
  function toKHH() {
    goto("/KHH");
  }
  function toANP() {
    goto("/ANP");
  }
  function toHUN() {
    goto("/HUN");
  }
  function toPEN() {
    goto("/PEN");
  }
  function toBUD() {
    goto("/BUD");
  }

</script>

<div class="main-container">
  <div class="center-panel">
    <div class="title-row">
      <div class="title-text">臺灣商港能源管理資訊平台</div>
    </div>
    <div class="desc-row">
      <div class="date">{formattedDate}</div>
    </div>
    <div class="center-row">
      <div class="left-side">
        <div class="area-title">
          <button class="nav-btn" on:click={toKEE}>基隆</button>
          <button class="nav-btn" on:click={toTPE}>臺北</button>
          <button class="nav-btn" on:click={toSUA}>蘇澳</button>
          <button class="nav-btn" on:click={toTXG}>臺中</button>
          <button class="nav-btn" on:click={toKHH}>高雄</button>
          <button class="nav-btn" on:click={toANP}>安平</button>
          <button class="nav-btn" on:click={toHUN}>花蓮</button>
          <button class="nav-btn" on:click={toPEN}>澎湖</button>
          <button class="nav-btn" on:click={toBUD}>布袋</button>
        </div>
        <div class="chart-wrap">
          <div class="each-chart">
            <div class="piechart-desc">
              <div class="text">當日累計用電量</div>
              <div class="value">1022 度</div>
            </div>
            <div class="piechart-title">各港區智慧電表當日用電比例</div>
            <div class="piechart-wrap">
              <PieChart
                labels={totalLabelsPower}
                ratios={totalRatiosPower}
                pieScale={90}
              />
            </div>
            <div class="chart-bottom"></div>
          </div>
          <div class="each-chart">
            <div class="piechart-desc">
              <div class="text">當日累計用水量</div>
              <div class="value">8025 度</div>
            </div>
            <div class="piechart-title">各港區智慧水表當日用水比例</div>
            <div class="piechart-wrap">
              <PieChart
                labels={totalLabelsWater}
                ratios={totalRatiosWater}
                pieScale={90}
              />
            </div>

            <div class="chart-bottom"></div>
          </div>
        </div>
        <div class="info-wrap">
          <div class="each-info-cube">
            <div class="each-data">
              <div class="data-name">當用累計用電量</div>
              <div class="data-value">36788 度</div>
            </div>
            <div class="each-data">
              <div class="data-name">當用累計碳排量</div>
              <div class="data-value">308 噸</div>
            </div>
            <div class="each-data">
              <div class="data-name">當年累計用電量</div>
              <div class="data-value">429871 度</div>
            </div>
            <div class="each-data">
              <div class="data-name">當用累計碳排量</div>
              <div class="data-value">2711 噸</div>
            </div>
          </div>
          <div class="each-info-cube">
            <div class="each-data">
              <div class="data-name">當用累計用水量</div>
              <div class="data-value">267231 度</div>
            </div>
            <div class="each-data">
              <div class="data-name">當用累計碳排量</div>
              <div class="data-value">108 噸</div>
            </div>
            <div class="each-data">
              <div class="data-name">當年累計用水量</div>
              <div class="data-value">2027712 度</div>
            </div>
            <div class="each-data">
              <div class="data-name">當用累計碳排量</div>
              <div class="data-value">1364 噸</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="top-panel-title">能源資訊</div>
        <div class="top-panel">
          <div class="data-row">
            <div class="left">太陽光電</div>
            <div class="right">
              <div class="inner-top">
                <div class="name">當月累計發電量</div>
                <div class="value">231 度</div>
              </div>
              <div class="inner-bottom">
                <div class="name">年累計使用量</div>
                <div class="value">1241 度</div>
              </div>
            </div>
          </div>
          <div class="data-row">
            <div class="left">儲能電池</div>
            <div class="right">
              <div class="inner-top">
                <div class="name">當月累計發電量</div>
                <div class="value">400 度</div>
              </div>
              <div class="inner-bottom">
                <div class="name">年累計使用量</div>
                <div class="value">5112 度</div>
              </div>
            </div>
          </div>
          <div class="data-row">
            <div class="left">再生水及儲水站</div>
            <div class="right">
              <div class="inner-top">
                <div class="name">當月累計發電量</div>
                <div class="value">120 度</div>
              </div>
              <div class="inner-bottom">
                <div class="name">年累計使用量</div>
                <div class="value">1562 度</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-panel-title">減碳資訊</div>
        <div class="bottom-panel">
          <div class="data-row">
            <div class="left">太陽能上月發電量 267 度</div>
            <div class="right">
              <div class="inner-top">
                <div class="name">上月減碳量</div>
                <div class="value">40 噸</div>
              </div>
              <div class="inner-bottom">
                <div class="name">年累計減碳量</div>
                <div class="value">512 噸</div>
              </div>
            </div>
          </div>
          <div class="data-row">
            <div class="left">再生水上月用水量 290 度</div>
            <div class="right">
              <div class="inner-top">
                <div class="name">上月減碳量</div>
                <div class="value">21 噸</div>
              </div>
              <div class="inner-bottom">
                <div class="name">年累計減碳量</div>
                <div class="value">261 噸</div>
              </div>
            </div>
          </div>
        </div>
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
    font-family: Noto Sans;
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
            height: calc(100% - 290px);
            flex-wrap: wrap;
            margin: 0 0 10px 0;
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
                height: 60%;
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
              .piechart-desc {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 0 30px 0;
                .text {
                  color: #fff;
                  font-size: 20px;
                  margin: 0 0 10px 0;
                }
                .value {
                  color: #3ea5ea;
                  font-size: 18px;
                }
              }
              .piechart-title {
                color: #fff;
                font-size: 16px;
                margin: 0 0 20px 0;
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
          .info-wrap {
            display: flex;
            height: 240px;
            flex-wrap: wrap;
            .each-info-cube {
              width: calc(50% - 10px);
              box-sizing: border-box;
              padding: 10px;
              height: 100%;
              border: 1px solid #3075a3;
              border-radius: 40px;
              background-color: rgb(25, 36, 56);
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              margin: 0 5px 0 0;
              .each-data {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .data-name {
                  color: #fff;
                  font-size: 16px;
                  margin: 0 0 10px 0;
                }
                .data-value {
                  color: #3ea5ea;
                  font-size: 16px;
                }
              }
            }
          }
        }
        .right-side {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: calc(100% - 10px);
          width: 25%;
          .top-panel-title {
            color: #fff;
            font-size: 20px;
            margin: 10px 0 5px 0;
          }
          .top-panel {
            width: 100%;
            height: 100%;
            border: 1px solid #3075a3;
            border-radius: 40px;
            background-color: rgb(25, 36, 56);
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            justify-content: space-evenly;
            .data-row {
              display: flex;
              justify-content: space-evenly;
              .left {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: #fff;
                width: 40%;
                text-align: center;
              }
              .right {
                display: flex;
                flex-direction: column;
                right: 60%;
                .inner-top {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  .name {
                    font-size: 12px;
                    color: #fff;
                  }
                  .value {
                    font-size: 12px;
                    color: #3ea5ea;
                  }
                }
                .inner-bottom {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin: 10px 0 0 0;
                  .name {
                    font-size: 12px;
                    color: #fff;
                  }
                  .value {
                    font-size: 12px;
                    color: #3ea5ea;
                  }
                }
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
          .bottom-panel-title {
            color: #fff;
            font-size: 20px;
            margin: 10px 0 5px 0;
          }
          .bottom-panel {
            width: 100%;
            height: 60%;
            border: 1px solid #3075a3;
            border-radius: 40px;
            background-color: rgb(25, 36, 56);
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .data-row {
              display: flex;
              justify-content: space-evenly;
              .left {
                display: flex;
                align-items: center;
                font-size: 14px;
                color: #fff;
                width: 50%;
                text-align: center;
              }
              .right {
                display: flex;
                flex-direction: column;
                .inner-top {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  .name {
                    font-size: 12px;
                    color: #fff;
                  }
                  .value {
                    font-size: 12px;
                    color: #3ea5ea;
                  }
                }
                .inner-bottom {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin: 10px 0 0 0;
                  .name {
                    font-size: 12px;
                    color: #fff;
                  }
                  .value {
                    font-size: 12px;
                    color: #3ea5ea;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
