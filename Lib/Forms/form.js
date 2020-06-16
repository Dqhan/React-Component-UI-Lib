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
//   const renderFormCell = (data) => {
//     // for (var key in data) {
//     //   if (typeof data[key] === "object") {
//     //     renderFormCell(data[key]);
//     //   } else {
//     //     var currentLevel = data[key];
//     //     Object.keys(currentLevel)
//     //     return React.createElement(FormCell, {});
//     //   }
//     // }
//     return React.createElement(FormCell, {
//       data: data,
//     });
//   };

  return React.createElement(
    "div",
    {
      className: "ui-forms-edit",
    },
    React.createElement(FormCell, {
      data: data,
    })
  );
}

var _default = Form;
export default _default;
