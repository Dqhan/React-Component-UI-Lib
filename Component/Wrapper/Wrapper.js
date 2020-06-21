import { Menu } from 'newda-lib';


function WrapperDemo() {


    const handleClick = (e) => {
        console.log('click ', e);

    }

    return <React.Fragment>
        <Menu onClick={handleClick}>
            <Menu.SubMenu key="sub-1" title="DL_NewDA_DEV1"></Menu.SubMenu>
            <Menu.SubMenu key="sub-2" title="简介"></Menu.SubMenu>
            <Menu.SubMenu key="sub-3" title="更新日志"></Menu.SubMenu>
            <Menu.SubMenu key="sub-4" title="Components">
                <Menu.MenuItemGroup title="Basic">
                    <Menu.Item key="1">Icon</Menu.Item>
                    <Menu.Item key="2">Button</Menu.Item>
                    <Menu.Item key="3">Layout</Menu.Item>
                </Menu.MenuItemGroup>
                <Menu.MenuItemGroup title="Form">
                    <Menu.Item key="4">Input</Menu.Item>
                    <Menu.Item key="5">Radio</Menu.Item>
                    <Menu.Item key="6">Checkbox</Menu.Item>
                    <Menu.Item key="7">InputNumber</Menu.Item>
                    <Menu.Item key="8">Rate 评分</Menu.Item>
                    <Menu.Item key="9">Swich</Menu.Item>
                    <Menu.Item key="10">DatePicker</Menu.Item>
                    <Menu.Item key="11">PeoplePicker</Menu.Item>
                    <Menu.Item key="12">Combobox</Menu.Item>
                    <Menu.Item key="13">MutiCombobox</Menu.Item>
                    <Menu.Item key="14">Upload</Menu.Item>
                </Menu.MenuItemGroup>
                <Menu.MenuItemGroup title="View">
                    <Menu.Item key="15">Alert</Menu.Item>
                    <Menu.Item key="16">Calendar</Menu.Item>
                    <Menu.Item key="17">Dialog</Menu.Item>
                    <Menu.Item key="18">Table</Menu.Item>
                    <Menu.Item key="19">Pager</Menu.Item>
                    <Menu.Item key="20">TabControl</Menu.Item>
                    <Menu.Item key="21">Tree</Menu.Item>
                </Menu.MenuItemGroup>
                <Menu.MenuItemGroup title="Navigation">
                    <Menu.Item key="22">Menu</Menu.Item>
                    <Menu.Item key="23">Breadcrumb</Menu.Item>
                    <Menu.Item key="24">Steps</Menu.Item>
                </Menu.MenuItemGroup>
            </Menu.SubMenu>
        </Menu>
    </React.Fragment>

}


export default WrapperDemo;


