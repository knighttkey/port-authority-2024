import { r as redirect } from './index-DyoisQP2.js';

async function load({ url }) {
  if (url.pathname === "/") {
    throw redirect(302, "/MAIN");
  }
}

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-D13hIaiU.js')).default;
const universal_id = "src/routes/+layout.ts";
const imports = ["_app/immutable/nodes/0.CLQtZ3HH.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.BAv4i5Wx.js","_app/immutable/chunks/index.CxAqFKlX.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-BqNzHLQ4.js.map
