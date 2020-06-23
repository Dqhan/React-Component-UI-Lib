


// import Forms from "./Component/Forms/Forms";
// import DefaultTabControl from "./Component/TabControl/DefaultTabControl";
// import CustomTabControl from "./Component/TabControl/CustomTabControl";
// import Wrapper from './Component/Wrapper/Wrapper';
require('./style.less');

import { Menu } from 'newda-lib';

import Department from '../Department';
import Introduction from '../Introduction';
import Member from '../Member';
import Component from '../Component';
import Button from '../../Component/Button';
import Dialog from '../../Component/Dialog';
import Confrim from "../../Component/Confrim";
import TabControl from '../../Component/TabControl';
import MenuIndex from "../../Component/Menu"

function Home() {

    const [key, setKey] = React.useState("1");

    const handleClick = (e) => {
        console.log(e.eventKey);
        setKey(e.eventKey);
    }

    const renderContent = () => {
        switch (key) {
            case "1":
                return <Department />;
            case "2":
                return <Introduction />;
            case "3":
                return <Member />;
            case "4":
                return <Component />;
            case "5":
                return <div>未完成</div>;
            case "6":
                return <Button />;
            case "7":
                return <div>未完成</div>;
            case "8":
                return <div>未完成</div>;
            case "9":
                return <div>未完成</div>;
            case "10":
                return <div>未完成</div>;
            case "11":
                return <div>未完成</div>;
            case "12":
                return <div>未完成</div>;
            case "13":
                return <div>未完成</div>;
            case "14":
                return <div>未完成</div>;
            case "15":
                return <div>未完成</div>;
            case "16":
                return <div>未完成</div>;
            case "17":
                return <div>未完成</div>;
            case "18":
                return <div>未完成</div>;
            case "19":
                return <div>未完成</div>;
            case "20":
                return <div>未完成</div>;
            case "21":
                return <Dialog />;
            case "22":
                return <Confrim />;
            case "23":
                return <div>未完成</div>;
            case "24":
                return <div>未完成</div>;
            case "25":
                return <TabControl />;
            case "26":
                return <div>未完成</div>;
            case "27":
                return <MenuIndex />;
            case "28":
                return <div>未完成</div>;
            default:
                return <div>未完成</div>;
        }
    }

    return <div className="home">
        <Menu onClick={handleClick}>
            <Menu.SubMenu key="1" title="DL_NewDA_DEV1"></Menu.SubMenu>
            <Menu.SubMenu key="2" title="简介"></Menu.SubMenu>
            <Menu.SubMenu key="3" title="成员"></Menu.SubMenu>
            <Menu.SubMenu key="4" title="Components">
                <Menu.MenuItemGroup title="Basic">
                    <Menu.Item key="5">Icon</Menu.Item>
                    <Menu.Item key="6">Button</Menu.Item>
                    <Menu.Item key="7">Layout</Menu.Item>
                </Menu.MenuItemGroup>
                <Menu.MenuItemGroup title="Form">
                    <Menu.Item key="8">Input</Menu.Item>
                    <Menu.Item key="9">Radio</Menu.Item>
                    <Menu.Item key="10">Checkbox</Menu.Item>
                    <Menu.Item key="11">InputNumber</Menu.Item>
                    <Menu.Item key="12">Rate 评分</Menu.Item>
                    <Menu.Item key="13">Swich</Menu.Item>
                    <Menu.Item key="14">DatePicker</Menu.Item>
                    <Menu.Item key="15">PeoplePicker</Menu.Item>
                    <Menu.Item key="16">Combobox</Menu.Item>
                    <Menu.Item key="17">MutiCombobox</Menu.Item>
                    <Menu.Item key="18">Upload</Menu.Item>
                </Menu.MenuItemGroup>
                <Menu.MenuItemGroup title="View">
                    <Menu.Item key="19">Alert</Menu.Item>
                    <Menu.Item key="20">Calendar</Menu.Item>
                    <Menu.Item key="21">Dialog</Menu.Item>
                    <Menu.Item key="22">Confrim</Menu.Item>
                    <Menu.Item key="23">Table</Menu.Item>
                    <Menu.Item key="24">Pager</Menu.Item>
                    <Menu.Item key="25">TabControl</Menu.Item>
                    <Menu.Item key="26">Tree</Menu.Item>
                </Menu.MenuItemGroup>
                <Menu.MenuItemGroup title="Navigation">
                    <Menu.Item key="27">Menu</Menu.Item>
                    <Menu.Item key="28">Breadcrumb</Menu.Item>
                    <Menu.Item key="29">Steps</Menu.Item>
                </Menu.MenuItemGroup>
            </Menu.SubMenu>
        </Menu>
        <Menu.Content>
            {
                renderContent()
            }
        </Menu.Content>
    </div>
}


export default Home;