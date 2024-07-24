// import adapter from '@sveltejs/adapter-static'
import adapter from '@sveltejs/adapter-node'
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
		version: {
			name: `${nodePag.name} v${nodePag.version}`,
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			out:'docs',
			fallback: undefined,
			precompress: false,
			strict: true,
		}),
	},
}

export default config
