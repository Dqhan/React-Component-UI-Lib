import FormCell from "./form_cell";

function Form(props) {
  const [data, setData] = React.useState({
    key: "0",
    children: [
      {
        key: "0-0",
        children: [{ key: "0-0-0" }, { key: "0-0-1" }],
      },
      {
        key: "0-1",
        children: [{ key: "0-1-0", children: [{ key: "0-1-0-0" }] }],
      },
    ],
  });

  var _onClick = function onClick(e) {
    setData(JSON.parse(JSON.stringify(data)));
  };

  return React.createElement(
    "div",
    {
      className: "ui-forms-edit",
    },
    React.createElement(FormCell, {
      data: data,
      onClick: _onClick
    })
  );
}



var _default = Form;
export default _default;
