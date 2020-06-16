function FormCell(props) {
  let _data = props.data,
    _key = _data.key,
    _children = _data.children;
  return React.createElement(
    "div",
    {
      key: _key,
    },
    typeof _children !== "undefined" &&
      _children.map((c) => {
        return React.createElement(FormCell, {
          key: c.key,
          data: c,
          children: c.children,
        });
      })
  );
}

var _default = FormCell;
export default _default;
