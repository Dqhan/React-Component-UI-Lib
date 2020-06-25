var MenuItemGroup = function MenuItemGroup(_props) {
  var _preflxCls = _props.preflxCls,
    _children = _props.children,
    _title = _props.title,
    _selectedKeys = _props.selectedKeys,
    _hoverKeys = _props.hoverKeys;

  var _renderTitle = function _renderTitle() {
    return React.createElement(
      "div",
      Object.assign(
        {},
        {
          className: "".concat(_preflxCls, "-group-cell-title"),
        }
      ),
      _title
    );
  };

  var _mouseEvent = {
    onClick: _props.onClick,
    onSelected: _props.onSelected,
    onMouseHover: _props.onMouseHover,
  };

  var groupCellProps = {
    selectedKeys: _selectedKeys,
    hoverKeys: _hoverKeys,
  };

  var _renderGroupContainer = function _renderGroupContainer() {
    return React.createElement(
      "ul",
      { className: "".concat(_preflxCls, "-group-cell-container") },
      React.Children.map(_children, function (c, i) {
        return React.cloneElement(
          c,
          Object.assign({}, groupCellProps, { eventKey: c.key }, _mouseEvent)
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
