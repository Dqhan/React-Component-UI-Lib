require('./style');

import Nav from './wrapper_nav';
import Content from './wrapper_content';

function Wrapper(_props) {
    let _data = _props.data,
        _preflxCls = _props.preflxCls;


    var _renderNav = function _renderNav() {
        return React.createElement(Nav, {
            className: "".concat(_preflxCls, "-nav"),
            data: _data
        })
    }

    var _renderContent = function _renderContent() {
        return React.createElement(Content, {
            className: "".concat(_preflxCls, "-content"),
        })
    }

    return React.createElement("div", {
        className: "".concat(_preflxCls, "-root")
    },
        _renderNav(),
        _renderContent()
    )
}


Wrapper.defaultProps = {
    preflxCls: "ui-wrapper"
}

var _default = Wrapper;
export default _default;