require("./style");
import SubMenu from "./sub_menu";
import MenuItemGroup from "./menu_item_group";
import Item from "./menu_item";

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty2.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

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
          {
            onClick: _onClick,
          }
        //   {
        //     key: i,
        //     onClick: _onClick,
        //   },
        //   Object.assign({}, c.props, { key: i }, mouseEvent)
        );
      })
    );
  };

  return React.createElement(
    "div",
    {
      className: "".concat(_preflxCls, "-root"),
    },
    _renderMenu()
  );
}

Menu.SubMenu = function (_props) {
  return React.createElement(SubMenu, {
    title: _props.title,
    children: _props.children,
  });
};

Menu.MenuItemGroup = function (_props) {
  return React.createElement(MenuItemGroup, {
    title: _props.title,
    children: _props.children,
  });
};

Menu.Item = function (_props) {
  return React.createElement(Item, {
    children: _props.children,
  });
};

Menu.defaultProps = {
  preflxCls: "ui-menu",
};

var _default = Menu;
export default _default;
