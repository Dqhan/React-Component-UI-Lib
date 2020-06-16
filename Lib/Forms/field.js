var _inherits = require("babel-runtime/helpers/inherits");

import FieldCell from "./field_cell";

var Field = (function Field(_React$Component) {
  (0, _inherits["default"])(Field, _React$Component);

  function Field(_o) {
    this._preflxCls = _o.preflxCls;

    this.renderInputCell = function () {
      var _arr = ["Textbox", "Name", "Date", "Email"];
      return _arr.map((a, index) => {
        return React.createElement(FieldCell, {
          key: "".concat("field-input-key-", index),
          text: a,
        });
      });
    };

    this.renderInput = function () {
      return React.createElement(
        "div",
        {
          className: "".concat(this._preflxCls, "-field-input"),
        },
        React.createElement("h4", {}, "Input"),
        this.renderInputCell()
      );
    };

    this.renderLayoutCell = function () {
      var _arr = ["Content", "Section"];
      return _arr.map((a, index) => {
        return React.createElement(FieldCell, {
          key: "".concat("field-layout-key-", index),
          text: a,
        });
      });
    };

    this.renderLayout = function () {
      return React.createElement(
        "div",
        {
          className: "".concat(this._preflxCls, "-field-layout"),
        },
        React.createElement("h4", {}, "Layout"),
        this.renderLayoutCell()
      );
    };
  }

  Field.prototype.render = function () {
    return React.createElement(
      "div",
      {
        className: "".concat(this._preflxCls, "-field"),
      },
      React.createElement("h3", {}, "Add Field"),
      this.renderInput(),
      this.renderLayout()
    );
  };

  return Field;
})(React.Component);

Field.defaultProps = {
  preflxCls: "ui-forms",
};

var _default = Field;
export default _default;
