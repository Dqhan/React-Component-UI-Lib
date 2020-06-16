require('./style')

function InternalButton(_ops, _ref) {
    let _prefixCls = _ops.prefixCls,
        _className = _ops.className,
        _children = _ops.children,
        _disabled = _ops.disabled,
        _onClick = _ops.onClick,
        _wrapStyle = _ops.style;

    var _ref = _ref || React.createRef();

    var _style = {};

    Object.assign(_style, _wrapStyle);

    let _baseProperty = {
        ref: _ref,
        className: _className ? "".concat(_prefixCls, `${" " + _className}`) : _prefixCls,
        style: _style
    }

    if (_disabled === true) {
        Object.assign(_baseProperty, {
            disabled: _disabled,
        })
    } else {
        Object.assign(_baseProperty, {
            onClick: _onClick
        })
    }

    return React.createElement('button', _baseProperty, _children)
}


var Button = React.forwardRef(InternalButton)

Button.defaultProps = {
    prefixCls: 'ui-button',
    _disabled: false
}


export default Button;