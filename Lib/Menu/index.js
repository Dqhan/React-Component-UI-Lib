require('./style');

import Nav from './menu_nav';
import Content from './menu_content';

import SubMenu from "./sub_menu";
import MenuItemGroup from './menu_item_group';
import Item from './item';


function Menu(_props) {
    let _preflxCls = _props.preflxCls,
        _children = _props.children;


    // var _renderNav = function _renderNav() {
    //     return React.createElement(Nav, {
    //         className: "".concat(_preflxCls, "-nav"),
    //         data: _data
    //     })
    // }

    // var _renderContent = function _renderContent() {
    //     return React.createElement(Content, {
    //         className: "".concat(_preflxCls, "-content"),
    //     })
    // }

    return React.createElement("div", {
        className: "".concat(_preflxCls, "-root")
    },
        React.createElement("ul", {

        },
            _children
        )
    )
}

Menu.SubMenu = function (_props) {
    return React.createElement(SubMenu, {
        title: _props.title,
        children: _props.children
    })
}

Menu.MenuItemGroup = function (_props) {
    return React.createElement(MenuItemGroup, {
        title: _props.title,
        children: _props.children
    })
}

Menu.Item = function (_props) {
    return React.createElement(Item, {
        children: _props.children
    })
}

Menu.defaultProps = {
    preflxCls: "ui-menu"
}

var _default = Menu;
export default _default;