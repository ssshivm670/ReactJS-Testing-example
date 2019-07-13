import React from "react";
import Foo from "./Foo";
import { shallow } from "enzyme";
import { expect } from "chai";

// import "../setupTests.js";
describe("testing App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Foo />);
  });

  it("includes 1 div with class name as foo ", () => {
    wrapper = shallow(<Foo />);
    expect(wrapper.find("div.foo")).to.have.length(1);
    // expect(wrapper.find("div.foo")).to.have.;
  });

  // it("includes a H1 with Hello Code Sandbox text", () => {
  //   expect(wrapper.find("h1").text()).to.be.equal("Hello Code Sandbox");
  // });
});
