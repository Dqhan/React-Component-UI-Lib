require("./style");
import SubMenu from "./sub_menu";
import MenuItemGroup from "./menu_item_group";
import Item from "./menu_item";

function Menu(_props) {
  let _preflxCls = _props.preflxCls,
    _children = _props.children;

  var _onClick = function _onClick(e) {
    _props.onClick && _props.onClick(e);
  };

  var mouseEvent = {
    onClick: _onClick,
  };

  var menuCellProps = {};

  var _renderMenu = function _renderMenu() {
    return React.createElement(
      "ul",
      { className: "".concat(_preflxCls, "-container") },
      React.Children.map(_children, function (c, i) {
        return React.cloneElement(
          c,
          Object.assign({}, { key: i }, mouseEvent)
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
  return React.createElement(SubMenu, {
    title: _props.title,
    onClick: _props.onClick
  },
    _props.children);
};

Menu.MenuItemGroup = function (_props) {
  return React.createElement(MenuItemGroup, {
    title: _props.title,
    onClick: _props.onClick
  },
    _props.children
  );
};

Menu.Item = function (_props) {
  return React.createElement(Item, {
    onClick: _props.onClick
  },
    _props.children
  );
};

Menu.defaultProps = {
  preflxCls: "ui-menu",
};

var _default = Menu;
export default _default;
