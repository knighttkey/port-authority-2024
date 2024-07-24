const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DHVTLr6U.js","app":"_app/immutable/entry/app.hdpdba6h.js","imports":["_app/immutable/entry/start.DHVTLr6U.js","_app/immutable/chunks/entry.dfI8V0ph.js","_app/immutable/chunks/scheduler.BAv4i5Wx.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.hdpdba6h.js","_app/immutable/chunks/scheduler.BAv4i5Wx.js","_app/immutable/chunks/index.CxAqFKlX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BqNzHLQ4.js')),
			__memo(() => import('./chunks/1-BtiHU4u_.js')),
			__memo(() => import('./chunks/2-8PbipLas.js')),
			__memo(() => import('./chunks/3-CE7HfURX.js')),
			__memo(() => import('./chunks/4-CWlc8mhI.js')),
			__memo(() => import('./chunks/5-CqFAuJ8b.js')),
			__memo(() => import('./chunks/6-BAaazuhI.js')),
			__memo(() => import('./chunks/7-CxsWtKcC.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/APG",
				pattern: /^\/APG\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/KHH",
				pattern: /^\/KHH\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/MAIN",
				pattern: /^\/MAIN\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/MZG",
				pattern: /^\/MZG\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/PUT",
				pattern: /^\/PUT\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
