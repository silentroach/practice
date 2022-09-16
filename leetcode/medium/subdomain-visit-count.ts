/**
 * https://leetcode.com/problems/subdomain-visit-count/
 *
 * A website domain "discuss.leetcode.com" consists of various subdomains.
 * At the top level, we have "com", at the next level, we have "leetcode.com"
 * and at the lowest level, "discuss.leetcode.com". When we visit a domain like
 * "discuss.leetcode.com", we will also visit the parent domains "leetcode.com"
 * and "com" implicitly.
 *
 * A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3"
 * or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is
 * the domain itself.
 */

export const subdomainVisits = (cpdomains: string[]): string[] => {
  const counter: Map<string, number> = new Map();

  for (const item of cpdomains) {
    const [rawCount, domain] = item.split(" ");
    const count = Number(rawCount);

    const splitted = domain.split(".");
    for (let i = splitted.length - 1; i >= 0; --i) {
      const merged = splitted.slice(i).join(".");
      counter.set(merged, (counter.get(merged) ?? 0) + count);
    }
  }

  return Array.from(counter, ([domain, count]) => [count, domain].join(" "));
};
