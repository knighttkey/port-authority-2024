<script lang="ts">
  import BarChart from "./BarChart.svelte";
  import rawData from "./energy_water_data_sorted.json";
  import PieChart from "./PieChart.svelte";
  import { goto } from "$app/navigation";
  import dayjs from "dayjs";
  export let portName = "";
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
  let originalDate = rawData.RESULT[0].USE_DATE;
  let formattedDate = dayjs(originalDate, "YYYYMMDD").format(
    "YYYY/MM/DD 23:59"
  );
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
      WATER_DSUM: item.WATER_DSUM,
    };
  });
  console.log("dataRes::: ", dataRes);
  let dataResPort = dataRes.filter((item) => {
    return item.port === "KHH";
  });
  let barDataPower = dataResPort.map((item) => {
    return item.power_hsum;
  });
  let barDataWater = dataResPort.map((item) => {
    return item.water_hsum;
  });

  const pieDataPower = {
    POWER_DSUM_ZONE_RATIO: dataResPort[22].power_dsum_zone_ratio,
  };
  const labelsPower = pieDataPower.POWER_DSUM_ZONE_RATIO.map(
    (item) => item.zone
  );
  const ratiosPower = pieDataPower.POWER_DSUM_ZONE_RATIO.map(
    (item) => item.ratio
  );
  const pieDataWater = {
    Water_DSUM_ZONE_RATIO: dataResPort[22].power_dsum_zone_ratio,
  };
  const labelsWater = pieDataWater.Water_DSUM_ZONE_RATIO.map(
    (item) => item.zone
  );
  const ratiosWater = pieDataWater.Water_DSUM_ZONE_RATIO.map(
    (item) => item.ratio
  );

  function getChineseName(areaCode: string): string {
    switch (areaCode) {
      case "KEE":
        return "基隆";
      case "TPE":
        return "臺北";
      case "SUA":
        return "蘇澳";
      case "TXG":
        return "臺中";
      case "KHH":
        return "高雄";
      case "ANP":
        return "安平";
      case "HUN":
        return "花蓮";
      case "PEN":
        return "澎湖";
      case "BUD":
        return "布袋";
      default:
        return "未知區域";
    }
  }

  // Example usage:
  console.log(getChineseName("TPE")); // should output '臺北'
  console.log(getChineseName("KEE")); // should output '基隆'

  function getPortName(portName: string) {
    switch (portName) {
      case "KHH":
        return "高雄港";
      case "PUT":
        return "布袋港";
      case "APG":
        return "安平港";
      case "MZG":
        return "馬公港";

      default:
        "其他";
    }
  }
  function toMainPort() {
    goto("/MAIN");
  }
</script>

