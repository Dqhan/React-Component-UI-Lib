import { useState } from "react";
import { Dialog, Button } from "newda-lib";

function Default() {
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
        }}
      >
        <div>
          <p>666</p>
          <p>777</p>
          <p>888</p>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
export default Default;
