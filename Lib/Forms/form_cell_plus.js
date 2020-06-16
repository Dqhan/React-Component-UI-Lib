function FormCellPlus(props) {

    var _data = props.data;

    var _onClick = function _onClick(e) {
        e.preventDefault();
        // props.onClick && props.onClick(e);
        // console.log('aaaaa')
        if (1)
            _data.children = [{ key: "test" }]
        else
            _data.children.push({ key: "test" })
        props.onClick(e);
    }

    return React.createElement('div', {
        className: "ui-forms-edit-cell-plus fi-page-plus-a",
        onClick: _onClick
    })
}


var _default = FormCellPlus;
export default _default;