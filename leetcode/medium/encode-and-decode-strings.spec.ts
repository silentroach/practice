import { decode, encode } from "./encode-and-decode-strings";

it("works with empty array", () => {
  expect(decode(encode([]))).toEqual([]);
});

it("works fine with empty strings", () => {
  expect(decode(encode([""]))).toEqual([""]);
});

it("works fine with empty strings", () => {
  const data = ["test1", "test2", "longer string"];
  expect(decode(encode(data))).toEqual(data);
});
