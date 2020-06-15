
require('./style')

import GloEvent from '../_util/init_glo_event';

import CDialog from './c_dialog';

import Button from '../Button';

function PDialog(_o) {
    var dialogRef = React.useRef();

    // var okRef = React.useRef();

    var _prefixCls = _o.prefixCls,
        _title = _o.title,
        _children = _o.children,
        _visible = _o.visible,
        _footer = _o.footer,
        _closeFooter = _o.closeFooter,
        _closeIcon = _o.closeIcon,
        _width = _o.width;

    // var _React$useState = useState(visible),
    //     _closed = _React$useState[0],
    //     _setClosed = _React$useState[1];

    // useEffect(() => {
    //     _setClosed(visible);
    // }, [visible])

    // React.useEffect(() => {
    //     // okRef.current.focus();
    // })


    var onOk = (args) => {
        if (typeof _o.handleOk) _o.handleOk(args);
        else console.warn('handleOk is undefined.');
    }

    var onCancel = (args) => {
        if (typeof _o.handleCancel) _o.handleCancel(args);
        else console.warn('handleCancel is undefined.');
    }

    var EventMap = {
        ok: onOk,
        cancel: onCancel
    }

    var handleDialogCloseCallback = (args, type) => {
        EventMap[type](args);
    }

    var _handleCancelClick = function _handleCancelClick(e) {
        var _a,
            _old,
            _new;
        e.preventDefault();
        _old = {};
        _new = {};
        // _setClosed(true);
        // handleDialogCloseCallback(GloEvent({ e: e, old: _old, new: _new }), 'cancel');
        handleDialogCloseCallback(e, 'cancel')
    }

    var _handleOkClick = function _handleOkClick(e) {
        var _a,
            _old,
            _new;
        e.preventDefault();
        _old = {};
        _new = {};
        // _setClosed(true);
        // handleDialogCloseCallback(GloEvent({ e: e, old: _old, new: _new }), 'ok');
        handleDialogCloseCallback(e, 'ok')
    }

    var closeIcon = React.createElement('div', {
        key: 0,
        className: "".concat(_prefixCls, "-title-icon"),
        onClick: _handleCancelClick
    }, React.createElement('span', {
        className: "".concat("fi-page-unavailable-a")
    }));

    var _renderDefaultFooter = function _renderDefaultFooter() {
        return [
            React.createElement(Button, {
                key: 'ok',
                onClick: _handleOkClick
            }, 'Ok'),
            React.createElement(Button, {
                key: 'cancel',
                onClick: _handleCancelClick
            }, 'Cancel')
        ]
    }

    var _renderFooter = function _renderFooter() {
        return _footer.map(f => {
            return f;
        })
    }

    return React.createElement(CDialog, {
        prefixCls: _prefixCls,
        visible: _visible,
        title: _title !== void 0 ? _title : void 0,
        closeIcon: _closeIcon === true ? null : closeIcon,
        footer: _footer !== null ? _footer : _closeFooter === true ? null : _renderDefaultFooter(),
        children: _children,
        width: _width
    })
}


PDialog.defaultProps = {
    prefixCls: 'ui-dialog',
    visible: false,
    title: void 0,
    children: null,
    footer: null,
    closeFooter: false,
    closeIcon: false,
    width: 520
}

var _default = PDialog;
export default _default;