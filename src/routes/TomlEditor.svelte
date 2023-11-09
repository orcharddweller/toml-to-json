<script lang="ts">
	import { onMount } from 'svelte';
	import { EditorState } from '@codemirror/state';
	import { EditorView, basicSetup } from 'codemirror';
	import { toml } from '@codemirror/legacy-modes/mode/toml';
	import { StreamLanguage } from '@codemirror/language';
	import { theme } from '$lib/cm-theme';
	import { indentWithTab } from '@codemirror/commands';
	import { keymap } from '@codemirror/view';

	export let doc: string = '';

	let className: string = '';

	export { className as class };

	let editorContainer: HTMLElement;

	onMount(() => {
		const updateListener = EditorView.updateListener.of((u) => {
			doc = u.state.doc.toString();
		});

		const state = EditorState.create({
			doc,
			extensions: [
				basicSetup,
				keymap.of([indentWithTab]),
				StreamLanguage.define(toml),
				updateListener,
				theme
			]
		});

		const view = new EditorView({
			state,
			parent: editorContainer
		});

		return () => {
			view.destroy();
		};
	});
</script>

<div class={className} bind:this={editorContainer} />
