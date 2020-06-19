import { TabControl } from "newda-lib";

function DefaultTabControl() {
  const [items, setItems] = React.useState([
    { template: "tab 1" },
    { template: "tab 2" },
    { template: "tab 3" },
  ]);

  const [selectedIndex, setSelectIndex] = React.useState(0);

  const handleClick = (e, index) => {
    setSelectIndex(index);
  };

  return (
    <React.Fragment>
      <TabControl items={items} selectedIndex={selectedIndex} handleClick={handleClick}>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </TabControl>
    </React.Fragment>
  );
}

export default DefaultTabControl;
