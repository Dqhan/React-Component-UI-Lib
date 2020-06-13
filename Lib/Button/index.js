require('./style')

function Button(_ops) {
    let _prefixCls = _ops.prefixCls || 'ui-button',
        _className = _ops.className,
        _text = _ops.text,
        _disabled = _ops._disabled,
        onClick = _ops.onClick;
    let _baseProperty = {
        className: "".concat(_prefixCls, `${" " + _className}`)
    }


    if (_disabled === true) {
        Object.assign(_baseProperty, {
            disabled,
        })
    } else {
        Object.assign(_baseProperty, {
            onClick: onClick
        })
    }



    return React.createElement('button', _baseProperty, _text)
}

export default Button;