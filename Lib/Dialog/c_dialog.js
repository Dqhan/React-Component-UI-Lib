
var _inherits = require('babel-runtime/helpers/inherits');

var CDialog = function CDialog(_React$Component) {

    (0, _inherits['default'])(CDialog, _React$Component);

    function CDialog(_o) {
        var _this = this;
        // _title = _o.title,
        // _closeIcon = _o.closeIcon,
        // _footer = _o.footer,
        // _children = _o.children,
        // _width = _o.width;

        _this.saveRef = function (name) {
            return function (node) {
                _this[name] = node;
            }
        }

        _this.renderBackGroundElement = function () {
            return React.createElement('div', {
                className: 'ui-back'
            })
        }

        _this.renderDialogElement = function () {
            var props = this.props;
            var header = void 0;

            if (props.title) header = React.createElement('div', { ref: _this.saveRef('header'), className: "".concat('ui-dialog-title') }, props.title, props.closeIcon ? props.closeIcon : null);

            var footer = void 0;

            if (props.footer) footer = React.createElement('div', { ref: _this.saveRef('footer'), className: "".concat('ui-dialog-footer') }, props.footer)

            var content = React.createElement('div', { ref: _this.saveRef('content'), className: "".concat('ui-dialog-content') }, props.children)

            var style = this.getStyle();

            var doc = React.createElement('div', { ref: this.saveRef('doc'), className: 'ui-dialog-doc', style: style }, header, content, footer);

            return React.createElement('div', { ref: _this.saveRef('dialog'), className: "".concat('ui-dialog') }, doc)
        }

        _this.getStyle = function () {
            var props = this.props;
            return { width: props.width }
        };
    }


    CDialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate();
    }

    CDialog.prototype.componentDidUpdate = function componentDidUpdate() {
        var props = this.props,
            style = this.root.style;

        if (props.visible) style.display = "";
        else style.display = "none";
    }

    CDialog.prototype.render = function render() {
        return React.createElement('div', { ref: this.saveRef('root'), className: "".concat("ui-dialog-root") },
            this.renderBackGroundElement(),
            this.renderDialogElement())
    }

    return CDialog;
}(React.Component);

function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}

CDialog.defaultProps = {
    prefixCls: 'ui-dialog',
    visible: false,
    title: void 0,
    children: null,
    footer: null,
    closeIcon: false,
    width: 520
}

export default CDialog;