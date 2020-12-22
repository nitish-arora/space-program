import React from "react";
import classNames from "classnames";

import "./filterCategory.css";

const FilterCategory = ({
  options,
  label,
  name,
  onFilterApply,
  appliedFilters
}) => {
  return (
    <div className="filter-category-container">
      <div className="filter-category-title">{label}</div>
      <div className="filter-options">
        {options.map((option) => (
          <button
            className={classNames("filter-option", {
              "filter-active": appliedFilters[name] === option
            })}
            onClick={() => onFilterApply(name, option)}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(FilterCategory);
