const moneyColumns = ['spend', 'cpr'];

export function formatCurrency(number) {
  return `$${formatNumber(number)}`;
}

export function formatNumber(number) {
  // if float, limit to 2 decimal places
  if (Number(number) && number % 1 !== 0) return number.toFixed(2);

  return number;
}

export function formatColumnData(col, value) {
  if (moneyColumns.includes(col)) {
    return formatCurrency(value);
  }
  return formatNumber(value);
}