<script lang="ts">
	import { onMount } from 'svelte';
	import { EditorState } from '@codemirror/state';
	import { EditorView, basicSetup } from 'codemirror';
	import { json } from '@codemirror/lang-json';
	import { theme } from '$lib/cm-theme';

	export let doc: string = '';

	let className: string = '';

	export { className as class };

	let editorContainer: HTMLElement;

	let view: EditorView;

	$: {
		if (view) {
			view.dispatch({
				changes: {
					from: 0,
					to: view.state.doc.length,
					insert: doc
				}
			});
		}
	}

	onMount(() => {
		const state = EditorState.create({
			doc,
			extensions: [basicSetup, json(), EditorView.editable.of(false), theme]
		});

		view = new EditorView({
			state,
			parent: editorContainer
		});

		return () => {
			view.destroy();
		};
	});
</script>

<div class={className} bind:this={editorContainer} />
