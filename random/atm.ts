export const atm = (
  banknotes: readonly number[],
  amount: number
): ReadonlyMap<number, number> => {
  const result = new Map<number, number>();

  for (const banknote of [...banknotes].sort(
    (value1, value2) => value2 - value1
  )) {
    const count = amount / banknote;
    if (count < 1) {
      continue;
    }

    const int = Math.trunc(count);
    amount -= int * banknote;

    result.set(banknote, int);
  }

  if (amount > 0) {
    throw new Error("Not enough banknotes");
  }

  return result;
};