{#if portName}
  <div class="other-container">
    <div class="center-panel">
      <div class="title-row">
        <div class="title-text">
          {getChineseName(portName)}能源管理資訊平台
        </div>
      </div>
      <div class="desc-row">
        <button class="nav-btn" on:click={toMainPort}
          ><div class="home-icon"></div>
          回首頁</button
        >
        <div class="date">{formattedDate}</div>
      </div>
      <div class="center-row">
        <div class="left-side">
          <div class="chart-wrap">
            <div class="each-chart">
              <div class="text">智慧電表電力資訊</div>
              <div class="today">
                <div class="today-dsum-title">當日累計用電量</div>
                <div class="today-dsum-value">
                  {dataResPort[22].POWER_DSUM} 度
                </div>
              </div>
              <BarChart
                dataRes={barDataPower}
                {timeLabels}
                titleText="本日發電量 (逐時統計)"
              />
              <div class="chart-bottom">
                <div class="each-info">
                  <div class="info-title">當月累計用電量</div>
                  <div class="info-value">
                    {Math.round(dataResPort[22].POWER_MSUM)} 度
                  </div>
                </div>
                <div class="each-info">
                  <div class="info-title">當月累計碳排量</div>
                  <div class="info-value">
                    {Math.round(dataResPort[22].POWER_MSUM_CO2)} 噸
                  </div>
                </div>
                <div class="each-info">
                  <div class="info-title">當年累計用電量</div>
                  <div class="info-value">
                    {Math.round(dataResPort[22].POWER_YSUM)} 噸
                  </div>
                </div>
                <div class="each-info">
                  <div class="info-title">當年累計碳排量</div>
                  <div class="info-value">
                    {Math.round(dataResPort[22].POWER_YSUM_CO2)} 噸
                  </div>
                </div>
              </div>
              <div class="piechart-title">重要場域當日用電比例</div>
              <PieChart
                labels={labelsPower}
                ratios={ratiosPower}
                pieScale={70}
              />
            </div>
            <div class="each-chart">
              <div class="text">智慧水表水情資訊</div>
              <div class="today">
                <div class="today-dsum-title">當日累計用水量</div>
                <div class="today-dsum-value">
                  {dataResPort[22].WATER_DSUM} 噸
                </div>
              </div>
              <BarChart
                dataRes={barDataWater}
                {timeLabels}
                titleText="本日用水量 (逐時統計)"
              />
              <div class="chart-bottom">
                <div class="each-info">
                  <div class="info-title">當月累計用水量</div>
                  <div class="info-value">
                    {Math.round(dataResPort[22].WATER_MSUM)} 噸
                  </div>
                </div>
                <div class="each-info">
                  <div class="info-title">當月累計碳排量</div>
                  <div class="info-value">
                    {Math.round(dataResPort[22].WATER_MSUM_CO2)} 噸
                  </div>
                </div>
                <div class="each-info">
                  <div class="info-title">當年累計用水量</div>
                  <div class="info-value">
                    {Math.round(dataResPort[22].WATER_MSUM)} 噸
                  </div>
                </div>
                <div class="each-info">
                  <div class="info-title">當年累計碳排量</div>
                  <div class="info-value">
                    {Math.round(dataResPort[22].WATER_YSUM_CO2)} 噸
                  </div>
                </div>
              </div>

              <div class="piechart-title">重要場域當日用水比例</div>
              <PieChart
                labels={labelsWater}
                ratios={ratiosWater}
                pieScale={70}
              />
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
{/if}

<style lang="postcss">
  .other-container {
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
        justify-content: space-between;
        margin: 0 0 10px 0;
        .nav-btn {
          all: unset;
          /* width: 60px; */
          height: 30px;
          background-color: transparent;
          font-size: 20px;
          margin-right: 5px;
          cursor: pointer;
          transition: 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          &:hover {
            color: #3ea5ea;
          }
          .home-icon {
            background-image: url("$lib/icon/home.svg");
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            width: 24px;
            height: 24px;
            margin: 0 8px 0 0;
          }
        }
        .date {
          color: #ffffff80;
          font-size: 20px;
        }
      }
      .center-row {
        display: flex;
        height: calc(100% - 50px);
        width: 100%;

        .left-side {
          height: 100%;
          width: 75%;
          .area-title {
            display: flex;
            flex-direction: column;
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            height: 20px;
          }
          .chart-wrap {
            display: flex;
            height: calc(100% - 0px);
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
              .today {
                display: flex;
                flex-direction: column;
                align-items: center;
                .today-dsum-title {
                  font-size: 16px;
                  color: #fff;
                }
                .today-dsum-value {
                  font-size: 22px;
                  color: #3ea5ea;
                }
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
                    font-size: 18px;
                    color: #3ea5ea;
                  }
                }
              }
              .piechart-title {
                color: #fff;
                font-size: 18px;
                margin: 30px 0 15px 0;
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
          align-items: center;
          height: calc(100% - 10px);
          width: 25%;
          .top-panel-title {
            color: #fff;
            font-size: 20px;
            margin: 0px 0 5px 0;
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
