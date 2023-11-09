export const prerender = true;

import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		meta: {
			title: `Learn & Convert: TOML to JSON`,
			description: `Explore the structure of TOML and JSON. Convert and learn the differences in real-time – a dynamic tool for coders and enthusiasts alike.`,
			keywords: [
				'toml',
				'json',
				'converter',
				'dynamic converter',
				'learning tool',
				'educational',
				'real-time conversion',
				'coding',
				'programming education',
				'data formats',
				'serialization'
			]
		}
	};
}) as PageLoad;
