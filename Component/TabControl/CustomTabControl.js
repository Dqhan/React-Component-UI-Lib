import { TabControl } from "newda-lib";

function CustomTabControl() {
  const [items, setItems] = React.useState([
    { template: "tab 1" },
    {
      template: <div style={{ width: "60px", height: "60px", background: "red" }}>
        <div>tab 2</div>
      </div>
    },
    {
      template: <div style={{ width: "60px", height: "60px", background: "red" }}>
        tab 3
    </div>
    },
  ]);

  const [selectedIndex, setSelectIndex] = React.useState(0);

  const handleClick = (e, index) => {
    setSelectIndex(index);
  };

  return (
    <React.Fragment>
      <TabControl
        items={items}
        selectedIndex={selectedIndex}
        handleClick={handleClick}
        destory={true}
        horizontal={false}
      >
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </TabControl>
    </React.Fragment>
  );
}

export default CustomTabControl;
