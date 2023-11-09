import { EditorView } from '@codemirror/view';

export const theme = EditorView.theme({
	'&': { height: '100%' },
	'.cm-scroller': { overflow: 'auto' }
});
