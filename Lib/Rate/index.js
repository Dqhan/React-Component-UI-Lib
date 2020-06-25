require("./style");

import RateCell from "./rate_cell";

function Rate(_props) {
  var _preflxCls = _props.preflxCls;

  var _renderStar = function _renderStar() {
    var result = [];
    for (var i = 0; i < 5; i++) {
      result.push(React.createElement(RateCell));
    }
    return result;
  };

  return React.createElement(
    "ul",
    {
      className: "".concat(_preflxCls),
    },
    _renderStar()
  );
}

Rate.defaultProps = {
  preflxCls: "ui-rate",
};

var _default = Rate;
export default _default;
