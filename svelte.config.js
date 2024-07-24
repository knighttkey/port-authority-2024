// import adapter from '@sveltejs/adapter-static'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import delegateEvents from 'svelte-preprocess-delegate-events/preprocess'
import nodePag from './package.json' assert { type: 'json' }

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), delegateEvents()],
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) {
			return
		}
		handler(warning)
	},
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
}

export default config
