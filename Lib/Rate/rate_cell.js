import { Svg, Path } from "glamorous";

function RateCell(_props) {
  var _preflxCls = _props.preflxCls;

  var _renderIcon = function _renderIcon() {
    return React.createElement(
      "span",
      {},
      React.createElement(
        Svg,
        {
          viewBox: "64 64 896 896",
          width: "1em",
          height: "1em",
          fill: "currentColor",
        },
        React.createElement(Path, {
          d:
            "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z",
        })
      )
    );
  };

  var _renderFirst = function _renderFirst() {
    return React.createElement(
      "div",
      {
        className: "".concat(_preflxCls, "-star-first"),
      },
      _renderIcon()
    );
  };

  var _renderSecond = function _renderSecond() {
    return React.createElement(
      "div",
      {
        className: "".concat(_preflxCls, "-star-second"),
      },
      _renderIcon()
    );
  };

  var _renderStar = function _renderStar() {
    return React.createElement("div", {}, _renderFirst(), _renderSecond());
  };

  var _onMouseHover = function _onMouseHover(e) {
    var _props0 = _props,
      onMouseHover = _props0.onMouseHover;
    onMouseHover({});
  };

  var mouseEvent = {
    onMouseOver: _onMouseHover,
  };

  return React.createElement(
    "li",
    Object.assign(
      {},
      {
        className: "".concat(_preflxCls, "-star"),
      },
      mouseEvent
    ),
    _renderStar()
  );
}

RateCell.defaultProps = {
  preflxCls: "ui-rate",
};

var _default = RateCell;
export default _default;
