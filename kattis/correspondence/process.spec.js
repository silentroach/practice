const { processCase } = require("./process");

it("dear alan how are you", () => {
  expect(
    processCase([
      ["are", "yo"],
      ["you", "u"],
      ["how", "nhoware"],
      ["alan", "arala"],
      ["dear", "de"],
    ])
  ).toBe("dearalanhowareyou");
});

it("impossible case", () => {
  expect(
    processCase([
      ["a", "ab"],
      ["b", "bb"],
      ["c", "cc"],
    ])
  ).toBeUndefined();
});
