
require('./style')
import { useState, useRef, useEffect } from 'react';

import GloEvent from '../_util/init_glo_event';

function RDialog(_ops) {
    let dialogRef = useRef();

    let _prefixCls = _ops.prefixCls || 'ui-dialog',
        _title = _ops._title || 'Default Title',
        _children = _ops.children,
        _opsClosed = _ops.closed;

    let _React$useState = useState(_opsClosed),
        _closed = _React$useState[0],
        _setClosed = _React$useState[1];

    useEffect(() => {
        _setClosed(_opsClosed);
    }, [_opsClosed])


    let onOk = (args) => {
        if (typeof _ops.handleOk) _ops.handleOk(args);
        else console.warn('handleOk is undefined.');
    }

    let onCancel = (args) => {
        if (typeof _ops.handleCancel) _ops.handleCancel(args);
        else console.warn('handleCancel is undefined.');
    }

    let EventMap = {
        ok: onOk,
        cancel: onCancel
    }

    let handleDialogCloseCallback = (args, type) => {
        EventMap[type](args);
    }

    let _handleCloseIconClick = function _handleCloseIconClick(e) {
        let _a,
            _old,
            _new;
        e.preventDefault();
        _a = dialogRef.current;
        _old = {};
        _new = {};
        _setClosed(true);
        handleDialogCloseCallback(GloEvent({ e: _a, old: _old, new: _new }), 'cancel');
    }

    let renderCloseIcon = function renderCloseIcon() {
        return React.createElement('div', {
            key: 0,
            className: "".concat(_prefixCls, "-title-icon"),
            onClick: _handleCloseIconClick
        }, React.createElement('span', {
            className: "".concat("fi-page-unavailable-a")
        }));
    }

    let renderTitle = function renderTitle() {
        return React.createElement('div', {
            key: 0,
            className: "".concat(_prefixCls, "-title")
        }, [
            _title,
            renderCloseIcon()
        ]);
    }

    let renderContent = function renderContent() {
        return React.createElement('div', {
            key: 1,
            className: "".concat(_prefixCls, "-content")
        }, _children);
    }

    let renderFooter = function renderFooter() {
        return React.createElement('div', {
            key: 2,
            className: "".concat(_prefixCls, "-footer")
        });
    }

    let renderDialog = function renderDialog() {
        return React.createElement('div', {
            ref: dialogRef,
            className: "".concat(_prefixCls),
        },
            renderTitle(),
            renderContent(),
            renderFooter()
        )
    }
    return _closed ? null : React.createElement('div', {
        className: "".concat('ui-back')
    }, renderDialog())
}


RDialog.defaultProps = {

}

var _default = RDialog;
export default _default;