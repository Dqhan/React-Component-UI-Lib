var SubMenu = function SubMenu(_props) {
  var _preflxCls = _props.preflxCls,
    _children = _props.children,
    _title = _props.title;

  const _React$State = (0, React.useState)(true),
    _extend = _React$State[0],
    _setExtend = _React$State[1];

  var _renderIcon = function _renderIcon() {
    return React.createElement("div", {
      className:
        _extend === true
          ? "".concat(_preflxCls, "-icon fi-page-arrow-up-as")
          : "".concat(_preflxCls, "-icon fi-page-arrow-down-as"),
    });
  };

  var _refState = {};

  var _saveRef = function _saveRef(name) {
    return function (node) {
      _refState[name] = node;
    }
  }

  var _on0Click = function _on0Click(e) {
    e.preventDefault();
    typeof _children !== "undefined" && _setExtend(!_extend);
    _props.onClick(e);
  };

  var _on1Click = function _on1Click(e) {
    e.preventDefault();
    _props.onClick(e);
  }

  var _$0mouseEvent = {
    onClick: _on0Click,
  };

  var _$1mouseEvent = {
    onClick: _on1Click,
  };

  var _renderMenuTitle = function _renderMenuTitle() {

    return React.createElement(
      "div",
      Object.assign(
        {
          ref: _saveRef('title')
        },
        { className: "".concat(_preflxCls, "-cell-title") },
        _$0mouseEvent
      ),
      _title,
      _children && _renderIcon()
    );
  };

  var _renderMenuItme = function _renderMenuItme(c, i) {
    return React.cloneElement(c, Object.assign({}, _$1mouseEvent));
  };

  var _renderMenuCellContainer = function _renderMenuCellContainer() {
    return _extend === true
      ? React.createElement(
        "ul",
        {
          className: "".concat(_preflxCls, "-cell-container"),
        },
        React.Children.map(_children, function (c, i) {
          return _renderMenuItme(c, i);
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
