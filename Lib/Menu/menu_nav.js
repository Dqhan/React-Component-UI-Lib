
import NavCell from './menu_nav_cell';

function MenuNav(_props) {
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


MenuNav.defaultProps = {
    preflxCls: "ui-menu"
}

var _default = MenuNav;
export default _default;