import React from "react";

import { FILTERS } from "../../../lib/constants";
import FilterCategory from "./filterCategory";
import "./filters.css";

const Filters = ({ onFilterApply, appliedFilters }) => {
  return (
    <div className="filters-container">
      <div className="filters-heading">Filters</div>
      {FILTERS.map((filterCategory) => (
        <FilterCategory
          options={filterCategory.options}
          label={filterCategory.label}
          name={filterCategory.name}
          key={filterCategory.name}
          onFilterApply={onFilterApply}
          appliedFilters={appliedFilters}
        />
      ))}
    </div>
  );
};

export default Filters;
