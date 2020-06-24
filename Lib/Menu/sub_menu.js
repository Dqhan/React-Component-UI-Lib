var SubMenu = function SubMenu(_props) {
  var _preflxCls = _props.preflxCls,
    _children = _props.children,
    _title = _props.title,
    _eventKey = _props.eventKey,
    _selectedKeys = _props.selectedKeys,
    _hoverKeys = _props.hoverKeys;

  var _selected = _selectedKeys.includes(_eventKey);
  var _hover = _hoverKeys.includes(_eventKey);

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

  var _onMouseOver = function _onMouseOver(info) {
    var _props5 = _props,
      onMouseOver = _props5.onMouseOver;
    onMouseOver({
      key: info.key,
      domEvent: info.domEvent,
    });
  };

  var _onTitleMouseOver = function _onTitleMouseOver(e) {
    e.preventDefault();
    var _props6 = _props,
      onMouseOver = _props6.onMouseOver;
    onMouseOver({
      key: _eventKey,
      domEvent: e,
    });
  }

  var _titleMouseEvent = {
    onClick: _onTitleClick,
    onMouseOver: _onTitleMouseOver,
    onMouseLeave: _onMouseLeave,
  };

  var _renderMenuTitle = function _renderMenuTitle() {

    var titleClassName = "".concat(_preflxCls, "-cell-title");
    if (_selected) titleClassName = titleClassName.concat(" selected");
    if (_hover) titleClassName = titleClassName.concat(" hover");

    return React.createElement(
      "div",
      Object.assign(
        {
          ref: _saveRef("title"),
        },
        {
          className: titleClassName
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
    onMouseOver: _onMouseOver,
    onMouseEnter: _onMouseEnter,
  };

  var _menuGroupProps = {
    selectedKeys: _selectedKeys,
    hoverKeys: _hoverKeys
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
