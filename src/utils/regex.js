export const formatMoney = (value) => {
  return parseFloat(value)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const formatDot = (value) => {
  return value.replace(',', '.');
};

export const formatInputMask = (value) => {
  return value.replace(/[^\d]+/g, '') / 100;
};
