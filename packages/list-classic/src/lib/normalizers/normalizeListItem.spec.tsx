/** @jsx jsxt */

import { jsxt } from '@platejs/test-utils';
import { type SlateEditor, createSlateEditor, NodeApi } from 'platejs';

import { BaseListPlugin } from '../BaseListPlugin';

jsxt;

describe('clean up list items', () => {
  it('should move children up from sublis if their parent has no lic', () => {
    const input = (
      <editor>
        <hul>
          <hli>
            <hul>
              <hli>
                <hlic>1</hlic>
              </hli>
            </hul>
          </hli>
        </hul>
      </editor>
    ) as any as SlateEditor;

    const output = (
      <editor>
        <hul>
          <hli>
            <hlic>1</hlic>
          </hli>
        </hul>
      </editor>
    ) as any as SlateEditor;

    const editor = createSlateEditor({
      plugins: [BaseListPlugin],
      selection: input.selection,
      value: input.children,
    });

    const path = [0, 0];
    const node = NodeApi.get(editor, path);

    editor.tf.normalizeNode([node!, path]);

    expect(editor.children).toEqual(output.children);
  });
});
