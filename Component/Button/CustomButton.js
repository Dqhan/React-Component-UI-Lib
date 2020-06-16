import { Button } from "newda-lib";

require('./style');

function Custom() {
  return (
    <React.Fragment>
      <Button className="undeline-btn">Undeline Button</Button>
      <Button className="blink-btn">Blink Button</Button>
      <Button className="undeline-btn" style={{ color: "red" }}>
        Custom Style
      </Button>
    </React.Fragment>
  );
}

export default Custom;
