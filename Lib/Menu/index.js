require("./style");
import SubMenu from "./sub_menu";
import MenuItemGroup from "./menu_item_group";
import Item from "./menu_item";
import Content from "./menu_content";

function Menu(_props) {
  let _preflxCls = _props.preflxCls,
    _children = _props.children,
    _defaultKey = _props.defaultKey;

  const _keyRef = React.useRef({
    selectedKeys: [_defaultKey],
    hoverKeys: [],
  });

  const _React$State1 = (0, React.useState)(true),
    _selectedFlag = _React$State1[0],
    _setselectedFlag = _React$State1[1];

  const _React$State2 = (0, React.useState)(true),
    _hoverFlag = _React$State2[0],
    _setHoverFlag = _React$State2[1];

  var _updateSelectedKeys = function _updateSelectedKeys(info) {
    _keyRef.current.selectedKeys.length = 0;
    _keyRef.current.selectedKeys.push(info.key);
    return info.key;
  };

  var _updateHoverKeys = function _updateHoverKeys(info) {
    _keyRef.current.hoverKeys.length = 0;
    if (info.hover === true) {
      _keyRef.current.hoverKeys.push(info.key);
    } else {
    }
    return info.key;
  };

  var _onClick = function _onClick(info) {
    var selectedKey = info.key;
    _props.onClick &&
      _props.onClick({
        eventKey: selectedKey,
      });
  };

  var _onSelected = function _onSelected(info) {
    (0, _updateSelectedKeys)(info);
    _setselectedFlag(!_selectedFlag);
  };

  var _onMouseHover = function _onMouseHover(info) {
    (0, _updateHoverKeys)(info);
    _setHoverFlag(!_hoverFlag);
  };

  var mouseEvent = {
    onClick: _onClick,
    onSelected: _onSelected,
    onMouseHover: _onMouseHover,
  };

  var menuCellProps = {};

  var _renderMenu = function _renderMenu() {
    return React.createElement(
      "ul",
      { className: "".concat(_preflxCls, "-container") },
      React.Children.map(_children, function (c, i) {
        return React.cloneElement(
          c,
          Object.assign(
            {},
            {
              eventKey: c.key,
              selectedKeys: _keyRef.current.selectedKeys,
              hoverKeys: _keyRef.current.hoverKeys,
            },
            mouseEvent
          )
        );
      })
    );
  };

  return React.createElement(
    "div",
    {
      className: "".concat(_preflxCls, "-root"),
    },
    (0, _renderMenu)()
  );
}

Menu.SubMenu = function (_props) {
  return React.createElement(
    SubMenu,
    {
      title: _props.title,
      eventKey: _props.eventKey,
      onClick: _props.onClick,
      onSelected: _props.onSelected,
      selectedKeys: _props.selectedKeys,
      onMouseHover: _props.onMouseHover,
      hoverKeys: _props.hoverKeys,
    },
    _props.children
  );
};

Menu.MenuItemGroup = function (_props) {
  return React.createElement(
    MenuItemGroup,
    {
      title: _props.title,
      onClick: _props.onClick,
      onSelected: _props.onSelected,
      selectedKeys: _props.selectedKeys,
      onMouseHover: _props.onMouseHover,
      hoverKeys: _props.hoverKeys,
    },
    _props.children
  );
};

Menu.Item = function (_props) {
  return React.createElement(
    Item,
    {
      eventKey: _props.eventKey,
      onClick: _props.onClick,
      onSelected: _props.onSelected,
      selectedKeys: _props.selectedKeys,
      onMouseHover: _props.onMouseHover,
      hoverKeys: _props.hoverKeys,
    },
    _props.children
  );
};

Menu.Content = function (_props) {
  return React.createElement(Content, {}, _props.children);
};

Menu.defaultProps = {
  preflxCls: "ui-menu",
};

var _default = Menu;
export default _default;
