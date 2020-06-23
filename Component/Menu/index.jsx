import { Menu } from "newda-lib";

function Index() {
  const [key, setKey] = React.useState("1");

  var handleClick = (e) => {
    setKey(e.eventKey)
  };


  return (
    <React.Fragment>
      <Menu onClick={handleClick}>
        <Menu.SubMenu key="1" title="Menu1"></Menu.SubMenu>
        <Menu.SubMenu key="2" title="Menu2"></Menu.SubMenu>
        <Menu.SubMenu key="3" title="Menu3"></Menu.SubMenu>
        <Menu.SubMenu key="4" title="Menu4">
          <Menu.MenuItemGroup title="MenuGroup1">
            <Menu.Item key="5">item1</Menu.Item>
            <Menu.Item key="6">item2</Menu.Item>
            <Menu.Item key="7">item3</Menu.Item>
          </Menu.MenuItemGroup>
        </Menu.SubMenu>
      </Menu>
    </React.Fragment>
  );
}

export default Index;
