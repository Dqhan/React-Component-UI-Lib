var SubMenu = function SubMenu(_props) {
  var _preflxCls = _props.preflxCls,
    _children = _props.children,
    _title = _props.title;

  const [_extend, _setExtend] = React.useState(true);

  var _renderIcon = function _renderIcon() {
    return React.createElement("div", {
      className:
        _extend === true
          ? "".concat(_preflxCls, "-icon fi-page-arrow-up-as")
          : "".concat(_preflxCls, "-icon fi-page-arrow-down-as"),
    });
  };

  var _onClick = function _onClick(e) {
    e.preventDefault();
    typeof _children !== "undefined" && _setExtend(!_extend);
    _props.onClick(e);
  };

  var _renderMenuTitle = function _renderMenuTitle() {
    var mouseEvent = {
      onClick: _onClick,
    };

    return React.createElement(
      "div",
      Object.assign(
        {},
        { className: "".concat(_preflxCls, "-cell-title") },
        mouseEvent
      ),
      _title,
      _children && _renderIcon()
    );
  };

  var _renderMenuTime = function _renderMenuTime(c, i) {
    return React.cloneElement(c);
  };

  var _renderMenuCellContainer = function _renderMenuCellContainer() {
    return _extend === true
      ? React.createElement(
          "ul",
          {
            className: "".concat(_preflxCls, "-cell-container"),
          },
          React.Children.map(_children, function (c, i) {
            return _renderMenuTime(c, i);
          })
        )
      : null;
  };

  return React.createElement(
    "li",
    {
      className: "".concat(_preflxCls, "-cell"),
    },
    _renderMenuTitle(),
    _children && _renderMenuCellContainer()
  );
};

SubMenu.defaultProps = {
  preflxCls: "ui-menu",
  onClick: null,
};

var _default = SubMenu;
export default _default;
