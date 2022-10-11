/**
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 *
 * Implement Trie (Prefix Tree)
 */

// interface is predefined
interface ITrie {
  insert(word: string): void;
  search(word: string): boolean;
  startsWith(prefix: string): boolean;
}

class Node {
  public terminal = false;
  public children?: Map<string, Node>;
}

export class Trie implements ITrie {
  private readonly root: Node;

  constructor() {
    this.root = new Node();
  }

  public insert(word: string): void {
    let node = this.root;
    let idx = 0;
    const chars = [...word];
    const length = chars.length;

    // walk through existing nodes
    while (idx < length && node.children !== undefined) {
      const char = chars[idx];

      const child = node.children.get(char);
      if (child !== undefined) {
        node = child;
      } else {
        break;
      }

      ++idx;
    }

    // adding new nodes
    while (idx < length) {
      const char = chars[idx];

      const child = new Node();

      if (node.children === undefined) {
        node.children = new Map([[char, child]]);
      } else {
        node.children.set(char, child);
      }

      node = child;
      ++idx;
    }

    node.terminal = true;
  }

  private getNodeByPrefix(prefix: string): Node | undefined {
    let node = this.root;
    let idx = 0;
    const chars = [...prefix];
    const length = chars.length;

    // walk through existing nodes
    while (idx < length && node.children !== undefined) {
      const char = chars[idx];

      const child = node.children.get(char);
      if (child !== undefined) {
        node = child;
      } else {
        break;
      }

      ++idx;
    }

    if (idx !== length) {
      return;
    }

    return node;
  }

  public search(word: string): boolean {
    const node = this.getNodeByPrefix(word);
    return Boolean(node?.terminal);
  }

  public startsWith(prefix: string): boolean {
    return Boolean(this.getNodeByPrefix(prefix));
  }
}
