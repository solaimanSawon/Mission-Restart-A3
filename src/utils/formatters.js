export const formatCompactNumber = (value) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(value);

export const formatLongNumber = (value) =>
  new Intl.NumberFormat("en").format(value);
