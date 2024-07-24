import { c as create_ssr_component, v as validate_component, o as onDestroy, f as spread, h as escape_object, d as add_attribute } from './ssr-maH9RnpE.js';
import { Chart as Chart$1, ArcElement, Tooltip, Legend, PieController } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach((key) => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ""));
  }
});
function useForwardEvents(getRef) {
  const destructors = [];
  onDestroy(() => {
    while (destructors.length) {
      destructors.pop()();
    }
  });
}
function clean(props2) {
  let { data: data2, type: type2, options: options2, plugins: plugins2, children, $$scope, $$slots, ...rest } = props2;
  return rest;
}
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { data = { datasets: [] } } = $$props;
  let { options = {} } = $$props;
  let { plugins = [] } = $$props;
  let { updateMode = void 0 } = $$props;
  let { chart = null } = $$props;
  let canvasRef;
  let props = clean($$props);
  onDestroy(() => {
    if (chart) chart.destroy();
    chart = null;
  });
  useForwardEvents();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0) $$bindings.plugins(plugins);
  if ($$props.updateMode === void 0 && $$bindings.updateMode && updateMode !== void 0) $$bindings.updateMode(updateMode);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0) $$bindings.chart(chart);
  return `<canvas${spread([escape_object(props)], {})}${add_attribute("this", canvasRef, 0)}></canvas>`;
});
const Pie = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(PieController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0) $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    props = $$props;
    $$rendered = `${validate_component(Chart, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "pie" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const IS_SUCCESS = true;
const MESSAGE = "查詢成功";
const COMP_ID = "KHH";
const RESULT = [
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 1,
    POWER_YSUM: 2145.8,
    POWER_MSUM: 345.8,
    POWER_DSUM: 145.8,
    POWER_HSUM: 20.000000000000014,
    POWER_YSUM_CO2: 2144.3,
    POWER_MSUM_CO2: 344.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 29.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 29.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 21.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 21.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 14.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 14.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 14.58
      }
    ],
    WATER_YSUM: 21308,
    WATER_MSUM: 3308,
    WATER_DSUM: 1308,
    WATER_HSUM: 50,
    WATER_YSUM_CO2: 21303.6,
    WATER_MSUM_CO2: 3303.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 261.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 261.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 196.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 196.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 130.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 130.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 130.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 2,
    POWER_YSUM: 2165.8,
    POWER_MSUM: 365.8,
    POWER_DSUM: 165.8,
    POWER_HSUM: 40.000000000000014,
    POWER_YSUM_CO2: 2162.8,
    POWER_MSUM_CO2: 362.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 33.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 33.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 24.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 24.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 16.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 16.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 16.58
      }
    ],
    WATER_YSUM: 21358,
    WATER_MSUM: 3358,
    WATER_DSUM: 1358,
    WATER_HSUM: 100,
    WATER_YSUM_CO2: 21349.2,
    WATER_MSUM_CO2: 3349.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 271.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 271.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 203.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 203.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 135.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 135.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 135.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 3,
    POWER_YSUM: 2185.8,
    POWER_MSUM: 385.8,
    POWER_DSUM: 185.8,
    POWER_HSUM: 60.000000000000014,
    POWER_YSUM_CO2: 2181.3,
    POWER_MSUM_CO2: 381.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 37.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 37.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 27.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 27.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 18.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 18.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 18.58
      }
    ],
    WATER_YSUM: 21408,
    WATER_MSUM: 3408,
    WATER_DSUM: 1408,
    WATER_HSUM: 150,
    WATER_YSUM_CO2: 21394.8,
    WATER_MSUM_CO2: 3394.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 281.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 281.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 211.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 211.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 140.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 140.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 140.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 4,
    POWER_YSUM: 2205.8,
    POWER_MSUM: 405.8,
    POWER_DSUM: 205.8,
    POWER_HSUM: 80.00000000000001,
    POWER_YSUM_CO2: 2199.8,
    POWER_MSUM_CO2: 399.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 41.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 41.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 30.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 30.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 20.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 20.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 20.58
      }
    ],
    WATER_YSUM: 21458,
    WATER_MSUM: 3458,
    WATER_DSUM: 1458,
    WATER_HSUM: 200,
    WATER_YSUM_CO2: 21440.4,
    WATER_MSUM_CO2: 3440.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 291.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 291.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 218.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 218.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 145.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 145.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 145.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 5,
    POWER_YSUM: 2225.8,
    POWER_MSUM: 425.8,
    POWER_DSUM: 225.8,
    POWER_HSUM: 100.00000000000001,
    POWER_YSUM_CO2: 2218.3,
    POWER_MSUM_CO2: 418.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 45.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 45.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 33.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 33.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 22.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 22.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 22.58
      }
    ],
    WATER_YSUM: 21508,
    WATER_MSUM: 3508,
    WATER_DSUM: 1508,
    WATER_HSUM: 250,
    WATER_YSUM_CO2: 21486,
    WATER_MSUM_CO2: 3486,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 301.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 301.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 226.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 226.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 150.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 150.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 150.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 6,
    POWER_YSUM: 2245.8,
    POWER_MSUM: 445.8,
    POWER_DSUM: 245.8,
    POWER_HSUM: 120.00000000000001,
    POWER_YSUM_CO2: 2236.8,
    POWER_MSUM_CO2: 436.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 49.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 49.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 36.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 36.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 24.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 24.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 24.58
      }
    ],
    WATER_YSUM: 21558,
    WATER_MSUM: 3558,
    WATER_DSUM: 1558,
    WATER_HSUM: 300,
    WATER_YSUM_CO2: 21531.6,
    WATER_MSUM_CO2: 3531.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 311.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 311.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 233.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 233.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 155.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 155.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 155.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 7,
    POWER_YSUM: 2265.8,
    POWER_MSUM: 465.8,
    POWER_DSUM: 265.8,
    POWER_HSUM: 140,
    POWER_YSUM_CO2: 2255.3,
    POWER_MSUM_CO2: 455.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 53.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 53.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 39.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 39.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 26.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 26.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 26.58
      }
    ],
    WATER_YSUM: 21608,
    WATER_MSUM: 3608,
    WATER_DSUM: 1608,
    WATER_HSUM: 350,
    WATER_YSUM_CO2: 21577.2,
    WATER_MSUM_CO2: 3577.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 321.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 321.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 241.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 241.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 160.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 160.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 160.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 8,
    POWER_YSUM: 2285.8,
    POWER_MSUM: 485.8,
    POWER_DSUM: 285.8,
    POWER_HSUM: 160,
    POWER_YSUM_CO2: 2273.8,
    POWER_MSUM_CO2: 473.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 57.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 57.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 42.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 42.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 28.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 28.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 28.58
      }
    ],
    WATER_YSUM: 21658,
    WATER_MSUM: 3658,
    WATER_DSUM: 1658,
    WATER_HSUM: 400,
    WATER_YSUM_CO2: 21622.8,
    WATER_MSUM_CO2: 3622.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 331.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 331.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 248.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 248.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 165.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 165.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 165.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 9,
    POWER_YSUM: 2305.8,
    POWER_MSUM: 505.8,
    POWER_DSUM: 305.8,
    POWER_HSUM: 180,
    POWER_YSUM_CO2: 2292.3,
    POWER_MSUM_CO2: 492.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 61.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 61.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 45.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 45.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 30.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 30.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 30.58
      }
    ],
    WATER_YSUM: 21708,
    WATER_MSUM: 3708,
    WATER_DSUM: 1708,
    WATER_HSUM: 450,
    WATER_YSUM_CO2: 21668.4,
    WATER_MSUM_CO2: 3668.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 341.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 341.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 256.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 256.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 170.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 170.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 170.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 10,
    POWER_YSUM: 2325.8,
    POWER_MSUM: 525.8,
    POWER_DSUM: 325.8,
    POWER_HSUM: 200,
    POWER_YSUM_CO2: 2310.8,
    POWER_MSUM_CO2: 510.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 65.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 65.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 48.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 48.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 32.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 32.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 32.58
      }
    ],
    WATER_YSUM: 21758,
    WATER_MSUM: 3758,
    WATER_DSUM: 1758,
    WATER_HSUM: 500,
    WATER_YSUM_CO2: 21714,
    WATER_MSUM_CO2: 3714,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 351.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 351.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 263.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 263.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 175.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 175.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 175.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 11,
    POWER_YSUM: 2345.8,
    POWER_MSUM: 545.8,
    POWER_DSUM: 345.8,
    POWER_HSUM: 220,
    POWER_YSUM_CO2: 2329.3,
    POWER_MSUM_CO2: 529.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 69.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 69.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 51.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 51.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 34.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 34.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 34.58
      }
    ],
    WATER_YSUM: 21808,
    WATER_MSUM: 3808,
    WATER_DSUM: 1808,
    WATER_HSUM: 550,
    WATER_YSUM_CO2: 21759.6,
    WATER_MSUM_CO2: 3759.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 361.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 361.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 271.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 271.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 180.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 180.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 180.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 12,
    POWER_YSUM: 2365.8,
    POWER_MSUM: 565.8,
    POWER_DSUM: 365.8,
    POWER_HSUM: 240,
    POWER_YSUM_CO2: 2347.8,
    POWER_MSUM_CO2: 547.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 73.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 73.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 54.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 54.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 36.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 36.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 36.58
      }
    ],
    WATER_YSUM: 21858,
    WATER_MSUM: 3858,
    WATER_DSUM: 1858,
    WATER_HSUM: 600,
    WATER_YSUM_CO2: 21805.2,
    WATER_MSUM_CO2: 3805.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 371.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 371.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 278.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 278.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 185.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 185.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 185.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 13,
    POWER_YSUM: 2385.8,
    POWER_MSUM: 585.8,
    POWER_DSUM: 385.8,
    POWER_HSUM: 260,
    POWER_YSUM_CO2: 2366.3,
    POWER_MSUM_CO2: 566.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 77.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 77.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 57.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 57.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 38.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 38.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 38.58
      }
    ],
    WATER_YSUM: 21908,
    WATER_MSUM: 3908,
    WATER_DSUM: 1908,
    WATER_HSUM: 650,
    WATER_YSUM_CO2: 21850.8,
    WATER_MSUM_CO2: 3850.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 381.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 381.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 286.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 286.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 190.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 190.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 190.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 14,
    POWER_YSUM: 2405.8,
    POWER_MSUM: 605.8,
    POWER_DSUM: 405.8,
    POWER_HSUM: 280,
    POWER_YSUM_CO2: 2384.8,
    POWER_MSUM_CO2: 584.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 81.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 81.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 60.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 60.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 40.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 40.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 40.58
      }
    ],
    WATER_YSUM: 21958,
    WATER_MSUM: 3958,
    WATER_DSUM: 1958,
    WATER_HSUM: 700,
    WATER_YSUM_CO2: 21896.4,
    WATER_MSUM_CO2: 3896.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 391.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 391.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 293.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 293.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 195.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 195.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 195.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 15,
    POWER_YSUM: 2425.8,
    POWER_MSUM: 625.8,
    POWER_DSUM: 425.8,
    POWER_HSUM: 300,
    POWER_YSUM_CO2: 2403.3,
    POWER_MSUM_CO2: 603.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 85.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 85.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 63.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 63.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 42.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 42.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 42.58
      }
    ],
    WATER_YSUM: 22008,
    WATER_MSUM: 4008,
    WATER_DSUM: 2008,
    WATER_HSUM: 750,
    WATER_YSUM_CO2: 21942,
    WATER_MSUM_CO2: 3942,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 401.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 401.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 301.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 301.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 200.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 200.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 200.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 16,
    POWER_YSUM: 2445.8,
    POWER_MSUM: 645.8,
    POWER_DSUM: 445.8,
    POWER_HSUM: 320,
    POWER_YSUM_CO2: 2421.8,
    POWER_MSUM_CO2: 621.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 89.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 89.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 66.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 66.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 44.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 44.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 44.58
      }
    ],
    WATER_YSUM: 22058,
    WATER_MSUM: 4058,
    WATER_DSUM: 2058,
    WATER_HSUM: 800,
    WATER_YSUM_CO2: 21987.6,
    WATER_MSUM_CO2: 3987.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 411.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 411.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 308.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 308.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 205.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 205.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 205.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 17,
    POWER_YSUM: 2465.8,
    POWER_MSUM: 665.8,
    POWER_DSUM: 465.8,
    POWER_HSUM: 340,
    POWER_YSUM_CO2: 2440.3,
    POWER_MSUM_CO2: 640.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 93.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 93.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 69.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 69.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 46.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 46.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 46.58
      }
    ],
    WATER_YSUM: 22108,
    WATER_MSUM: 4108,
    WATER_DSUM: 2108,
    WATER_HSUM: 850,
    WATER_YSUM_CO2: 22033.2,
    WATER_MSUM_CO2: 4033.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 421.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 421.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 316.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 316.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 210.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 210.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 210.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 18,
    POWER_YSUM: 2485.8,
    POWER_MSUM: 685.8,
    POWER_DSUM: 485.8,
    POWER_HSUM: 360,
    POWER_YSUM_CO2: 2458.8,
    POWER_MSUM_CO2: 658.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 97.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 97.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 72.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 72.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 48.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 48.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 48.58
      }
    ],
    WATER_YSUM: 22158,
    WATER_MSUM: 4158,
    WATER_DSUM: 2158,
    WATER_HSUM: 900,
    WATER_YSUM_CO2: 22078.8,
    WATER_MSUM_CO2: 4078.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 431.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 431.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 323.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 323.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 215.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 215.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 215.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 19,
    POWER_YSUM: 2505.8,
    POWER_MSUM: 705.8,
    POWER_DSUM: 505.8,
    POWER_HSUM: 380,
    POWER_YSUM_CO2: 2477.3,
    POWER_MSUM_CO2: 677.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 101.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 101.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 75.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 75.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 50.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 50.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 50.58
      }
    ],
    WATER_YSUM: 22208,
    WATER_MSUM: 4208,
    WATER_DSUM: 2208,
    WATER_HSUM: 950,
    WATER_YSUM_CO2: 22124.4,
    WATER_MSUM_CO2: 4124.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 441.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 441.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 331.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 331.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 220.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 220.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 220.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 20,
    POWER_YSUM: 2525.8,
    POWER_MSUM: 725.8,
    POWER_DSUM: 525.8,
    POWER_HSUM: 399.99999999999994,
    POWER_YSUM_CO2: 2495.8,
    POWER_MSUM_CO2: 695.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 105.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 105.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 78.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 78.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 52.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 52.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 52.58
      }
    ],
    WATER_YSUM: 22258,
    WATER_MSUM: 4258,
    WATER_DSUM: 2258,
    WATER_HSUM: 1e3,
    WATER_YSUM_CO2: 22170,
    WATER_MSUM_CO2: 4170,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 451.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 451.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 338.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 338.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 225.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 225.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 225.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 21,
    POWER_YSUM: 2545.8,
    POWER_MSUM: 745.8,
    POWER_DSUM: 545.8,
    POWER_HSUM: 419.99999999999994,
    POWER_YSUM_CO2: 2514.3,
    POWER_MSUM_CO2: 714.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 109.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 109.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 81.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 81.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 54.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 54.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 54.58
      }
    ],
    WATER_YSUM: 22308,
    WATER_MSUM: 4308,
    WATER_DSUM: 2308,
    WATER_HSUM: 1050,
    WATER_YSUM_CO2: 22215.6,
    WATER_MSUM_CO2: 4215.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 461.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 461.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 346.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 346.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 230.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 230.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 230.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 22,
    POWER_YSUM: 2565.8,
    POWER_MSUM: 765.8,
    POWER_DSUM: 565.8,
    POWER_HSUM: 439.99999999999994,
    POWER_YSUM_CO2: 2532.8,
    POWER_MSUM_CO2: 732.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 113.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 113.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 84.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 84.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 56.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 56.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 56.58
      }
    ],
    WATER_YSUM: 22358,
    WATER_MSUM: 4358,
    WATER_DSUM: 2358,
    WATER_HSUM: 1100,
    WATER_YSUM_CO2: 22261.2,
    WATER_MSUM_CO2: 4261.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 471.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 471.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 353.7
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 353.7
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 235.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 235.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 235.8
      }
    ]
  },
  {
    PORT: "KHH",
    USE_DATE: "20240701",
    USE_HOUR: 23,
    POWER_YSUM: 2585.8,
    POWER_MSUM: 785.8,
    POWER_DSUM: 585.8,
    POWER_HSUM: 459.99999999999994,
    POWER_YSUM_CO2: 2551.3,
    POWER_MSUM_CO2: 751.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 117.16
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 117.16
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 87.87
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 87.87
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 58.58
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 58.58
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 58.58
      }
    ],
    WATER_YSUM: 22408,
    WATER_MSUM: 4408,
    WATER_DSUM: 2408,
    WATER_HSUM: 1150,
    WATER_YSUM_CO2: 22306.8,
    WATER_MSUM_CO2: 4306.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "四櫃",
        ratio: 20,
        dsum: 481.6
      },
      {
        zone: "五櫃",
        ratio: 20,
        dsum: 481.6
      },
      {
        zone: "七櫃",
        ratio: 15,
        dsum: 361.2
      },
      {
        zone: "旅運",
        ratio: 15,
        dsum: 361.2
      },
      {
        zone: "蓬萊",
        ratio: 10,
        dsum: 240.8
      },
      {
        zone: "中島",
        ratio: 10,
        dsum: 240.8
      },
      {
        zone: "前鎮",
        ratio: 10,
        dsum: 240.8
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 1,
    POWER_YSUM: 1445.8,
    POWER_MSUM: 275.8,
    POWER_DSUM: 75.8,
    POWER_HSUM: 20,
    POWER_YSUM_CO2: 1444.3,
    POWER_MSUM_CO2: 274.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 18.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 18.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 15.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 11.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 11.37
      }
    ],
    WATER_YSUM: 14308,
    WATER_MSUM: 2608,
    WATER_DSUM: 608,
    WATER_HSUM: 50,
    WATER_YSUM_CO2: 14303.6,
    WATER_MSUM_CO2: 2603.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 152
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 152
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 121.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 91.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 91.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 2,
    POWER_YSUM: 1465.8,
    POWER_MSUM: 295.8,
    POWER_DSUM: 95.8,
    POWER_HSUM: 40,
    POWER_YSUM_CO2: 1462.8,
    POWER_MSUM_CO2: 292.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 23.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 23.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 19.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 14.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 14.37
      }
    ],
    WATER_YSUM: 14358,
    WATER_MSUM: 2658,
    WATER_DSUM: 658,
    WATER_HSUM: 100,
    WATER_YSUM_CO2: 14349.2,
    WATER_MSUM_CO2: 2649.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 164.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 164.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 131.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 98.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 98.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 3,
    POWER_YSUM: 1485.8,
    POWER_MSUM: 315.8,
    POWER_DSUM: 115.8,
    POWER_HSUM: 60,
    POWER_YSUM_CO2: 1481.3,
    POWER_MSUM_CO2: 311.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 28.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 28.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 23.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 17.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 17.37
      }
    ],
    WATER_YSUM: 14408,
    WATER_MSUM: 2708,
    WATER_DSUM: 708,
    WATER_HSUM: 150,
    WATER_YSUM_CO2: 14394.8,
    WATER_MSUM_CO2: 2694.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 177
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 177
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 141.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 106.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 106.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 4,
    POWER_YSUM: 1505.8,
    POWER_MSUM: 335.8,
    POWER_DSUM: 135.8,
    POWER_HSUM: 80.00000000000001,
    POWER_YSUM_CO2: 1499.8,
    POWER_MSUM_CO2: 329.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 33.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 33.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 27.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 20.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 20.37
      }
    ],
    WATER_YSUM: 14458,
    WATER_MSUM: 2758,
    WATER_DSUM: 758,
    WATER_HSUM: 200,
    WATER_YSUM_CO2: 14440.4,
    WATER_MSUM_CO2: 2740.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 189.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 189.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 151.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 113.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 113.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 5,
    POWER_YSUM: 1525.8,
    POWER_MSUM: 355.8,
    POWER_DSUM: 155.8,
    POWER_HSUM: 100.00000000000001,
    POWER_YSUM_CO2: 1518.3,
    POWER_MSUM_CO2: 348.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 38.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 38.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 31.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 23.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 23.37
      }
    ],
    WATER_YSUM: 14508,
    WATER_MSUM: 2808,
    WATER_DSUM: 808,
    WATER_HSUM: 250,
    WATER_YSUM_CO2: 14486,
    WATER_MSUM_CO2: 2786,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 202
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 202
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 161.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 121.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 121.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 6,
    POWER_YSUM: 1545.8,
    POWER_MSUM: 375.8,
    POWER_DSUM: 175.8,
    POWER_HSUM: 120.00000000000001,
    POWER_YSUM_CO2: 1536.8,
    POWER_MSUM_CO2: 366.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 43.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 43.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 35.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 26.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 26.37
      }
    ],
    WATER_YSUM: 14558,
    WATER_MSUM: 2858,
    WATER_DSUM: 858,
    WATER_HSUM: 300,
    WATER_YSUM_CO2: 14531.6,
    WATER_MSUM_CO2: 2831.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 214.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 214.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 171.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 128.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 128.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 7,
    POWER_YSUM: 1565.8,
    POWER_MSUM: 395.8,
    POWER_DSUM: 195.8,
    POWER_HSUM: 140,
    POWER_YSUM_CO2: 1555.3,
    POWER_MSUM_CO2: 385.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 48.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 48.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 39.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 29.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 29.37
      }
    ],
    WATER_YSUM: 14608,
    WATER_MSUM: 2908,
    WATER_DSUM: 908,
    WATER_HSUM: 350,
    WATER_YSUM_CO2: 14577.2,
    WATER_MSUM_CO2: 2877.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 227
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 227
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 181.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 136.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 136.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 8,
    POWER_YSUM: 1585.8,
    POWER_MSUM: 415.8,
    POWER_DSUM: 215.8,
    POWER_HSUM: 160,
    POWER_YSUM_CO2: 1573.8,
    POWER_MSUM_CO2: 403.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 53.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 53.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 43.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 32.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 32.37
      }
    ],
    WATER_YSUM: 14658,
    WATER_MSUM: 2958,
    WATER_DSUM: 958,
    WATER_HSUM: 400,
    WATER_YSUM_CO2: 14622.8,
    WATER_MSUM_CO2: 2922.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 239.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 239.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 191.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 143.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 143.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 9,
    POWER_YSUM: 1605.8,
    POWER_MSUM: 435.8,
    POWER_DSUM: 235.8,
    POWER_HSUM: 180,
    POWER_YSUM_CO2: 1592.3,
    POWER_MSUM_CO2: 422.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 58.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 58.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 47.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 35.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 35.37
      }
    ],
    WATER_YSUM: 14708,
    WATER_MSUM: 3008,
    WATER_DSUM: 1008,
    WATER_HSUM: 450,
    WATER_YSUM_CO2: 14668.4,
    WATER_MSUM_CO2: 2968.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 252
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 252
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 201.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 151.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 151.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 10,
    POWER_YSUM: 1625.8,
    POWER_MSUM: 455.8,
    POWER_DSUM: 255.8,
    POWER_HSUM: 200,
    POWER_YSUM_CO2: 1610.8,
    POWER_MSUM_CO2: 440.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 63.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 63.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 51.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 38.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 38.37
      }
    ],
    WATER_YSUM: 14758,
    WATER_MSUM: 3058,
    WATER_DSUM: 1058,
    WATER_HSUM: 500,
    WATER_YSUM_CO2: 14714,
    WATER_MSUM_CO2: 3014,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 264.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 264.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 211.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 158.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 158.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 11,
    POWER_YSUM: 1645.8,
    POWER_MSUM: 475.8,
    POWER_DSUM: 275.8,
    POWER_HSUM: 220,
    POWER_YSUM_CO2: 1629.3,
    POWER_MSUM_CO2: 459.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 68.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 68.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 55.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 41.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 41.37
      }
    ],
    WATER_YSUM: 14808,
    WATER_MSUM: 3108,
    WATER_DSUM: 1108,
    WATER_HSUM: 550,
    WATER_YSUM_CO2: 14759.6,
    WATER_MSUM_CO2: 3059.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 277
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 277
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 221.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 166.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 166.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 12,
    POWER_YSUM: 1665.8,
    POWER_MSUM: 495.8,
    POWER_DSUM: 295.8,
    POWER_HSUM: 240,
    POWER_YSUM_CO2: 1647.8,
    POWER_MSUM_CO2: 477.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 73.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 73.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 59.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 44.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 44.37
      }
    ],
    WATER_YSUM: 14858,
    WATER_MSUM: 3158,
    WATER_DSUM: 1158,
    WATER_HSUM: 600,
    WATER_YSUM_CO2: 14805.2,
    WATER_MSUM_CO2: 3105.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 289.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 289.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 231.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 173.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 173.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 13,
    POWER_YSUM: 1685.8,
    POWER_MSUM: 515.8,
    POWER_DSUM: 315.8,
    POWER_HSUM: 260,
    POWER_YSUM_CO2: 1666.3,
    POWER_MSUM_CO2: 496.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 78.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 78.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 63.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 47.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 47.37
      }
    ],
    WATER_YSUM: 14908,
    WATER_MSUM: 3208,
    WATER_DSUM: 1208,
    WATER_HSUM: 650,
    WATER_YSUM_CO2: 14850.8,
    WATER_MSUM_CO2: 3150.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 302
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 302
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 241.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 181.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 181.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 14,
    POWER_YSUM: 1705.8,
    POWER_MSUM: 535.8,
    POWER_DSUM: 335.8,
    POWER_HSUM: 280,
    POWER_YSUM_CO2: 1684.8,
    POWER_MSUM_CO2: 514.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 83.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 83.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 67.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 50.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 50.37
      }
    ],
    WATER_YSUM: 14958,
    WATER_MSUM: 3258,
    WATER_DSUM: 1258,
    WATER_HSUM: 700,
    WATER_YSUM_CO2: 14896.4,
    WATER_MSUM_CO2: 3196.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 314.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 314.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 251.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 188.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 188.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 15,
    POWER_YSUM: 1725.8,
    POWER_MSUM: 555.8,
    POWER_DSUM: 355.8,
    POWER_HSUM: 300,
    POWER_YSUM_CO2: 1703.3,
    POWER_MSUM_CO2: 533.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 88.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 88.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 71.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 53.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 53.37
      }
    ],
    WATER_YSUM: 15008,
    WATER_MSUM: 3308,
    WATER_DSUM: 1308,
    WATER_HSUM: 750,
    WATER_YSUM_CO2: 14942,
    WATER_MSUM_CO2: 3242,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 327
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 327
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 261.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 196.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 196.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 16,
    POWER_YSUM: 1745.8,
    POWER_MSUM: 575.8,
    POWER_DSUM: 375.8,
    POWER_HSUM: 320,
    POWER_YSUM_CO2: 1721.8,
    POWER_MSUM_CO2: 551.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 93.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 93.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 75.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 56.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 56.37
      }
    ],
    WATER_YSUM: 15058,
    WATER_MSUM: 3358,
    WATER_DSUM: 1358,
    WATER_HSUM: 800,
    WATER_YSUM_CO2: 14987.6,
    WATER_MSUM_CO2: 3287.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 339.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 339.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 271.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 203.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 203.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 17,
    POWER_YSUM: 1765.8,
    POWER_MSUM: 595.8,
    POWER_DSUM: 395.8,
    POWER_HSUM: 340,
    POWER_YSUM_CO2: 1740.3,
    POWER_MSUM_CO2: 570.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 98.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 98.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 79.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 59.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 59.37
      }
    ],
    WATER_YSUM: 15108,
    WATER_MSUM: 3408,
    WATER_DSUM: 1408,
    WATER_HSUM: 850,
    WATER_YSUM_CO2: 15033.2,
    WATER_MSUM_CO2: 3333.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 352
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 352
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 281.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 211.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 211.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 18,
    POWER_YSUM: 1785.8,
    POWER_MSUM: 615.8,
    POWER_DSUM: 415.8,
    POWER_HSUM: 360,
    POWER_YSUM_CO2: 1758.8,
    POWER_MSUM_CO2: 588.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 103.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 103.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 83.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 62.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 62.37
      }
    ],
    WATER_YSUM: 15158,
    WATER_MSUM: 3458,
    WATER_DSUM: 1458,
    WATER_HSUM: 900,
    WATER_YSUM_CO2: 15078.8,
    WATER_MSUM_CO2: 3378.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 364.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 364.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 291.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 218.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 218.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 19,
    POWER_YSUM: 1805.8,
    POWER_MSUM: 635.8,
    POWER_DSUM: 435.8,
    POWER_HSUM: 380,
    POWER_YSUM_CO2: 1777.3,
    POWER_MSUM_CO2: 607.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 108.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 108.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 87.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 65.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 65.37
      }
    ],
    WATER_YSUM: 15208,
    WATER_MSUM: 3508,
    WATER_DSUM: 1508,
    WATER_HSUM: 950,
    WATER_YSUM_CO2: 15124.4,
    WATER_MSUM_CO2: 3424.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 377
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 377
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 301.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 226.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 226.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 20,
    POWER_YSUM: 1825.8,
    POWER_MSUM: 655.8,
    POWER_DSUM: 455.8,
    POWER_HSUM: 400,
    POWER_YSUM_CO2: 1795.8,
    POWER_MSUM_CO2: 625.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 113.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 113.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 91.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 68.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 68.37
      }
    ],
    WATER_YSUM: 15258,
    WATER_MSUM: 3558,
    WATER_DSUM: 1558,
    WATER_HSUM: 1e3,
    WATER_YSUM_CO2: 15170,
    WATER_MSUM_CO2: 3470,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 389.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 389.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 311.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 233.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 233.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 21,
    POWER_YSUM: 1845.8,
    POWER_MSUM: 675.8,
    POWER_DSUM: 475.8,
    POWER_HSUM: 420,
    POWER_YSUM_CO2: 1814.3,
    POWER_MSUM_CO2: 644.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 118.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 118.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 95.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 71.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 71.37
      }
    ],
    WATER_YSUM: 15308,
    WATER_MSUM: 3608,
    WATER_DSUM: 1608,
    WATER_HSUM: 1050,
    WATER_YSUM_CO2: 15215.6,
    WATER_MSUM_CO2: 3515.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 402
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 402
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 321.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 241.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 241.2
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 22,
    POWER_YSUM: 1865.8,
    POWER_MSUM: 695.8,
    POWER_DSUM: 495.8,
    POWER_HSUM: 440,
    POWER_YSUM_CO2: 1832.8,
    POWER_MSUM_CO2: 662.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 123.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 123.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 99.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 74.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 74.37
      }
    ],
    WATER_YSUM: 15358,
    WATER_MSUM: 3658,
    WATER_DSUM: 1658,
    WATER_HSUM: 1100,
    WATER_YSUM_CO2: 15261.2,
    WATER_MSUM_CO2: 3561.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 414.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 414.5
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 331.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 248.7
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 248.7
      }
    ]
  },
  {
    PORT: "MZG",
    USE_DATE: "20240701",
    USE_HOUR: 23,
    POWER_YSUM: 1885.8,
    POWER_MSUM: 715.8,
    POWER_DSUM: 515.8,
    POWER_HSUM: 459.99999999999994,
    POWER_YSUM_CO2: 1851.3,
    POWER_MSUM_CO2: 681.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 128.95
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 128.95
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 103.16
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 77.37
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 77.37
      }
    ],
    WATER_YSUM: 15408,
    WATER_MSUM: 3708,
    WATER_DSUM: 1708,
    WATER_HSUM: 1150,
    WATER_YSUM_CO2: 15306.8,
    WATER_MSUM_CO2: 3606.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 427
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 427
      },
      {
        zone: "三區",
        ratio: 20,
        dsum: 341.6
      },
      {
        zone: "四區",
        ratio: 15,
        dsum: 256.2
      },
      {
        zone: "五區",
        ratio: 15,
        dsum: 256.2
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 1,
    POWER_YSUM: 945.8,
    POWER_MSUM: 155.8,
    POWER_DSUM: 50.8,
    POWER_HSUM: 19.999999999999996,
    POWER_YSUM_CO2: 944.3,
    POWER_MSUM_CO2: 154.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 12.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 12.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 12.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 12.7
      }
    ],
    WATER_YSUM: 9308,
    WATER_MSUM: 1408,
    WATER_DSUM: 358,
    WATER_HSUM: 50,
    WATER_YSUM_CO2: 9303.6,
    WATER_MSUM_CO2: 1403.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 89.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 89.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 89.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 89.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 2,
    POWER_YSUM: 965.8,
    POWER_MSUM: 175.8,
    POWER_DSUM: 70.8,
    POWER_HSUM: 40,
    POWER_YSUM_CO2: 962.8,
    POWER_MSUM_CO2: 172.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 17.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 17.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 17.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 17.7
      }
    ],
    WATER_YSUM: 9358,
    WATER_MSUM: 1458,
    WATER_DSUM: 408,
    WATER_HSUM: 100,
    WATER_YSUM_CO2: 9349.2,
    WATER_MSUM_CO2: 1449.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 102
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 102
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 102
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 102
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 3,
    POWER_YSUM: 985.8,
    POWER_MSUM: 195.8,
    POWER_DSUM: 90.8,
    POWER_HSUM: 60,
    POWER_YSUM_CO2: 981.3,
    POWER_MSUM_CO2: 191.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 22.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 22.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 22.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 22.7
      }
    ],
    WATER_YSUM: 9408,
    WATER_MSUM: 1508,
    WATER_DSUM: 458,
    WATER_HSUM: 150,
    WATER_YSUM_CO2: 9394.8,
    WATER_MSUM_CO2: 1494.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 114.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 114.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 114.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 114.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 4,
    POWER_YSUM: 1005.8,
    POWER_MSUM: 215.8,
    POWER_DSUM: 110.8,
    POWER_HSUM: 80,
    POWER_YSUM_CO2: 999.8,
    POWER_MSUM_CO2: 209.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 27.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 27.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 27.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 27.7
      }
    ],
    WATER_YSUM: 9458,
    WATER_MSUM: 1558,
    WATER_DSUM: 508,
    WATER_HSUM: 200,
    WATER_YSUM_CO2: 9440.4,
    WATER_MSUM_CO2: 1540.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 127
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 127
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 127
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 127
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 5,
    POWER_YSUM: 1025.8,
    POWER_MSUM: 235.8,
    POWER_DSUM: 130.8,
    POWER_HSUM: 100.00000000000001,
    POWER_YSUM_CO2: 1018.3,
    POWER_MSUM_CO2: 228.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 32.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 32.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 32.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 32.7
      }
    ],
    WATER_YSUM: 9508,
    WATER_MSUM: 1608,
    WATER_DSUM: 558,
    WATER_HSUM: 250,
    WATER_YSUM_CO2: 9486,
    WATER_MSUM_CO2: 1586,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 139.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 139.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 139.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 139.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 6,
    POWER_YSUM: 1045.8,
    POWER_MSUM: 255.8,
    POWER_DSUM: 150.8,
    POWER_HSUM: 120.00000000000001,
    POWER_YSUM_CO2: 1036.8,
    POWER_MSUM_CO2: 246.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 37.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 37.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 37.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 37.7
      }
    ],
    WATER_YSUM: 9558,
    WATER_MSUM: 1658,
    WATER_DSUM: 608,
    WATER_HSUM: 300,
    WATER_YSUM_CO2: 9531.6,
    WATER_MSUM_CO2: 1631.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 152
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 152
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 152
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 152
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 7,
    POWER_YSUM: 1065.8,
    POWER_MSUM: 275.8,
    POWER_DSUM: 170.8,
    POWER_HSUM: 140,
    POWER_YSUM_CO2: 1055.3,
    POWER_MSUM_CO2: 265.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 42.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 42.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 42.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 42.7
      }
    ],
    WATER_YSUM: 9608,
    WATER_MSUM: 1708,
    WATER_DSUM: 658,
    WATER_HSUM: 350,
    WATER_YSUM_CO2: 9577.2,
    WATER_MSUM_CO2: 1677.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 164.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 164.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 164.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 164.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 8,
    POWER_YSUM: 1085.8,
    POWER_MSUM: 295.8,
    POWER_DSUM: 190.8,
    POWER_HSUM: 160,
    POWER_YSUM_CO2: 1073.8,
    POWER_MSUM_CO2: 283.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 47.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 47.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 47.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 47.7
      }
    ],
    WATER_YSUM: 9658,
    WATER_MSUM: 1758,
    WATER_DSUM: 708,
    WATER_HSUM: 400,
    WATER_YSUM_CO2: 9622.8,
    WATER_MSUM_CO2: 1722.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 177
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 177
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 177
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 177
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 9,
    POWER_YSUM: 1105.8,
    POWER_MSUM: 315.8,
    POWER_DSUM: 210.8,
    POWER_HSUM: 180,
    POWER_YSUM_CO2: 1092.3,
    POWER_MSUM_CO2: 302.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 52.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 52.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 52.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 52.7
      }
    ],
    WATER_YSUM: 9708,
    WATER_MSUM: 1808,
    WATER_DSUM: 758,
    WATER_HSUM: 450,
    WATER_YSUM_CO2: 9668.4,
    WATER_MSUM_CO2: 1768.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 189.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 189.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 189.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 189.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 10,
    POWER_YSUM: 1125.8,
    POWER_MSUM: 335.8,
    POWER_DSUM: 230.8,
    POWER_HSUM: 200,
    POWER_YSUM_CO2: 1110.8,
    POWER_MSUM_CO2: 320.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 57.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 57.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 57.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 57.7
      }
    ],
    WATER_YSUM: 9758,
    WATER_MSUM: 1858,
    WATER_DSUM: 808,
    WATER_HSUM: 500,
    WATER_YSUM_CO2: 9714,
    WATER_MSUM_CO2: 1814,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 202
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 202
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 202
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 202
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 11,
    POWER_YSUM: 1145.8,
    POWER_MSUM: 355.8,
    POWER_DSUM: 250.8,
    POWER_HSUM: 220,
    POWER_YSUM_CO2: 1129.3,
    POWER_MSUM_CO2: 339.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 62.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 62.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 62.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 62.7
      }
    ],
    WATER_YSUM: 9808,
    WATER_MSUM: 1908,
    WATER_DSUM: 858,
    WATER_HSUM: 550,
    WATER_YSUM_CO2: 9759.6,
    WATER_MSUM_CO2: 1859.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 214.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 214.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 214.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 214.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 12,
    POWER_YSUM: 1165.8,
    POWER_MSUM: 375.8,
    POWER_DSUM: 270.8,
    POWER_HSUM: 240,
    POWER_YSUM_CO2: 1147.8,
    POWER_MSUM_CO2: 357.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 67.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 67.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 67.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 67.7
      }
    ],
    WATER_YSUM: 9858,
    WATER_MSUM: 1958,
    WATER_DSUM: 908,
    WATER_HSUM: 600,
    WATER_YSUM_CO2: 9805.2,
    WATER_MSUM_CO2: 1905.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 227
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 227
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 227
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 227
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 13,
    POWER_YSUM: 1185.8,
    POWER_MSUM: 395.8,
    POWER_DSUM: 290.8,
    POWER_HSUM: 260,
    POWER_YSUM_CO2: 1166.3,
    POWER_MSUM_CO2: 376.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 72.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 72.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 72.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 72.7
      }
    ],
    WATER_YSUM: 9908,
    WATER_MSUM: 2008,
    WATER_DSUM: 958,
    WATER_HSUM: 650,
    WATER_YSUM_CO2: 9850.8,
    WATER_MSUM_CO2: 1950.8000000000002,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 239.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 239.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 239.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 239.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 14,
    POWER_YSUM: 1205.8,
    POWER_MSUM: 415.8,
    POWER_DSUM: 310.8,
    POWER_HSUM: 280,
    POWER_YSUM_CO2: 1184.8,
    POWER_MSUM_CO2: 394.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 77.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 77.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 77.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 77.7
      }
    ],
    WATER_YSUM: 9958,
    WATER_MSUM: 2058,
    WATER_DSUM: 1008,
    WATER_HSUM: 700,
    WATER_YSUM_CO2: 9896.4,
    WATER_MSUM_CO2: 1996.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 252
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 252
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 252
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 252
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 15,
    POWER_YSUM: 1225.8,
    POWER_MSUM: 435.8,
    POWER_DSUM: 330.8,
    POWER_HSUM: 300,
    POWER_YSUM_CO2: 1203.3,
    POWER_MSUM_CO2: 413.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 82.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 82.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 82.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 82.7
      }
    ],
    WATER_YSUM: 10008,
    WATER_MSUM: 2108,
    WATER_DSUM: 1058,
    WATER_HSUM: 750,
    WATER_YSUM_CO2: 9942,
    WATER_MSUM_CO2: 2042,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 264.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 264.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 264.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 264.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 16,
    POWER_YSUM: 1245.8,
    POWER_MSUM: 455.8,
    POWER_DSUM: 350.8,
    POWER_HSUM: 320,
    POWER_YSUM_CO2: 1221.8,
    POWER_MSUM_CO2: 431.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 87.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 87.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 87.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 87.7
      }
    ],
    WATER_YSUM: 10058,
    WATER_MSUM: 2158,
    WATER_DSUM: 1108,
    WATER_HSUM: 800,
    WATER_YSUM_CO2: 9987.6,
    WATER_MSUM_CO2: 2087.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 277
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 277
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 277
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 277
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 17,
    POWER_YSUM: 1265.8,
    POWER_MSUM: 475.8,
    POWER_DSUM: 370.8,
    POWER_HSUM: 340,
    POWER_YSUM_CO2: 1240.3,
    POWER_MSUM_CO2: 450.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 92.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 92.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 92.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 92.7
      }
    ],
    WATER_YSUM: 10108,
    WATER_MSUM: 2208,
    WATER_DSUM: 1158,
    WATER_HSUM: 850,
    WATER_YSUM_CO2: 10033.2,
    WATER_MSUM_CO2: 2133.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 289.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 289.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 289.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 289.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 18,
    POWER_YSUM: 1285.8,
    POWER_MSUM: 495.8,
    POWER_DSUM: 390.8,
    POWER_HSUM: 360,
    POWER_YSUM_CO2: 1258.8,
    POWER_MSUM_CO2: 468.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 97.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 97.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 97.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 97.7
      }
    ],
    WATER_YSUM: 10158,
    WATER_MSUM: 2258,
    WATER_DSUM: 1208,
    WATER_HSUM: 900,
    WATER_YSUM_CO2: 10078.8,
    WATER_MSUM_CO2: 2178.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 302
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 302
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 302
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 302
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 19,
    POWER_YSUM: 1305.8,
    POWER_MSUM: 515.8,
    POWER_DSUM: 410.8,
    POWER_HSUM: 380,
    POWER_YSUM_CO2: 1277.3,
    POWER_MSUM_CO2: 487.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 102.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 102.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 102.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 102.7
      }
    ],
    WATER_YSUM: 10208,
    WATER_MSUM: 2308,
    WATER_DSUM: 1258,
    WATER_HSUM: 950,
    WATER_YSUM_CO2: 10124.4,
    WATER_MSUM_CO2: 2224.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 314.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 314.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 314.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 314.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 20,
    POWER_YSUM: 1325.8,
    POWER_MSUM: 535.8,
    POWER_DSUM: 430.8,
    POWER_HSUM: 400,
    POWER_YSUM_CO2: 1295.8,
    POWER_MSUM_CO2: 505.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 107.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 107.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 107.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 107.7
      }
    ],
    WATER_YSUM: 10258,
    WATER_MSUM: 2358,
    WATER_DSUM: 1308,
    WATER_HSUM: 1e3,
    WATER_YSUM_CO2: 10170,
    WATER_MSUM_CO2: 2270,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 327
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 327
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 327
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 327
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 21,
    POWER_YSUM: 1345.8,
    POWER_MSUM: 555.8,
    POWER_DSUM: 450.8,
    POWER_HSUM: 420,
    POWER_YSUM_CO2: 1314.3,
    POWER_MSUM_CO2: 524.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 112.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 112.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 112.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 112.7
      }
    ],
    WATER_YSUM: 10308,
    WATER_MSUM: 2408,
    WATER_DSUM: 1358,
    WATER_HSUM: 1050,
    WATER_YSUM_CO2: 10215.6,
    WATER_MSUM_CO2: 2315.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 339.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 339.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 339.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 339.5
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 22,
    POWER_YSUM: 1365.8,
    POWER_MSUM: 575.8,
    POWER_DSUM: 470.8,
    POWER_HSUM: 440,
    POWER_YSUM_CO2: 1332.8,
    POWER_MSUM_CO2: 542.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 117.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 117.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 117.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 117.7
      }
    ],
    WATER_YSUM: 10358,
    WATER_MSUM: 2458,
    WATER_DSUM: 1408,
    WATER_HSUM: 1100,
    WATER_YSUM_CO2: 10261.2,
    WATER_MSUM_CO2: 2361.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 352
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 352
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 352
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 352
      }
    ]
  },
  {
    PORT: "APG",
    USE_DATE: "20240701",
    USE_HOUR: 23,
    POWER_YSUM: 1385.8,
    POWER_MSUM: 595.8,
    POWER_DSUM: 490.8,
    POWER_HSUM: 460,
    POWER_YSUM_CO2: 1351.3,
    POWER_MSUM_CO2: 561.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 122.7
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 122.7
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 122.7
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 122.7
      }
    ],
    WATER_YSUM: 10408,
    WATER_MSUM: 2508,
    WATER_DSUM: 1458,
    WATER_HSUM: 1150,
    WATER_YSUM_CO2: 10306.8,
    WATER_MSUM_CO2: 2406.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 25,
        dsum: 364.5
      },
      {
        zone: "二區",
        ratio: 25,
        dsum: 364.5
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 364.5
      },
      {
        zone: "四區",
        ratio: 25,
        dsum: 364.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 1,
    POWER_YSUM: 845.8,
    POWER_MSUM: 145.8,
    POWER_DSUM: 45.8,
    POWER_HSUM: 19.999999999999996,
    POWER_YSUM_CO2: 844.3,
    POWER_MSUM_CO2: 144.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 18.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 16.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 11.45
      }
    ],
    WATER_YSUM: 8308,
    WATER_MSUM: 1308,
    WATER_DSUM: 308,
    WATER_HSUM: 50,
    WATER_YSUM_CO2: 8303.6,
    WATER_MSUM_CO2: 1303.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 123.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 107.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 77
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 2,
    POWER_YSUM: 865.8,
    POWER_MSUM: 165.8,
    POWER_DSUM: 65.8,
    POWER_HSUM: 40,
    POWER_YSUM_CO2: 862.8,
    POWER_MSUM_CO2: 162.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 26.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 23.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 16.45
      }
    ],
    WATER_YSUM: 8358,
    WATER_MSUM: 1358,
    WATER_DSUM: 358,
    WATER_HSUM: 100,
    WATER_YSUM_CO2: 8349.2,
    WATER_MSUM_CO2: 1349.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 143.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 125.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 89.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 3,
    POWER_YSUM: 885.8,
    POWER_MSUM: 185.8,
    POWER_DSUM: 85.8,
    POWER_HSUM: 60,
    POWER_YSUM_CO2: 881.3,
    POWER_MSUM_CO2: 181.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 34.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 30.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 21.45
      }
    ],
    WATER_YSUM: 8408,
    WATER_MSUM: 1408,
    WATER_DSUM: 408,
    WATER_HSUM: 150,
    WATER_YSUM_CO2: 8394.8,
    WATER_MSUM_CO2: 1394.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 163.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 142.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 102
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 4,
    POWER_YSUM: 905.8,
    POWER_MSUM: 205.8,
    POWER_DSUM: 105.8,
    POWER_HSUM: 80,
    POWER_YSUM_CO2: 899.8,
    POWER_MSUM_CO2: 199.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 42.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 37.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 26.45
      }
    ],
    WATER_YSUM: 8458,
    WATER_MSUM: 1458,
    WATER_DSUM: 458,
    WATER_HSUM: 200,
    WATER_YSUM_CO2: 8440.4,
    WATER_MSUM_CO2: 1440.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 183.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 160.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 114.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 5,
    POWER_YSUM: 925.8,
    POWER_MSUM: 225.8,
    POWER_DSUM: 125.8,
    POWER_HSUM: 100,
    POWER_YSUM_CO2: 918.3,
    POWER_MSUM_CO2: 218.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 50.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 44.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 31.45
      }
    ],
    WATER_YSUM: 8508,
    WATER_MSUM: 1508,
    WATER_DSUM: 508,
    WATER_HSUM: 250,
    WATER_YSUM_CO2: 8486,
    WATER_MSUM_CO2: 1486,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 203.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 177.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 127
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 6,
    POWER_YSUM: 945.8,
    POWER_MSUM: 245.8,
    POWER_DSUM: 145.8,
    POWER_HSUM: 120.00000000000001,
    POWER_YSUM_CO2: 936.8,
    POWER_MSUM_CO2: 236.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 58.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 51.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 36.45
      }
    ],
    WATER_YSUM: 8558,
    WATER_MSUM: 1558,
    WATER_DSUM: 558,
    WATER_HSUM: 300,
    WATER_YSUM_CO2: 8531.6,
    WATER_MSUM_CO2: 1531.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 223.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 195.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 139.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 7,
    POWER_YSUM: 965.8,
    POWER_MSUM: 265.8,
    POWER_DSUM: 165.8,
    POWER_HSUM: 140,
    POWER_YSUM_CO2: 955.3,
    POWER_MSUM_CO2: 255.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 66.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 58.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 41.45
      }
    ],
    WATER_YSUM: 8608,
    WATER_MSUM: 1608,
    WATER_DSUM: 608,
    WATER_HSUM: 350,
    WATER_YSUM_CO2: 8577.2,
    WATER_MSUM_CO2: 1577.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 243.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 212.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 152
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 8,
    POWER_YSUM: 985.8,
    POWER_MSUM: 285.8,
    POWER_DSUM: 185.8,
    POWER_HSUM: 160,
    POWER_YSUM_CO2: 973.8,
    POWER_MSUM_CO2: 273.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 74.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 65.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 46.45
      }
    ],
    WATER_YSUM: 8658,
    WATER_MSUM: 1658,
    WATER_DSUM: 658,
    WATER_HSUM: 400,
    WATER_YSUM_CO2: 8622.8,
    WATER_MSUM_CO2: 1622.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 263.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 230.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 164.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 9,
    POWER_YSUM: 1005.8,
    POWER_MSUM: 305.8,
    POWER_DSUM: 205.8,
    POWER_HSUM: 180,
    POWER_YSUM_CO2: 992.3,
    POWER_MSUM_CO2: 292.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 82.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 72.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 51.45
      }
    ],
    WATER_YSUM: 8708,
    WATER_MSUM: 1708,
    WATER_DSUM: 708,
    WATER_HSUM: 450,
    WATER_YSUM_CO2: 8668.4,
    WATER_MSUM_CO2: 1668.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 283.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 247.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 177
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 10,
    POWER_YSUM: 1025.8,
    POWER_MSUM: 325.8,
    POWER_DSUM: 225.8,
    POWER_HSUM: 200,
    POWER_YSUM_CO2: 1010.8,
    POWER_MSUM_CO2: 310.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 90.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 79.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 56.45
      }
    ],
    WATER_YSUM: 8758,
    WATER_MSUM: 1758,
    WATER_DSUM: 758,
    WATER_HSUM: 500,
    WATER_YSUM_CO2: 8714,
    WATER_MSUM_CO2: 1714,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 303.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 265.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 189.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 11,
    POWER_YSUM: 1045.8,
    POWER_MSUM: 345.8,
    POWER_DSUM: 245.8,
    POWER_HSUM: 220,
    POWER_YSUM_CO2: 1029.3,
    POWER_MSUM_CO2: 329.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 98.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 86.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 61.45
      }
    ],
    WATER_YSUM: 8808,
    WATER_MSUM: 1808,
    WATER_DSUM: 808,
    WATER_HSUM: 550,
    WATER_YSUM_CO2: 8759.6,
    WATER_MSUM_CO2: 1759.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 323.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 282.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 202
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 12,
    POWER_YSUM: 1065.8,
    POWER_MSUM: 365.8,
    POWER_DSUM: 265.8,
    POWER_HSUM: 240,
    POWER_YSUM_CO2: 1047.8,
    POWER_MSUM_CO2: 347.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 106.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 93.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 66.45
      }
    ],
    WATER_YSUM: 8858,
    WATER_MSUM: 1858,
    WATER_DSUM: 858,
    WATER_HSUM: 600,
    WATER_YSUM_CO2: 8805.2,
    WATER_MSUM_CO2: 1805.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 343.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 300.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 214.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 13,
    POWER_YSUM: 1085.8,
    POWER_MSUM: 385.8,
    POWER_DSUM: 285.8,
    POWER_HSUM: 260,
    POWER_YSUM_CO2: 1066.3,
    POWER_MSUM_CO2: 366.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 114.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 100.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 71.45
      }
    ],
    WATER_YSUM: 8908,
    WATER_MSUM: 1908,
    WATER_DSUM: 908,
    WATER_HSUM: 650,
    WATER_YSUM_CO2: 8850.8,
    WATER_MSUM_CO2: 1850.8000000000002,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 363.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 317.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 227
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 14,
    POWER_YSUM: 1105.8,
    POWER_MSUM: 405.8,
    POWER_DSUM: 305.8,
    POWER_HSUM: 280,
    POWER_YSUM_CO2: 1084.8,
    POWER_MSUM_CO2: 384.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 122.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 107.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 76.45
      }
    ],
    WATER_YSUM: 8958,
    WATER_MSUM: 1958,
    WATER_DSUM: 958,
    WATER_HSUM: 700,
    WATER_YSUM_CO2: 8896.4,
    WATER_MSUM_CO2: 1896.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 383.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 335.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 239.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 15,
    POWER_YSUM: 1125.8,
    POWER_MSUM: 425.8,
    POWER_DSUM: 325.8,
    POWER_HSUM: 300,
    POWER_YSUM_CO2: 1103.3,
    POWER_MSUM_CO2: 403.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 130.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 114.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 81.45
      }
    ],
    WATER_YSUM: 9008,
    WATER_MSUM: 2008,
    WATER_DSUM: 1008,
    WATER_HSUM: 750,
    WATER_YSUM_CO2: 8942,
    WATER_MSUM_CO2: 1942,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 403.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 352.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 252
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 16,
    POWER_YSUM: 1145.8,
    POWER_MSUM: 445.8,
    POWER_DSUM: 345.8,
    POWER_HSUM: 320,
    POWER_YSUM_CO2: 1121.8,
    POWER_MSUM_CO2: 421.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 138.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 121.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 86.45
      }
    ],
    WATER_YSUM: 9058,
    WATER_MSUM: 2058,
    WATER_DSUM: 1058,
    WATER_HSUM: 800,
    WATER_YSUM_CO2: 8987.6,
    WATER_MSUM_CO2: 1987.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 423.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 370.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 264.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 17,
    POWER_YSUM: 1165.8,
    POWER_MSUM: 465.8,
    POWER_DSUM: 365.8,
    POWER_HSUM: 340,
    POWER_YSUM_CO2: 1140.3,
    POWER_MSUM_CO2: 440.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 146.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 128.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 91.45
      }
    ],
    WATER_YSUM: 9108,
    WATER_MSUM: 2108,
    WATER_DSUM: 1108,
    WATER_HSUM: 850,
    WATER_YSUM_CO2: 9033.2,
    WATER_MSUM_CO2: 2033.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 443.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 387.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 277
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 18,
    POWER_YSUM: 1185.8,
    POWER_MSUM: 485.8,
    POWER_DSUM: 385.8,
    POWER_HSUM: 360,
    POWER_YSUM_CO2: 1158.8,
    POWER_MSUM_CO2: 458.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 154.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 135.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 96.45
      }
    ],
    WATER_YSUM: 9158,
    WATER_MSUM: 2158,
    WATER_DSUM: 1158,
    WATER_HSUM: 900,
    WATER_YSUM_CO2: 9078.8,
    WATER_MSUM_CO2: 2078.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 463.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 405.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 289.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 19,
    POWER_YSUM: 1205.8,
    POWER_MSUM: 505.8,
    POWER_DSUM: 405.8,
    POWER_HSUM: 380,
    POWER_YSUM_CO2: 1177.3,
    POWER_MSUM_CO2: 477.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 162.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 142.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 101.45
      }
    ],
    WATER_YSUM: 9208,
    WATER_MSUM: 2208,
    WATER_DSUM: 1208,
    WATER_HSUM: 950,
    WATER_YSUM_CO2: 9124.4,
    WATER_MSUM_CO2: 2124.4,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 483.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 422.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 302
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 20,
    POWER_YSUM: 1225.8,
    POWER_MSUM: 525.8,
    POWER_DSUM: 425.8,
    POWER_HSUM: 400,
    POWER_YSUM_CO2: 1195.8,
    POWER_MSUM_CO2: 495.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 170.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 149.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 106.45
      }
    ],
    WATER_YSUM: 9258,
    WATER_MSUM: 2258,
    WATER_DSUM: 1258,
    WATER_HSUM: 1e3,
    WATER_YSUM_CO2: 9170,
    WATER_MSUM_CO2: 2170,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 503.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 440.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 314.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 21,
    POWER_YSUM: 1245.8,
    POWER_MSUM: 545.8,
    POWER_DSUM: 445.8,
    POWER_HSUM: 420,
    POWER_YSUM_CO2: 1214.3,
    POWER_MSUM_CO2: 514.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 178.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 156.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 111.45
      }
    ],
    WATER_YSUM: 9308,
    WATER_MSUM: 2308,
    WATER_DSUM: 1308,
    WATER_HSUM: 1050,
    WATER_YSUM_CO2: 9215.6,
    WATER_MSUM_CO2: 2215.6,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 523.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 457.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 327
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 22,
    POWER_YSUM: 1265.8,
    POWER_MSUM: 565.8,
    POWER_DSUM: 465.8,
    POWER_HSUM: 440,
    POWER_YSUM_CO2: 1232.8,
    POWER_MSUM_CO2: 532.8,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 186.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 163.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 116.45
      }
    ],
    WATER_YSUM: 9358,
    WATER_MSUM: 2358,
    WATER_DSUM: 1358,
    WATER_HSUM: 1100,
    WATER_YSUM_CO2: 9261.2,
    WATER_MSUM_CO2: 2261.2,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 543.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 475.3
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 339.5
      }
    ]
  },
  {
    PORT: "PUT",
    USE_DATE: "20240701",
    USE_HOUR: 23,
    POWER_YSUM: 1285.8,
    POWER_MSUM: 585.8,
    POWER_DSUM: 485.8,
    POWER_HSUM: 460,
    POWER_YSUM_CO2: 1251.3,
    POWER_MSUM_CO2: 551.3,
    POWER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 194.32
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 170.03
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 121.45
      }
    ],
    WATER_YSUM: 9408,
    WATER_MSUM: 2408,
    WATER_DSUM: 1408,
    WATER_HSUM: 1150,
    WATER_YSUM_CO2: 9306.8,
    WATER_MSUM_CO2: 2306.8,
    WATER_DSUM_ZONE_RATIO: [
      {
        zone: "一區",
        ratio: 40,
        dsum: 563.2
      },
      {
        zone: "二區",
        ratio: 35,
        dsum: 492.8
      },
      {
        zone: "三區",
        ratio: 25,
        dsum: 352
      }
    ]
  }
];
const rawData = {
  IS_SUCCESS,
  MESSAGE,
  COMP_ID,
  RESULT
};
const css = {
  code: ".pie-container.svelte-6cqhfl{width:70%;height:70%}",
  map: '{"version":3,"file":"PieChart.svelte","sources":["PieChart.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Pie } from \\"svelte-chartjs\\";\\nimport { Chart as ChartJS, ArcElement, Tooltip, Legend } from \\"chart.js\\";\\nimport ChartDataLabels from \\"chartjs-plugin-datalabels\\";\\nChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);\\nexport let labels;\\nexport let ratios;\\nconst chartData = {\\n  labels,\\n  datasets: [\\n    {\\n      data: ratios,\\n      backgroundColor: [\\n        \\"rgba(255, 99, 132, 1)\\",\\n        \\"rgba(54, 162, 235, 1)\\",\\n        \\"rgba(255, 206, 86, 1)\\",\\n        \\"rgba(75, 192, 192, 1)\\",\\n        \\"rgba(153, 102, 255, 1)\\",\\n        \\"rgba(255, 159, 64, 1)\\",\\n        \\"rgba(199, 199, 199, 1)\\"\\n      ],\\n      borderColor: [\\n        \\"rgba(255, 99, 132, 1)\\",\\n        \\"rgba(54, 162, 235, 1)\\",\\n        \\"rgba(255, 206, 86, 1)\\",\\n        \\"rgba(75, 192, 192, 1)\\",\\n        \\"rgba(153, 102, 255, 1)\\",\\n        \\"rgba(255, 159, 64, 1)\\",\\n        \\"rgba(199, 199, 199, 1)\\"\\n      ],\\n      borderWidth: 1\\n    }\\n  ]\\n};\\nconst options = {\\n  responsive: true,\\n  plugins: {\\n    legend: {\\n      display: false,\\n      position: \\"top\\"\\n    },\\n    title: {\\n      display: false,\\n      text: \\"Power DSum Zone Ratio\\"\\n    },\\n    datalabels: {\\n      display: true,\\n      color: \\"white\\",\\n      formatter: (value, context) => {\\n        return context.chart.data.labels[context.dataIndex] + \\"\\\\n\\" + value + \\"%\\";\\n      }\\n    }\\n  }\\n};\\n<\/script>\\n\\n<div class=\\"pie-container\\">\\n  <Pie data={chartData} {options} />\\n</div>\\n\\n<style lang=\\"postcss\\">\\n  .pie-container {\\n    width: 70%;\\n    height: 70%;\\n  }\\n.pie-container canvas {\\n      max-width: 600px;\\n      max-height: 600px;\\n    }\\n</style>\\n"],"names":[],"mappings":"AA4DE,4BAAe,CACb,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GACV"}'
};
const PieChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$1.register(ArcElement, Tooltip, Legend, ChartDataLabels);
  let { labels } = $$props;
  let { ratios } = $$props;
  const chartData = {
    labels,
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
          "rgba(199, 199, 199, 1)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)"
        ],
        borderWidth: 1
      }
    ]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false, position: "top" },
      title: {
        display: false,
        text: "Power DSum Zone Ratio"
      },
      datalabels: {
        display: true,
        color: "white",
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex] + "\n" + value + "%";
        }
      }
    }
  };
  if ($$props.labels === void 0 && $$bindings.labels && labels !== void 0) $$bindings.labels(labels);
  if ($$props.ratios === void 0 && $$bindings.ratios && ratios !== void 0) $$bindings.ratios(ratios);
  $$result.css.add(css);
  return `<div class="pie-container svelte-6cqhfl">${validate_component(Pie, "Pie").$$render($$result, { data: chartData, options }, {}, {})} </div>`;
});

export { PieChart as P, rawData as r };
//# sourceMappingURL=PieChart-BkkDFOp9.js.map
