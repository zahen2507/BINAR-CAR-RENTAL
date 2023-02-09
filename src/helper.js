export const queryData = (data) => {
  const ret = [];

  for (const d in data) {
    let value = data[d];

    if (value) {
      ret.push(`${encodeURIComponent(d)}=${encodeURIComponent(value)}`)
    }
  }

  return ret.join("&")
};

export const currencyFormat = (x) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};