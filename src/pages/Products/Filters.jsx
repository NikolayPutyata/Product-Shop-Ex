const Filters = ({ currentCategory, currentSorters, setSearchParams }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSearchParams((prevParams) => ({
      ...Object.fromEntries(prevParams.entries()),
      category: selectedCategory,
      skip: 0,
    }));
  };

  const handleSortersChange = (event) => {
    const selectedSorters = event.target.value;
    setSearchParams((prevParams) => ({
      ...Object.fromEntries(prevParams.entries()),
      sorters: selectedSorters,
    }));
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center mt-4 mb-6 md:flex-row md:justify-end md:pr-10 md:gap-6">
      <select
        id="category"
        value={currentCategory}
        onChange={handleCategoryChange}
        className="select w-full max-w-[300px] md:max-w-[250px] border border-black"
      >
        <option value="all">All category</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="furniture">Furniture</option>
        <option value="groceries">Groceries</option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">Smartphones</option>
        <option value="sports-accessories">Sports accessories</option>
        <option value="sunglasses">Sunglasses</option>
        <option value="tablets">Tablets</option>
        <option value="vehicle">Vehicle</option>
      </select>

      <select
        id="sorters"
        className="select w-full max-w-[300px] md:max-w-[250px] border border-black"
        value={currentSorters}
        onChange={handleSortersChange}
      >
        <option value="none">No sorters</option>
        <option value="high-rating">High rating</option>
        <option value="low-rating">Low rating</option>
        <option value="high-price">High price</option>
        <option value="low-price">Low price</option>
      </select>
    </div>
  );
};

export default Filters;
