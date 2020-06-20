import { Wrapper } from 'newda-lib';


function WrapperDemo() {

    var data = [
        { title: "DL_NewDA_DEV1", },
        { title: "简介", },
        { title: "更新日志", },
        {
            title: "Components",
            extend: true,
            children: [
                {
                    title: "Basic",
                    children: [
                        { title: "Icon" },
                        { title: "Button" },
                        { title: "Layout" }
                    ]
                },
                {
                    title: "Form",
                    children: [
                        { title: "Input" },
                        { title: "Radio" },
                        { title: "Checkbox" },
                        { title: "InputNumber" },
                        { title: "Rate 评分" },
                        { title: "Swich" },
                        { title: "DatePicker" },
                        { title: "PeoplePicker" },
                        { title: "Combobox" },
                        { title: "MutiCombobox" },
                        { title: "upload" },
                    ]
                },
                {
                    title: "View",
                    children: [
                        { title: "Alert" },
                        { title: "Calendar" },
                        { title: "Dialog" },
                        { title: "Table" },
                        { title: "Pager" },
                        { title: "TabControl" },
                        { title: "Tree" },
                    ]
                },
                {
                    title: "Navigation",
                    children: [
                        { title: "Breadcrumb" },
                        { title: "Menu" },
                        { title: "Steps" },
                    ]
                }
            ]
        }
    ]
    return <React.Fragment>
        <Wrapper data={data} />
    </React.Fragment>

}


export default WrapperDemo;


