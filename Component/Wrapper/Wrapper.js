import { Menu } from "newda-lib";

function WrapperDemo() {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <React.Fragment>
      <Menu onClick={handleClick}>
        <Menu.SubMenu key="1" title="DL_NewDA_DEV1"></Menu.SubMenu>
        <Menu.SubMenu key="2" title="简介"></Menu.SubMenu>
        <Menu.SubMenu key="3" title="更新日志"></Menu.SubMenu>
        <Menu.SubMenu key="4" title="Components">
          <Menu.MenuItemGroup title="Basic">
            <Menu.Item key="5">Icon</Menu.Item>
            <Menu.Item key="6">Button</Menu.Item>
            <Menu.Item key="7">Layout</Menu.Item>
            <Menu.SubMenu key="8" title="Test">
              <Menu.MenuItemGroup title="TestItemGrounp">
                <Menu.Item key="9">TestItem</Menu.Item>
              </Menu.MenuItemGroup>
            </Menu.SubMenu>
          </Menu.MenuItemGroup>
          <Menu.MenuItemGroup title="Form">
            <Menu.Item key="10">Input</Menu.Item>
            <Menu.Item key="11">Radio</Menu.Item>
            <Menu.Item key="12">Checkbox</Menu.Item>
            <Menu.Item key="13">InputNumber</Menu.Item>
            <Menu.Item key="14">Rate 评分</Menu.Item>
            <Menu.Item key="15">Swich</Menu.Item>
            <Menu.Item key="16">DatePicker</Menu.Item>
            <Menu.Item key="17">PeoplePicker</Menu.Item>
            <Menu.Item key="18">Combobox</Menu.Item>
            <Menu.Item key="19">MutiCombobox</Menu.Item>
            <Menu.Item key="20">Upload</Menu.Item>
          </Menu.MenuItemGroup>
          <Menu.MenuItemGroup title="View">
            <Menu.Item key="21">Alert</Menu.Item>
            <Menu.Item key="22">Calendar</Menu.Item>
            <Menu.Item key="23">Dialog</Menu.Item>
            <Menu.Item key="24">Table</Menu.Item>
            <Menu.Item key="25">Pager</Menu.Item>
            <Menu.Item key="26">TabControl</Menu.Item>
            <Menu.Item key="27">Tree</Menu.Item>
          </Menu.MenuItemGroup>
          <Menu.MenuItemGroup title="Navigation">
            <Menu.Item key="28">Menu</Menu.Item>
            <Menu.Item key="29">Breadcrumb</Menu.Item>
            <Menu.Item key="30">Steps</Menu.Item>
          </Menu.MenuItemGroup>
        </Menu.SubMenu>
      </Menu>
    </React.Fragment>
  );
}

export default WrapperDemo;
