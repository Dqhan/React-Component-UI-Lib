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
    <React.Fragment>
      <Button onClick={handleOpenDialog}>Show Dialog</Button>
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
    </React.Fragment>
  );
}

export default Custom;
