export const sortItems = (data, sortMethod) => {
  if (sortMethod === "name-asc") {
    return Object.entries(data)
      .sort((a, b) => a[1].item_name.localeCompare(b[1].item_name))
      .map((item) => item[1]);
  } else if (sortMethod === "name-desc") {
    return Object.entries(data)
      .sort((a, b) => b[1].item_name.localeCompare(a[1].item_name))
      .map((item) => item[1]);
  } else if (sortMethod === "price-asc") {
    return Object.entries(data)
      .sort((a, b) => Number(a[1].item_price.substring(1)) - Number(b[1].item_price.substring(1)))
      .map((item) => item[1]);
  } else {
    return Object.entries(data)
      .sort((a, b) => Number(b[1].item_price.substring(1)) - Number(a[1].item_price.substring(1)))
      .map((item) => item[1]);
  }
};
