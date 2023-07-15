// sample:

// 0 are yo
// 1 you u
// 2 how nhoware
// 3 alan arala
// 4 dear de

// 4 (dear + de)
// 3 (alan + arala)
// 2 (how + nhoware)
// 0 (are + yo)
// 1 (you + u)

// important: (indexes will be not repeated in sequence)
// i ≠ j
// s[i] ≠ s[j]

const build = (pairs, seq) => seq.map((idx) => pairs[idx][0]).join("");

const solve = (
  /* original */ pairs,
  /* can use */ indexes,
  used = [],
  leftTail = "",
  rightTail = "",
  depth = 0,
) => {
  const results = [];

  for (const idx of indexes) {
    const pair = pairs[idx];

    const newLeft = [leftTail, pair[0]].join("");
    const newRight = [rightTail, pair[1]].join("");

    if (newLeft === newRight) {
      results.push(build(pairs, used.concat(idx)));
      return results;
    }

    const ll = newLeft.length;
    const rl = newRight.length;

    if (
      ll >= rl
        ? newLeft.slice(0, rl) === newRight
        : newRight.slice(0, ll) === newLeft
    ) {
      for (const solution of solve(
        pairs,
        indexes.filter((index) => index !== idx),
        used.concat(idx),
        ll > rl ? newLeft.slice(rl) : "",
        rl > ll ? newRight.slice(ll) : "",
        depth + 1,
      )) {
        results.push(solution);
      }
    }
  }

  return results;
};

const getPairScore = ([left, right]) => {
  if (left.startsWith(right) || right.startsWith(left)) {
    // candidate for start position
    return 1;
  }

  return 0;
};

const getPairScoreCached = (cache, pair) => {
  let score = cache.get(pair);
  if (score === undefined) {
    score = getPairScore(pair);
    cache.set(pair, score);
  }

  return score;
};

exports.processCase = (pairs) => {
  const cache = new Map();

  pairs.sort((pair1, pair2) => {
    const diff =
      getPairScoreCached(cache, pair2) - getPairScoreCached(cache, pair1);

    return diff === 0 ? pair1[0].localeCompare(pair2[0]) : diff;
  });

  return solve(
    pairs,
    pairs.map((_, idx) => idx),
  ).sort((a, b) => a.length - b.length || a.localeCompare(b))[0];
};
