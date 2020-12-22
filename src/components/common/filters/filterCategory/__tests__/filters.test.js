import React from "react";
import { shallow, mount } from "enzyme";
import FilterCategory from "..";

const defaultProps = {
  options: ["a", "b"],
  label: "lable",
  name: "name",
  onFilterApply: jest.fn(),
  appliedFilters: {
    name: "a"
  }
};

const shallowSetup = (args) => {
  const props = { ...defaultProps, ...args };
  const wrapper = shallow(<FilterCategory {...props} />);
  return { props, wrapper };
};

describe("FilterCategory", () => {
  it("filter options shoul de defined", () => {
    const { wrapper } = shallowSetup();
    expect(wrapper.find(".filter-options")).toBeDefined();
  });

  it("two options should be defined", () => {
    const { wrapper } = shallowSetup();
    expect(wrapper.find(".filter-option").length).toBe(2);
  });
});
