import { Trie } from "./implement-trie";

it("just works", () => {
  const trie = new Trie();
  trie.insert("some");
  trie.insert("osome");
  trie.insert("osole");

  expect(trie.search("some")).toBe(true);
  expect(trie.search("som")).toBe(false);
  expect(trie.startsWith("som")).toBe(true);
  expect(trie.startsWith("some")).toBe(true);
  expect(trie.startsWith("somes")).toBe(false);
  expect(trie.startsWith("super")).toBe(false);
});
