require("./content/index");
require("./content/demo");

import DefaultButton from "./Component/Button/DefaultButton";
import CustomButton from "./Component/Button/CustomButton";
import DefaultDialog from "./Component/Dialog/DefaultDialog";
import CustomDialog from "./Component/Dialog/CustomDialog";
import Confrim from "./Component/Confrim/Confrim";
import Forms from "./Component/Forms/Forms";
import DefaultTabControl from "./Component/TabControl/DefaultTabControl";
import CustomTabControl from "./Component/TabControl/CustomTabControl";

const components = [
  { name: "Default Button", component: DefaultButton },
  { name: "Custom Button", component: CustomButton },
  { name: "Default Dialog", component: DefaultDialog },
  { name: "Custom Dialog", component: CustomDialog },
  { name: "Confrim", component: Confrim },
  { name: "Default TabControl", component: DefaultTabControl },
  { name: "Custom TabControl", component: CustomTabControl },
  { name: "Forms", component: Forms },
];

function App() {
  return (
    <div>
      <h1>React UI Library</h1>
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
