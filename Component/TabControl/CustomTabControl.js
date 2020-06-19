import { TabControl } from "newda-lib";

function CustomTabControl() {
  const [items, setItems] = React.useState([
    { template: "tab 1" },
    { template: "tab 2" },
    {
      template: (
        <div style={{ width: "60px", height: "60px", background: "red" }}>
          tab 3
        </div>
      ),
    },
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

export default CustomTabControl;
