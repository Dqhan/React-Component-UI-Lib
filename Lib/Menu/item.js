var Item = function Item(_props) {
    var _preflxCls = _props.preflxCls,
        _children = _prop._children;


    var _renderTitle = function _renderTitle() {
        return React.createElement("div", {
            className: "".concat(_preflxCls, "-item-group-title")
        },
            _children
        )
    }


    return React.createElement("li",
        {
            className: "".concat(_preflxCls, "-item-group-cell")
        },
        _renderTitle()
    )

}




Item.defaultProps = {
    preflxCls: "ui-menu"
}

var _default = Item;
export default _default;