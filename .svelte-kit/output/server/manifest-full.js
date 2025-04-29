export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","mp3/mac_miller-self_care.mp3","mp3/stromae_pomme_ma_meilleure_ennemie.mp3","mp3/who_can_it_be_now.mp3"]),
	mimeTypes: {".png":"image/png",".mp3":"audio/mpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.Dn3sS6QM.js",app:"_app/immutable/entry/app.ePGtvOKp.js",imports:["_app/immutable/entry/start.Dn3sS6QM.js","_app/immutable/chunks/SOB-LvHO.js","_app/immutable/chunks/AkqJN3-E.js","_app/immutable/chunks/BBc-fys7.js","_app/immutable/entry/app.ePGtvOKp.js","_app/immutable/chunks/AkqJN3-E.js","_app/immutable/chunks/DP0d7mW8.js","_app/immutable/chunks/C4tweBjP.js","_app/immutable/chunks/ChN-cwTP.js","_app/immutable/chunks/BBc-fys7.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
