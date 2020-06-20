
import NavCell from './wrapper_nav_cell';

function WrapperNav(_props) {
    let _data = _props.data,
        _preflxCls = _props.preflxCls;

    return React.createElement("ul", {
        className: "".concat(_preflxCls, "-nav")
    },
        _data.map((item, index) => {
            return React.createElement(NavCell, {
                key: index,
                className: "".concat(_preflxCls, "-nav-item"),
                cell: item
            })
        })
    )
}


WrapperNav.defaultProps = {
    preflxCls: "ui-wrapper"
}

var _default = WrapperNav;
export default _default;