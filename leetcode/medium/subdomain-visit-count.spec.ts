import { subdomainVisits } from "./subdomain-visit-count";

it("returns empty list on empty input", () => {
  expect(subdomainVisits([])).toEqual([]);
});

it("returns simple entry as is", () => {
  expect(subdomainVisits(["900 com"])).toEqual(["900 com"]);
});

it("split domain into multiple", () => {
  expect(subdomainVisits(["900 mail.com"])).toEqual([
    "900 com",
    "900 mail.com",
  ]);
});

it("passes example 1", () => {
  expect(
    subdomainVisits([
      "900 google.mail.com",
      "50 yahoo.com",
      "1 intel.mail.com",
      "5 wiki.org",
    ])
  ).toMatchInlineSnapshot(`
    [
      "951 com",
      "901 mail.com",
      "900 google.mail.com",
      "50 yahoo.com",
      "1 intel.mail.com",
      "5 org",
      "5 wiki.org",
    ]
  `);
});
