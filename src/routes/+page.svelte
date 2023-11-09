<script lang="ts">
	import cn from 'classnames';
	import toml from '@ltd/j-toml';
	import TomlEditor from './TomlEditor.svelte';
	import JsonEditor from './JsonEditor.svelte';

	let tomlText = '';
	let jsonText = '';

	$: {
		let parsed;
		try {
			parsed = toml.parse(tomlText, { bigint: false });
		} catch (e) {
			console.error(e);
		}
		if (parsed !== undefined) {
			jsonText = JSON.stringify(parsed, null, 2);
		}
	}

	let toJson = true;
</script>

<div class="flex flex-col items-center container mx-auto mb-20">
	<h1 class="text-5xl font-bold">Convert TOML to JSON</h1>

	<div class="flex flex-row gap-2 w-full h-96">
		<div class="flex-1">
			<h2 class="text-3xl font-semibold">TOML</h2>
			<TomlEditor class="border border-slate-400 h-full" bind:doc={tomlText} />
		</div>
		<!--Button for potential reverse-mode-->
		<button
			disabled
			class={cn('mt-32 swap swap-flip text-5xl disabled:cursor-default', { 'swap-active': toJson })}
			on:click={() => (toJson = !toJson)}
		>
			<div class="swap-on">➡</div>
			<div class="swap-off">⬅</div>
		</button>
		<div class="flex-1">
			<h2 class="text-3xl font-semibold">JSON</h2>
			<JsonEditor class="border border-slate-400 h-full" bind:doc={jsonText} />
		</div>
	</div>
</div>
