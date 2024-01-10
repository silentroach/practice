import { fullJustify } from "./text-justification";

it("example 1", () => {
  expect(
    fullJustify(
      ["This", "is", "an", "example", "of", "text", "justification."],
      16
    )
  ).toMatchInlineSnapshot(`
    [
      "This    is    an",
      "example  of text",
      "justification.  ",
    ]
  `);
});

it("example 2", () => {
  expect(
    fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
  ).toMatchInlineSnapshot(`
    [
      "What   must   be",
      "acknowledgment  ",
      "shall be        ",
    ]
  `);
});

it("example 3", () => {
  expect(
    fullJustify(
      [
        "Science",
        "is",
        "what",
        "we",
        "understand",
        "well",
        "enough",
        "to",
        "explain",
        "to",
        "a",
        "computer.",
        "Art",
        "is",
        "everything",
        "else",
        "we",
        "do",
      ],
      20
    )
  ).toMatchInlineSnapshot(`
    [
      "Science  is  what we",
      "understand      well",
      "enough to explain to",
      "a  computer.  Art is",
      "everything  else  we",
      "do                  ",
    ]
  `);
});
