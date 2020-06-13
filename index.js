require('./content/index');
require('./content/demo');
import { useState } from 'react';
import { Dialog, Button } from 'newda-lib';

function App() {
    const [closed, setClosed] = useState(true);

    const handleOpenDialog = () => {
        setClosed(false);
    }

    const handleOk = e => {
        console.log(e);
        setClosed(true);
    };

    const handleCancel = e => {
        console.log(e);
        setClosed(true);
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
            {...{ closed, handleOk, handleCancel, title: 'Dialog' }}
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