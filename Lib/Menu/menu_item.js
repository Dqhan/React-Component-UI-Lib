var Item = function Item(_props) {
  var _preflxCls = _props.preflxCls,
    _children = _props.children,
    _eventKey = _props.eventKey,
    _selectedKeys = _props.selectedKeys,
    _hoverKeys = _props.hoverKeys;

  var _selected = _selectedKeys.includes(_eventKey);
  var _hover = _hoverKeys.includes(_eventKey);

  var _onClick = function _onClick(e) {
    var _props1 = _props,
      onClick = _props1.onClick;
    e.preventDefault();
    onClick({
      key: _eventKey,
      domEvent: e,
    });
  };

  var _onSelected = function (e) {
    var _props4 = _props,
      onSelected = _props4.onSelected;
    onSelected({
      key: _eventKey,
      domEvent: e,
    });
  };

  var _onMouseEnter = function _onMouseEnter(e) {
    var _props2 = _props;
  };

  var _onMouseLeave = function _onMouseLeave(e) {
    var _props3 = _props;
  };

  var _onMouseOver = function _onMouseOver(e) {
    var _props5 = _props,
      onMouseOver = _props5.onMouseOver;
    onMouseOver({
      key: _eventKey,
      domEvent: e,
    })
  };

  var _onTitleClick = function _onTitleClick(e) {
    e.preventDefault();
    _onClick(e);
    _onSelected(e);
  };

  var _mouseEvent = {
    onClick: _onTitleClick,
    onMouseOver: _onMouseOver
  };

  var _renderTitle = function _renderTitle() {
    var titleClassName = "".concat(_preflxCls, "-item-cell-title");
    if (_selected) titleClassName = titleClassName.concat(" selected");
    if (_hover) titleClassName = titleClassName.concat(" hover");
    return React.createElement(
      "div",
      Object.assign(
        {},
        {
          className: titleClassName
        },
        _mouseEvent
      ),
      React.Children.map(_children, function (c) {
        return typeof c === "string"
          ? c
          : React.cloneElement(c, Object.assign({}));
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
