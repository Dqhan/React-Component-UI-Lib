var Item = function Item(_props) {
  var _preflxCls = _props.preflxCls,
    _children = _props.children;

  var _style = {
    paddingLeft: "5px",
  };

  var _onClick = function _onClick(e) {
    e.preventDefault();
    _props.onClick(e);
  };

  var mouseEvent = {
    onClick: _onClick,
  };

  var _renderTitle = function _renderTitle() {
    return React.createElement(
      "div",
      Object.assign(
        {},
        {
          className: "".concat(_preflxCls, "-item-cell-title"),
          style: _style,
        },
        mouseEvent
      ),
      React.Children.map(_children, function (c, i) {
        return typeof c === "string" ? c : React.cloneElement(c, { key: i });
      })
    );
  };

  return React.createElement(
    "li",
    {
      className: "".concat(_preflxCls, "-item-cell"),
    },
    _renderTitle()
  );
};

Item.defaultProps = {
  preflxCls: "ui-menu",
};

var _default = Item;
export default _default;
