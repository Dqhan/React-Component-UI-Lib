
require('./style')

import Dialog from './p_dialog';

let Modal = function Modal(props) {

    const mount = React.useRef(null);

    const _React$State = React.useState(document.createElement('div'));

    const divNode = _React$State[0];

    // props.visible && document.body.appendChild(divNode);

    React.useEffect(() => {

        return () => {
            // document.body.removeChild(divNode);
        }

    }, []);

    React.useEffect(() => {

        if (!mount.current) mount.current = true;

        else {
            props.visible && document.body.appendChild(divNode);
        }
    })

    return props.destory ?
        props.visible ? ReactDOM.createPortal(<Dialog  {...props}>{props.children}</Dialog>, divNode)
            : null
        : ReactDOM.createPortal(<Dialog  {...props}>{props.children}</Dialog>, divNode)
}

Modal.defaultProps = {
    visible: false,
    title: void 0,
    children: null,
    closeFooter: false,
    footer: null,
    closeIcon: false,
    width: 520,
    destory: false
};

var _default = Modal;
export default _default;