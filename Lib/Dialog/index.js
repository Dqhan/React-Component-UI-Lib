
require('./style')

var RDialog = require('./r_dialog');

var RDialog = RDialog['default'];

import Dialog from './p_dialog';

let Modal = function Modal(props) {
    const _React$State = React.useState(document.createElement('div'));
    const divNode = _React$State[0];
    document.body.appendChild(divNode);
    React.useEffect(() => {
        return () => {
            document.body.removeChild(divNode);
        }
    }, []);

    return ReactDOM.createPortal(<Dialog  {...props}>{props.children}</Dialog>, divNode)
}


// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.div = document.createElement('div');
//         document.body.appendChild(this.div);
//     }
//     componentDidMount() {

//     }

//     componentDidUpdate() {
//         // ReactDOM.unstable_renderSubtreeIntoContainer(
//         //     this,
//         //     <Dialog  {...this.props}>{this.props.children}</Dialog>,
//         //     this.div
//         // );
//     }

//     render() {
//         return ReactDOM.createPortal(<Dialog  {...this.props}>{this.props.children}</Dialog>, this.div);
//     }
// }

Modal.defaultProps = {
    width: 520
};

// Modal.update = function (props) {
//     React.createElement(RDialog, props);
// }

var _default = Modal;
export default _default;