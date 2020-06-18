import { Confrim, Button } from "newda-lib";

function ConfrimDemo() {
  var handleOK = () => {
    console.log("confrim ok callback.");
  };

  var handleInfo = function () {
    Confrim.info({
      children: "info confrim test.",
      handleOK: handleOK,
    });
  };

  var handleSuccess = function () {
    Confrim.success({ children: "info confrim test." });
  };

  var handleError = function () {
    Confrim.error({ children: "info confrim test." });
  };

  var handleWarn = function () {
    Confrim.warn({ children: "info confrim test." });
  };

  return (
    <React.Fragment>
      <Button style={{ color: "#66CCFF" }} onClick={handleInfo}>
        Info
      </Button>
      <Button style={{ color: "#66CC00" }} onClick={handleSuccess}>
        Success
      </Button>
      <Button style={{ color: "#FF0000" }} onClick={handleError}>
        Error
      </Button>
      <Button style={{ color: "#FFCC33" }} onClick={handleWarn}>
        Warn
      </Button>
    </React.Fragment>
  );
}

var _default = ConfrimDemo;
export default _default;
