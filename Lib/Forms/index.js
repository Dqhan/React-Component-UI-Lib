require("./style");

import Field from "./field";
import Form from "./form";

function Forms(props) {
  var _preflxCls = props.preflxCls;
  return React.createElement(
    "div",
    { className: "".concat(_preflxCls) },
    React.createElement(Field),
    React.createElement(Form)
  );
}

Forms.defaultProps = {
  preflxCls: "ui-forms",
};
var _default = Forms;
export default _default;
