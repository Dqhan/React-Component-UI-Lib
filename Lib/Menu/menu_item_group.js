var MenuItemGroup = function MenuItemGroup(_props) {
  var _preflxCls = _props.preflxCls,
    _children = _props.children,
    _title = _props.title;

  var _onClick = function _onClick(e) {
    e.preventDefault();
    _props.onClick(e);
  };

  var _mouseEvent = {
    onClick: _onClick,
  };

  var _renderTitle = function _renderTitle() {
    return React.createElement(
      "div",
      Object.assign(
        {},
        { className: "".concat(_preflxCls, "-group-cell-title") },
        _mouseEvent
      ),
      _title
    );
  };

  var groupCellProps = {};

  var _renderGroupContainer = function _renderGroupContainer() {
    return React.createElement(
      "ul",
      {
        className: "".concat(_preflxCls, "-group-cell-container"),
      },
      React.Children.map(_children, function (c, i) {
        return React.cloneElement(
          c,
          Object.assign({}, { key: i }, groupCellProps)
        );
      })
    );
  };

  return React.createElement(
    "li",
    {
      className: "".concat(_preflxCls, "-group-cell"),
    },
    _renderTitle(),
    _renderGroupContainer()
  );
};

MenuItemGroup.defaultProps = {
  preflxCls: "ui-menu",
};

var _default = MenuItemGroup;
export default _default;
