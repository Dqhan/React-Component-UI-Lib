function Content(_props) {
    var _preflxCls = _props.preflxCls,
        _children = _props.children;
    return React.createElement('div', {
        className: "".concat(_preflxCls, "-content")
    }, _children)
}


Content.defaultProps = {
    preflxCls: "ui-menu"
}

var _default = Content;
export default _default;