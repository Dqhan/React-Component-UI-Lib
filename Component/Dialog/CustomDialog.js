import { useState } from "react";
import { Dialog, Button } from "newda-lib";

function Custom() {
  const [visible, setVisible] = useState(false);

  const handleOpenDialog = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog}>Click</Button>
      <Dialog
        {...{
          visible,
          handleOk,
          handleCancel,
          title: "Dialog",
          footer: [
            <Button key="back" text="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="submit" text="submit" onClick={handleOk}>
              Submit
            </Button>,
          ],
        }}
      >
        <div>
          <p>gggggggg</p>
          <p>hhhhhhhh</p>
          <p>jjjjjjjjj</p>
        </div>
      </Dialog>
    </div>
  );
}

export default Custom;
