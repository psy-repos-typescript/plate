# @platejs/comment

## 49.0.0

### Major Changes

- [#4327](https://github.com/udecode/plate/pull/4327) by [@zbeyens](https://github.com/zbeyens) –

  - `CommentsPlugin` has been renamed to `CommentPlugin`.
  - Update imports and plugin configurations accordingly.
    - Example: `CommentsPlugin.key` becomes `CommentPlugin.key`.
  - Package name has been changed to `@platejs/comment`.

- [#4327](https://github.com/udecode/plate/pull/4327) by [@zbeyens](https://github.com/zbeyens) –
  - Renamed all `@udecode/plate-*` packages to `@platejs/*`. Replace `@udecode/plate-` with `@platejs/` in your code.

# @udecode/plate-comments

## 48.0.0

## 45.0.0

### Major Changes

- [#4064](https://github.com/udecode/plate/pull/4064) by [@felixfeng33](https://github.com/felixfeng33) – This is a rewrite of the comments plugin removing UI logic (headless).

  **Plugin Options**

  - Removed configuration options from plugin options in favor of component-level control:
    - `options.comments`
    - `options.myUserId`
    - `options.users`

  **Components**

  - Removed legacy components:
    - `CommentDeleteButton`
    - `CommentEditActions`
    - `CommentEditButton`
    - `CommentEditCancelButton`
    - `CommentEditSaveButton`
    - `CommentEditTextarea`
    - `CommentNewSubmitButton`
    - `CommentNewTextarea`
    - `CommentResolveButton`
    - `CommentsPositioner`
    - `CommentUserName`

  **API**

  - Removed functions in favor of new API methods:
    - `findCommentNode` → `api.comment.node()`
    - `findCommentNodeById` → `api.comment.node({ id })`
    - `getCommentNodeEntries` → `api.comment.nodes()`
    - `getCommentNodesById` → `api.comment.nodes({ id })`
    - `removeCommentMark` → `tf.comment.remove()`
    - `unsetCommentNodesById` → `tf.comment.unsetMark({ id })`
  - Removed unused functions:
    - `getCommentFragment`
    - `getCommentUrl`
    - `getElementAbsolutePosition`
    - `getCommentPosition`
  - Updated `getCommentCount` to exclude draft comments

  **State Management**

  - Removed `CommentProvider` - users should implement their own state management – `block-discussion.tsx`
  - Moved `useHooksComments` to UI registry – `comments-plugin.tsx`
  - Removed hooks no longer needed with new UI:
    - `useActiveCommentNode`
    - `useCommentsResolved`
    - `useCommentAddButton`
    - `useCommentItemContent`
    - `useCommentLeaf`
    - `useCommentsShowResolvedButton`
    - `useFloatingCommentsContentState`
    - `useFloatingCommentsState`

  **Types**

  - Removed `CommentUser`
  - Moved `TComment` to UI registry – `comment.tsx`

## 44.0.0

### Major Changes

- [#4048](https://github.com/udecode/plate/pull/4048) by [@zbeyens](https://github.com/zbeyens) – Upgrade to `jotai-x@2`. [Migration](https://github.com/udecode/jotai-x/blob/main/packages/jotai-x/CHANGELOG.md#211) needed only if you use one of these stores:

  - `useCommentStore`
  - `usePlaceholderStore`
  - `useResizableStore`
  - `useTableStore`

## 43.0.0

## 42.1.1

### Patch Changes

- [#3974](https://github.com/udecode/plate/pull/3974) by [@felixfeng33](https://github.com/felixfeng33) – Remove useless html parser.

## 42.0.5

### Patch Changes

- [#3943](https://github.com/udecode/plate/pull/3943) by [@felixfeng33](https://github.com/felixfeng33) – Support deserialization from PlateStatic.

## 42.0.3

### Patch Changes

- [#3952](https://github.com/udecode/plate/pull/3952) by [@zbeyens](https://github.com/zbeyens) –
  - Fix `insertComment` - it should not deselect the editor after inserting a comment.

## 42.0.0

## 41.0.0

## 40.3.0

### Minor Changes

- [#3832](https://github.com/udecode/plate/pull/3832) by [@12joan](https://github.com/12joan) – Add an optional `initialFragment` property to `TComment`, which is populated with the fragment of text the comment is initially added to.

## 40.0.0

## 39.0.0

## 38.0.1

### Patch Changes

- [#3526](https://github.com/udecode/plate/pull/3526) by [@zbeyens](https://github.com/zbeyens) – Prefix base plugin with `Base`

## 38.0.0

## 37.0.0

### Major Changes

- [#3420](https://github.com/udecode/plate/pull/3420) by [@zbeyens](https://github.com/zbeyens) –
  - `createCommentsPlugin` -> `CommentsPlugin`
  - Move `commentsStore` to `CommentsPlugin`
  - Remove `CommentsProvider` and its hooks
  - Remove `useCommentsStates` (replaced by direct option access)
  - Remove `useCommentsSelectors` (replaced by option selectors)
  - Remove `useCommentsActions` (replaced by api methods)
  - Replace `useUpdateComment` with `api.comment.updateComment`
  - Replace `useAddRawComment` with `api.comment.addRawComment`
  - Replace `useAddComment` with `api.comment.addComment`
  - Replace `useRemoveComment` with `api.comment.removeComment`
  - Replace `useResetNewCommentValue` with `api.comment.resetNewCommentValue`
  - Replace `useNewCommentText` with `options.newText`
  - Replace `useMyUser` with `options.myUser`
  - Replace `useUserById` with `options.userById`
  - Replace `useCommentById` with `options.commentById`
  - Replace `useActiveComment` with `options.activeComment`
  - Replace `useAddCommentMark` with `insert.comment`

## 36.0.0

## 34.0.0

## 33.0.2

### Patch Changes

- [#3187](https://github.com/udecode/plate/pull/3187) by [@zbeyens](https://github.com/zbeyens) – Fix types

## 33.0.0

## 32.0.0

## 31.0.0

## 30.5.3

### Patch Changes

- [`4cbed7159`](https://github.com/udecode/plate/commit/4cbed7159d51f7427051686e45bcf2a8899aeede) by [@zbeyens](https://github.com/zbeyens) – Move `@udecode/plate-common` to peerDeps to fix a bug when multiple instances were installed

## 30.5.2

### Patch Changes

- [#2961](https://github.com/udecode/plate/pull/2961) by [@zbeyens](https://github.com/zbeyens) – Move `@udecode/plate-common` to peerDeps to fix a bug when multiple instances were installed

## 30.4.5

## 30.1.2

## 30.0.0

## 29.1.0

## 29.0.1

## 29.0.0

## 28.0.0

### Patch Changes

- [#2816](https://github.com/udecode/plate/pull/2816) by [@12joan](https://github.com/12joan) –
  - Remove `{ fn: ... }` workaround for jotai stores that contain functions

## 27.0.4

### Patch Changes

- [#2817](https://github.com/udecode/plate/pull/2817) by [@12joan](https://github.com/12joan) –
  - Fix the `onCommentAdd`, `onCommentUpdate` and `onCommentDelete` callbacks on CommentsProvider

## 27.0.3

## 27.0.0

### Major Changes

- [#2763](https://github.com/udecode/plate/pull/2763) by [@12joan](https://github.com/12joan) –
  - Migrate store to jotai@2
  - Revert the breaking changes to `@udecode/plate-comments` made in 26.0.0

## 26.0.0

### Major Changes

- [#2760](https://github.com/udecode/plate/pull/2760) by [@12joan](https://github.com/12joan) –
  - Renamed the `comments` prop on CommentsProvider to `initialComments` to reflect the fact that updating its value after the initial render has no effect
  - Removed the following props from CommentsProvider, since they represent the internal state of the comments plugin and should not be controlled externally:
    - `activeCommentId`
    - `addingCommentId`
    - `newValue`
    - `focusTextarea`
  - The following props on CommentsProvider can now be updated after the initial render (whereas prior to this version, doing so had no effect):
    - `myUserId`
    - `users`
    - `onCommentAdd`
    - `onCommentUpdate`
    - `onCommentDelete`

## 25.0.1

## 25.0.0

### Major Changes

- [#2725](https://github.com/udecode/plate/pull/2725) by [@EandrewJones](https://github.com/EandrewJones) – Remove `useCommentValue`, which was redundant with the hooks applied automatically in `CommentEditTextarea.tsx`.

## 24.5.2

## 24.4.0

### Minor Changes

- [#2675](https://github.com/udecode/plate/pull/2675) by [@zbeyens](https://github.com/zbeyens) – Support slate-react 0.99.0

## 24.3.6

## 24.3.5

## 24.3.2

## 24.3.1

## 24.3.0

## 24.2.0

## 24.0.2

## 24.0.1

## 24.0.0

## 23.7.4

## 23.7.0

## 23.6.0

## 23.3.1

## 23.3.0

## 22.1.0

### Patch Changes

- [#2518](https://github.com/udecode/plate/pull/2518) by [@12joan](https://github.com/12joan) – Remove comment node when new comment form is closed

- [#2520](https://github.com/udecode/plate/pull/2520) by [@12joan](https://github.com/12joan) – Return `hidden: true` from `useCommentAddButton` when `myUserId` is not set

## 22.0.2

## 22.0.1

## 22.0.0

### Major Changes

- [#2471](https://github.com/udecode/plate/pull/2471) by [@zbeyens](https://github.com/zbeyens) – Removed:
  - `AccountCircleIcon`
  - `CheckIcon`
  - `MoreVertIcon`
  - `RefreshIcon`
  - `AvatarImage`
  - `CommentLinkButton`
  - `CommentLinkDialog`
  - `CommentLinkDialogCloseButton`
  - `CommentLinkDialogCopyLink`
  - `CommentLinkDialogInput`
  - `PlateCommentLeaf` for `useCommentLeafState`

### Minor Changes

- ## [#2471](https://github.com/udecode/plate/pull/2471) by [@zbeyens](https://github.com/zbeyens) – New exports:

## 21.5.0

## 21.4.2

## 21.4.1

## 21.3.2

## 21.3.0

## 21.1.5

## 21.0.0

## 20.7.2

## 20.7.0

## 20.4.0

## 20.3.2

## 20.0.0

### Patch Changes

- [#2252](https://github.com/udecode/plate/pull/2252) by [@12joan](https://github.com/12joan) – Include `createdAt` and `userId` (if present) in comment passed to `onCommentAdd`

## 19.7.0

### Patch Changes

- [#2225](https://github.com/udecode/plate/pull/2225) by [@TomMorane](https://github.com/TomMorane) – fix: hotkey

## 19.5.0

### Minor Changes

- [#2202](https://github.com/udecode/plate/pull/2202) by [@zbeyens](https://github.com/zbeyens) – Replace onMouseDown by onClick. Add aria-label.

## 19.4.4

## 19.4.2

## 19.2.0

## 19.1.1

## 19.1.0

## 19.0.3

## 19.0.2

### Patch Changes

- [#2104](https://github.com/udecode/plate/pull/2104) by [@zbeyens](https://github.com/zbeyens) – Fixes #2103

## 19.0.1

## 19.0.0

### Patch Changes

- [#2097](https://github.com/udecode/plate/pull/2097) by [@zbeyens](https://github.com/zbeyens) –
  - Fixes #2050

## 18.15.0

## 18.13.0

### Minor Changes

- [#1829](https://github.com/udecode/plate/pull/1829) by [@osamatanveer](https://github.com/osamatanveer) –
  - new plugin: comments
