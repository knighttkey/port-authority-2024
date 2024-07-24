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
		client: {"start":"_app/immutable/entry/start.D_juRv-e.js","app":"_app/immutable/entry/app.BlwI1ewh.js","imports":["_app/immutable/entry/start.D_juRv-e.js","_app/immutable/chunks/entry.B5XHwH3T.js","_app/immutable/chunks/scheduler.DVunXr1v.js","_app/immutable/entry/app.BlwI1ewh.js","_app/immutable/chunks/scheduler.DVunXr1v.js","_app/immutable/chunks/index.SB3yIHqI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Cxj2Fltb.js')),
			__memo(() => import('./chunks/1-Ckp6Wrpu.js')),
			__memo(() => import('./chunks/2-BL9gjuDE.js')),
			__memo(() => import('./chunks/3-BKe8mTx1.js')),
			__memo(() => import('./chunks/4-BiYmdpQk.js')),
			__memo(() => import('./chunks/5-BN25M6JL.js')),
			__memo(() => import('./chunks/6-ChbpfBUy.js')),
			__memo(() => import('./chunks/7-IBrQ3xhy.js'))
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
