export const parseSorters = (sorters) => {
  switch (sorters) {
    case "high-rating":
      return { sortBy: "rating", order: "desc" };
    case "low-rating":
      return { sortBy: "rating", order: "asc" };
    case "high-price":
      return { sortBy: "price", order: "desc" };
    case "low-price":
      return { sortBy: "price", order: "asc" };
    default:
      return {};
  }
};
