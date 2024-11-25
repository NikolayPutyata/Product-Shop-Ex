import { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectTotalProducts } from "../../redux/selectors";

const PaginationControls = ({ setSearchParams, currentSkip }) => {
  const total = useSelector(selectTotalProducts);
  const limit = 12;
  const previousDisabledCondition = currentSkip === 0;
  const nextDisabledCondition = currentSkip + limit >= total;

  const handlePrevious = useCallback(() => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("skip", currentSkip - 12);
      return newParams;
    });
  }, [currentSkip, setSearchParams]);

  const handleNext = useCallback(() => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("skip", currentSkip + 12);
      return newParams;
    });
  }, [currentSkip, setSearchParams]);

  return (
    <div className="flex justify-center mt-5 mb-5">
      <div className="join grid grid-cols-2 gap-4 w-auto">
        <button
          className={`join-item btn btn-outline btn-md ${
            previousDisabledCondition
              ? "disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300"
              : ""
          }`}
          onClick={handlePrevious}
          disabled={previousDisabledCondition}
        >
          Previous page
        </button>
        <button
          className={`join-item btn btn-outline btn-md ${
            nextDisabledCondition
              ? "disabled:bg-gray-100 disabled:text-gray-500 disabled:border-gray-300"
              : ""
          }`}
          onClick={handleNext}
          disabled={nextDisabledCondition}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
