var SubMenu = function SubMenu(_props) {
  var _preflxCls = _props.preflxCls,
    _children = _props.children,
    _title = _props.title,
    _eventKey = _props.eventKey,
    _selectedKeys = _props.selectedKeys;

  var _selected = _selectedKeys.includes(_eventKey);
  const _React$State = (0, React.useState)(true),
    _extend = _React$State[0],
    _setExtend = _React$State[1];

  // var _extend = _extendKeys.includes(_eventKey);

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
    };
  };

  var _onSelected = function (info) {
    var _props5 = _props,
      onSelected = _props5.onSelected;
    onSelected({
      key: info.key,
      domEvent: info.domEvent,
    });
  };

  var _onTitleClick = function _onTitleClick(e) {
    e.preventDefault();

    _onClick({
      key: _eventKey,
      domEvent: e,
    });

    _onSelected({
      key: _eventKey,
      domEvent: e,
    });

    typeof _children !== "undefined" && _setExtend(!_extend);
  };

  var _onClick = function _onClick(info) {
    var _props1 = _props,
      onClick = _props1.onClick;
    onClick({
      key: info.key,
      domEvent: info.domEvent,
    });
  };

  var _onMouseEnter = function _onMouseEnter(e) {
    var _props2 = _props;
  };

  var _onMouseLeave = function _onMouseLeave(e) {
    var _props3 = _props;
  };

  var _onMouseHover = function _onMouseHover(e) { };

  var _titleMouseEvent = {
    onClick: _onTitleClick,
    onMouseEnter: _onMouseEnter,
    onMouseLeave: _onMouseLeave,
  };

  var _renderMenuTitle = function _renderMenuTitle() {
    return React.createElement(
      "div",
      Object.assign(
        {
          ref: _saveRef("title"),
        },
        {
          className: _selected
            ? "".concat(_preflxCls, "-cell-title selected")
            : "".concat(_preflxCls, "-cell-title"),
        },
        _titleMouseEvent
      ),
      _title,
      _children && _renderIcon()
    );
  };

  var _mouseEvent = {
    onClick: _onClick,
    onSelected: _onSelected,
    onMouseHover: _onMouseHover,
    onMouseEnter: _onMouseEnter,
  };

  var _menuGroupProps = {
    selectedKeys: _selectedKeys,
  };

  var _renderMenuItme = function _renderMenuItme(c, i) {
    return React.cloneElement(
      c,
      Object.assign({}, _menuGroupProps, _mouseEvent)
    );
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
      style: { paddingLeft: 15 + "px" },
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
