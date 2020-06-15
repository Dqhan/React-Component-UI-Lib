require('./style')

function Button(_ops) {
    let _prefixCls = _ops.prefixCls,
        _className = _ops.className,
        _children = _ops.children,
        _disabled = _ops.disabled,
        _onClick = _ops.onClick;
    let _baseProperty = {
        className: _className ? "".concat(_prefixCls, `${" " + _className}`) : _prefixCls
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


Button.defaultProps = {
    prefixCls: 'ui-button',
    _disabled: false
}

export default Button;