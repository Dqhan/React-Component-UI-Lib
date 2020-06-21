var SubMenu = function SubMenu(_props) {

    var _preflxCls = _props.preflxCls,
        _children = _props.children,
        _title = _props.title;

    var _renderTitle = function _renderTitle() {
        return React.createElement("div", {
            className: "".concat(_preflxCls, "-submenu-title")
        },
            _title
        )
    }

    var _renderSub = function _renderSub() {
        return React.createElement("ul", {
            className: "".concat(_preflxCls, "-submenu-sub")
        },
            _children
        )
    }

    return React.createElement("li", {
        className: "".concat(_preflxCls, "-submenu")
    },
        _renderTitle(),
        _children && _renderSub()
    )
}


SubMenu.defaultProps = {
    preflxCls: "ui-menu"
}


var _default = SubMenu;
export default _default;