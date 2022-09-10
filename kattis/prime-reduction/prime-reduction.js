// endless factors generator
// 2, 3, 5, 7, 11, ...
function* factors() {
  yield 2;

  let factor = 3;
  yield factor;

  while (true) {
    // even number are always dividable by 2
    factor += 2;
    yield factor;
  }
}

// generator for all prime factors for value
function* primeFactors(value) {
  // value will only have a factor greater than its square root
  // if that factor has a partner which is less than the square root,
  // so we can limit search with it.
  let limit = Math.trunc(Math.sqrt(value));

  // check factors before limit: 2, 3, 5, ... limit
  for (const factor of factors()) {
    while (value % factor === 0) {
      yield factor;
      value /= factor;

      limit = Math.trunc(Math.sqrt(value));
    }

    if (factor > limit) {
      if (value > 1) {
        yield value;
      }

      break;
    }
  }
}

const getPrimeFactorsSum = (value) => {
  let sum = 0;
  for (const factor of primeFactors(value)) {
    sum += factor;
  }

  return sum;
};

const primeFactorsSumCache = new Map();

const getPrimeFactorsSumCached = (value) => {
  let sum = primeFactorsSumCache.get(value);
  if (sum === undefined) {
    sum = getPrimeFactorsSum(value);
    primeFactorsSumCache.set(value, sum);
  }

  return sum;
};

// prime reduction for x:
// x = x is prime
//   ? x
//   : reduction(sum(x prime factors))

exports.primeReduction = (value) => {
  let reduceCount = 0;

  while (true) {
    ++reduceCount;

    const sum = getPrimeFactorsSumCached(value);
    if (sum === value) {
      return [sum, reduceCount];
    }

    value = sum;
  }
};
