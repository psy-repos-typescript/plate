import {
  type Descendant,
  type TElement,
  type TText,
  getPluginKey,
  getPluginType,
  KEYS,
  TextApi,
} from 'platejs';

import type { unistLib } from '../types';
import type { SerializeMdOptions } from './serializeMd';

import { convertTextsSerialize } from './convertTextsSerialize';
import { listToMdastTree } from './listToMdastTree';
import { unreachable } from './utils';
import { getSerializerByKey } from './utils/getSerializerByKey';

export const convertNodesSerialize = (
  nodes: Descendant[],
  options: SerializeMdOptions
): unistLib.Node[] => {
  const mdastNodes: unistLib.Node[] = [];
  let textQueue: TText[] = [];

  const listBlock: TElement[] = [];

  for (let i = 0; i <= nodes.length; i++) {
    const n = nodes[i] as any;

    if (n && TextApi.isText(n)) {
      // Only add text nodes that pass the filtering
      if (shouldIncludeText(n, options)) {
        textQueue.push(n);
      }
    } else {
      if (textQueue.length > 0) {
        mdastNodes.push(
          ...(convertTextsSerialize(
            textQueue,
            options
          ) as any as unistLib.Node[])
        );
      }
      textQueue = [];
      if (!n) continue;

      // Skip this node if it doesn't pass the filtering
      if (!shouldIncludeNode(n, options)) {
        continue;
      }

      const pType = getPluginType(options.editor!, KEYS.p) ?? KEYS.p;

      if (n?.type === pType && 'listStyleType' in n) {
        listBlock.push(n);

        const next = nodes[i + 1] as TElement;
        const isNextIndent =
          next && next.type === pType && 'listStyleType' in next;

        if (!isNextIndent) {
          mdastNodes.push(listToMdastTree(listBlock as any, options));
          listBlock.length = 0;
        }
      } else {
        const node = buildMdastNode(n, options);

        if (node) {
          mdastNodes.push(node as unistLib.Node);
        }
      }
    }
  }

  return mdastNodes;
};

export const buildMdastNode = (node: any, options: SerializeMdOptions) => {
  const editor = options.editor!;

  let key = getPluginKey(editor, node.type) ?? node.type;

  if (KEYS.heading.includes(key)) {
    key = 'heading';
  }

  if (key === KEYS.olClassic || key === KEYS.ulClassic) {
    key = 'list';
  }

  const nodeParser = getSerializerByKey(key, options);

  if (nodeParser) {
    return nodeParser(node, options);
  }

  unreachable(node);
};

const shouldIncludeText = (
  text: TText,
  options: SerializeMdOptions
): boolean => {
  const { allowedNodes, allowNode, disallowedNodes } = options;

  // First check allowedNodes/disallowedNodes
  if (
    allowedNodes &&
    disallowedNodes &&
    allowedNodes.length > 0 &&
    disallowedNodes.length > 0
  ) {
    throw new Error('Cannot combine allowedNodes with disallowedNodes');
  }

  // Check text properties against allowedNodes/disallowedNodes
  for (const [key, value] of Object.entries(text)) {
    if (key === 'text') continue;

    if (allowedNodes) {
      // If allowedNodes is specified, only include if the mark is in allowedNodes
      if (!allowedNodes.includes(key) && value) {
        return false;
      }
    } else if (disallowedNodes?.includes(key) && value) {
      // If using disallowedNodes, exclude if the mark is in disallowedNodes
      return false;
    }
  }

  // Finally, check allowNode if provided
  if (allowNode?.serialize) {
    return allowNode.serialize(text);
  }

  return true;
};

const shouldIncludeNode = (
  node: TElement,
  options: SerializeMdOptions
): boolean => {
  const { allowedNodes, allowNode, disallowedNodes } = options;

  if (!node.type) return true;

  // First check allowedNodes/disallowedNodes
  if (
    allowedNodes &&
    disallowedNodes &&
    allowedNodes.length > 0 &&
    disallowedNodes.length > 0
  ) {
    throw new Error('Cannot combine allowedNodes with disallowedNodes');
  }

  if (allowedNodes) {
    // If allowedNodes is specified, only include if the type is in allowedNodes
    if (!allowedNodes.includes(node.type)) {
      return false;
    }
  } else if (disallowedNodes?.includes(node.type)) {
    // If using disallowedNodes, exclude if the type is in disallowedNodes
    return false;
  }

  // Finally, check allowNode if provided
  if (allowNode?.serialize) {
    return allowNode.serialize(node);
  }

  return true;
};
