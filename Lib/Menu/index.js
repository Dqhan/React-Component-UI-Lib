require("./style");
import SubMenu from "./sub_menu";
import MenuItemGroup from "./menu_item_group";
import Item from "./menu_item";

function Menu(_props) {
  let _preflxCls = _props.preflxCls,
    _children = _props.children;

  const _keyRef = React.useRef({
    selectedKeys: [],
    // extendKeys: [],
  });

  const //  _React$State = (0, React.useState)(true),
    //   _extendFlag = _React$State[0],
    //   _setExtendFlag = _React$State[1],
    _React$State1 = (0, React.useState)(true),
    _selectedFlag = _React$State1[0],
    _setselectedFlag = _React$State1[1];

  var _updateSelectedKeys = function _updateSelectedKeys(info) {
    _keyRef.current.selectedKeys.length = 0;
    _keyRef.current.selectedKeys.push(info.key);
    return info.key;
  };

  // var _updateExtendKeys = function _updateExtendKeys(info) {
  //   // _keyRef.current.extendKeys.length = 0;
  //   if (info.extend === true) _keyRef.current.extendKeys.push(info.key);
  //   else {
  //     var index = _keyRef.current.extendKeys.indexOf(info.key);
  //     _keyRef.current.extendKeys.splice(index, 1);
  //   }
  //   return info.key;
  // };

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

  // var _onExtend = function _onExtend(info) {
  //   (0, _updateExtendKeys)(info);
  //   _setExtendFlag(!_extendFlag);
  // };

  var _onMouseHover = function _onMouseHover(info) {};

  var _onMouseEnter = function _onMouseEnter(info) {};

  var mouseEvent = {
    onClick: _onClick,
    // onExtend: _onExtend,
    onSelected: _onSelected,
    onMouseHover: _onMouseHover,
    onMouseEnter: _onMouseEnter,
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
              extendKeys: _keyRef.current.extendKeys,
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
      onExtend: _props.onExtend,
      extendKeys: _props.extendKeys,
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
      onExtend: _props.onExtend,
      extendKeys: _props.extendKeys,
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
      onExtend: _props.onExtend,
      extendKeys: _props.extendKeys,
    },
    _props.children
  );
};

Menu.defaultProps = {
  preflxCls: "ui-menu",
};

var _default = Menu;
export default _default;
