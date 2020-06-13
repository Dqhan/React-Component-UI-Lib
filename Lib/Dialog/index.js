
require('./style')

var RDialog = require('./r_dialog');

var RDialog = RDialog['default'];

// function Dialog(props) {
//     var div = document.createElement('div');
//     document.body.appendChild(div);
//     return React.createElement(div, {},
//         React.createElement(RDialog, {}, props.children)
//     )
// }

class Dialog extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        ReactDOM.render(<RDialog  {...this.props}>{this.props.children}</RDialog>, this.div)
    }

    componentDidUpdate() {
        ReactDOM.render(<RDialog {...this.props}>{this.props.children}</RDialog>, this.div)
    }

    render() {
        return null;
    }
}


// let Dialog = function Dialog(props) {
//     let mount = React.useRef();
//     let parentRef = React.useRef();
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     // React.useEffect(() => {
//     //     if (!mount.current) mount.current = true;
//     //     else {
//     //         ReactDOM.render(<RDialog ref={} {...this.props}>{this.props.children}</RDialog>, this.div)
//     //     }
//     // })
//     ReactDOM.render(<RDialog ref={parentRef} {...props}>{props.children}</RDialog>, div)
//     // useEffect(() => {
//     //     ReactDOM.render(<RDialog ref={parentRef} {...this.props}>{this.props.children}</RDialog>, this.div)
//     // })
//     return null;
// }

Dialog.update = function (props) {
    React.createElement(RDialog, props);
}

var _default = Dialog;
export default _default;