var MenuItemGroup = function MenuItemGroup(_props) {
    var _preflxCls = _props.preflxCls,
        _children = _props._children,
        _title = _props.title;


    var _renderTitle = function _renderTitle() {
        return React.createElement("div", {
            className: "".concat(_preflxCls, "-item-group-title")
        },
            _title
        )
    }


    return React.createElement("ul",
        {
            className: "".concat(_preflxCls, "-item-group")

        },
        _renderTitle(),
        _children
    )

}

MenuItemGroup.defaultProps = {
    preflxCls: "ui-menu"
}

var _default = MenuItemGroup;
export default _default;