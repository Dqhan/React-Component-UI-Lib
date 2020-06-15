require("./content/index");
require("./content/demo");

import DefaultDialog from "./Component/Dialog/DefaultDialog";
import CustomDialog from "./Component/Dialog/CustomDialog";

const components = [
  {
    name: "Default Dialog",
    component: DefaultDialog,
  },
  {
    name: "Custom Dialog",
    component: CustomDialog,
  },
];

function App() {
  return (
    <div>
      {components.map((c, index) => {
        return (
          <section key={index}>
            <p>{c.name}</p>
            <c.component />
          </section>
        );
      })}
    </div>
  );
}

{
  ReactDOM.render(<App />, document.getElementById("app"));
}
