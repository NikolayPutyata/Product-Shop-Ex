const Filters = ({ currentCategory, setSearchParams }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSearchParams({ category: selectedCategory });
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
    </div>
  );
};

export default Filters;
