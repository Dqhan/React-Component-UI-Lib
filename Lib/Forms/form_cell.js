import FormCellPlus from './form_cell_plus';

function FormCell(props) {
  let _data = props.data,
    _key = _data.key,
    _children = _data.children,
    _preflxCls = props.preflxCls;




  var _onClick = function _onClick(e) {
    props.onClick(e);
  }

  // if (_children === "undefined") {
  //   // var data = JSON.parse(JSON.stringify(props.data));
  //   // data
  //   // props.addSection(data);
  //   props.data.children = []
  // }

  return React.createElement(
    "div",
    {
      key: _key,
      className: "".concat(_preflxCls, "-edit-cell"),
      children: _children,
      data: _data,
    },
    typeof _children !== "undefined" ?
      _children.map((c) => {
        return React.createElement(FormCell, {
          key: c.key,
          data: c,
          className: "".concat(_preflxCls, "-edit-cell"),
          children: c.children,
          onClick: _onClick
        });
      }) : React.createElement(FormCellPlus, {
        data: _data,
        onClick: _onClick
      })
  );
}

FormCell.defaultProps = {
  preflxCls: "ui-forms"
}

var _default = FormCell;
export default _default;
