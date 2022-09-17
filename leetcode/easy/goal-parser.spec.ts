import { interpret } from "./goal-parser";

it("works", () => {
  expect(interpret("G()(al)")).toBe("Goal");
  expect(interpret("(al)G(al)()()G")).toBe("alGalooG");
});
