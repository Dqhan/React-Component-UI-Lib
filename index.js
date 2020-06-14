require('./content/index');
require('./content/demo');
import { useState } from 'react';
import { Dialog, Button } from 'newda-lib';

function App() {
    const [visible, setVisible] = useState(false);

    const handleOpenDialog = () => {
        setVisible(true);
    }

    const handleOk = e => {
        console.log(e);
        setVisible(false);
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false);
    };

    const change = () => {
        Dialog.update({
            color: 'red'
        });
    }

    return <div>
        <Button onClick={handleOpenDialog} text="Click" />
        <Button onClick={change} text="Change" />
        <Dialog
            {...{
                visible, handleOk, handleCancel, title: 'Dialog',
                // footer: [
                //     <Button key='back' text="back" onClick={handleCancel}>
                //         Return
                //   </Button>,
                //     <Button key='submit' text="submit" onClick={handleOk}>
                //         Submit
                //   </Button>,
                // ]
            }}
        >
            <div>
                <p>666</p>
                <p>777</p>
                <p>888</p>
            </div>
        </Dialog>
    </div>
}

{
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
}