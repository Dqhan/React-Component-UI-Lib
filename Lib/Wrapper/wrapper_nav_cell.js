function NavCell(_props) {
    var _data = _props.cell,
        _preflxCls = _props.preflxCls,
        _children = _data.children,
        _title = _data.title;
    // _extend = _data.extend;

    const [_extend, _setExtend] = React.useState(_data.extend);

    var _renderChildren = function _renderChildren() {
        return typeof _children !== "undefined" ? React.createElement('ul', {
            className: _extend === true ? "".concat(_preflxCls, "-nav-sub") :
                _extend === false ? "".concat(_preflxCls, "-nav-sub-display-none") :
                    "".concat(_preflxCls, "-nav-sub")
        },
            _children.map((item, index) => {
                return React.createElement(NavCell, {
                    key: index,
                    className: "".concat(_preflxCls, "-nav-item"),
                    cell: item
                })
            })
        ) :
            null
    }

    var _renderTitle = function _renderTitle() {
        return React.createElement("h4", {

        },
            _title
        )
    }

    var _renderIcon = function _renderIcon() {
        return React.createElement("div", {
            className: _extend === true ? "".concat(_preflxCls, "-nav-item-content-icon fi-page-arrow-up-as") :
                _extend === false ? "".concat(_preflxCls, "-nav-item-content-icon fi-page-arrow-down-as") :
                    "".concat(_preflxCls, "-nav-item-content-icon")
        })
    }



    var _onClick = function _onClick(e) {
        e.preventDefault();
        _setExtend(!_extend);
    }

    var baseClass = {
        className: "".concat(_preflxCls, "-nav-item-content"),
    }
 
    typeof _extend === "boolean" && Object.assign(baseClass, {
        onClick: _onClick
    })

    var _renderNavItem = function _renderChildren() {
        return React.createElement("div", baseClass,
            _renderTitle(),
            _renderIcon()
        )
    }


    return React.createElement("li", {
        className: "".concat(_preflxCls, "-nav-item"),
    },
        _renderNavItem(),
        _renderChildren()
    )
}


NavCell.defaultProps = {
    preflxCls: "ui-wrapper"
}

var _default = NavCell;
export default _default;