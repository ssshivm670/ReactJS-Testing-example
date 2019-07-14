import React from "react";
import Headline from "./index";
import { shallow } from "enzyme";

import { findByAttr, checkProps } from "./../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  describe("Have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };

      wrapper = setUp(props);
    });
    it("Should render without errors", () => {
      const component = findByAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("Should render a H1", () => {
      const h1 = findByAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("Shuold render a desc", () => {
      const desc = findByAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });
  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = findByAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });

  describe("Checking PropType", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test description",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 24,
            onlineStatus: true
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
