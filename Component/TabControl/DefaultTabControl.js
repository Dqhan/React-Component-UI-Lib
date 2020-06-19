import { TabControl } from "newda-lib";

function DefaultTabControl() {
  const [items, setItems] = React.useState([
    { template: "tab 1" },
    { template: "tab 2" },
    { template: "tab 3" },
  ]);
  const handleClick = (e, index) => {
    console.log(index);
  };
  return (
    <React.Fragment>
      <TabControl items={items} handleClick={handleClick}>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </TabControl>
    </React.Fragment>
  );
}

export default DefaultTabControl;
