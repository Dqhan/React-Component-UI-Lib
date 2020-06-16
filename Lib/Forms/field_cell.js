import Button from "../Button";

function FieldCell(_props) {
  var _text = _props.text,
    _preflxCls = _props.preflxCls,
    _handleCellClick = _props.handleCellClick;

  var _onClick = function _onClick(e) {
    typeof _handleCellClick === "function" && _handleCellClick(e);
  };
  return React.createElement(
    Button,
    {
      className: "".concat(_preflxCls, "-field-cell"),
      onClick: _onClick,
    },
    _text
  );
}

FieldCell.defaultProps = {
  preflxCls: "ui-forms",
  handleCellClick: null,
  text: "please input a name",
};

var _default = FieldCell;
export default _default;
