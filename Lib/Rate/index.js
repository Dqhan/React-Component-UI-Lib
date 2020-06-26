require("./style");

import RateCell from "./rate_cell";

function Rate(_props) {
  var _preflxCls = _props.preflxCls,
    _count = _props.count;

  var elements = {};

  const _React$State = React.useState(0),
    _hoverValue = _React$State[0],
    _setHoverValue = _React$State[1];

  const clearIndex = React.useRef(0);

  var _getStarValue = function _getStarValue(index, x) {
    var value = index + 1;
    var ele = elements[index],
      left = ele.offsetLeft,
      width = ele.clientWidth;

    if (x - left < width / 2) value -= 0.5;
    // if (x - offsetLeft < width / 2) value -= 0.5;

    return value;
  };

  var _onMouseHover = function _onMouseHover(info) {
    var event = info.domEvent,
      index = info.index;

    if (index === undefined) {
      (0, _setHoverValue)(clearIndex.current);
    } else {
      var hoverValue = (0, _getStarValue)(index, event.pageX);
      clearIndex.current = hoverValue;
      (0, _setHoverValue)(hoverValue);
    }
  };

  var startProps = {
    hoverValue: _hoverValue,
  };

  var mouseEvent = {
    onMouseHover: _onMouseHover,
  };

  var _saveRef = function _saveRef(name) {
    return function (node) {
      elements[name] = node;
    };
  };

  var _renderStar = function _renderStar() {
    var result = [];
    for (var i = 0; i < _count; i++) {
      result.push(
        React.createElement(
          RateCell,
          Object.assign(
            {},
            { key: i, index: i, ref: _saveRef(i) },
            startProps,
            mouseEvent
          )
        )
      );
    }
    return result;
  };

  var base = 255 / _count;

  var rateStyle = {
    color: `rgb(255, ${base * (_count - _hoverValue + 1)}, 0)`,
    // color: "rgb(255,255,0)",
  };

  return React.createElement(
    "ul",
    {
    //   style: rateStyle,
      className: "".concat(_preflxCls),
    },
    _renderStar()
  );
}

Rate.defaultProps = {
  preflxCls: "ui-rate",
  count: 5,
};

var _default = Rate;
export default _default;
