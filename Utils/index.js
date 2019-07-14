// import CheckPropTypes from "check-prop-types";
import checkPropTypes from "check-prop-types";

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propType,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

export const findByAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
