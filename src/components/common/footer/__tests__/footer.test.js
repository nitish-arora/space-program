import React from "react";
import { shallow } from "enzyme";
import Footer from "..";

describe("Footer", () => {
  it("should render", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(".app-footer")).toBeDefined();
  });
});
