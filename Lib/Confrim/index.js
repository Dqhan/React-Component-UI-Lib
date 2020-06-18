import Dialog from "../Dialog/p_dialog";
import Button from "../Button";
require("./style");

var Confrim = function Confrim(_props) {
  var _children = _props.children,
    _preflxCls = _props.preflxCls,
    _type = _props.type,
    _rootNode = _props.rootNode;

  //   const [_visible, _setVisible] = React.useState(true);

  var _renderRoot = function _renderRoot() {
    return React.createElement(
      "div",
      {
        className: "".concat(_preflxCls, "-root"),
      },
      _renderContent()
    );
  };

  var _renderInfo = function _renderInfo() {
    return "-info fi-page-circle-info-a";
  };

  var _renderSuccess = function _renderSuccess() {
    return "-success fi-page-circle-finish-a";
  };

  var _renderError = function _renderError() {
    return "-error fi-page-delete-a";
  };

  var _renderWarn = function _renderWarn() {
    return "-warn fi-page-circle-warning-a";
  };

  var typeMap = {
    info: _renderInfo,
    success: _renderSuccess,
    error: _renderError,
    warn: _renderWarn,
  };

  var _getContentClassName = function _getClassName() {
    var base = "".concat(_preflxCls, "-root-content-icon");
    var type = typeMap[_type]();
    var className = "".concat(base, type);
    return className;
  };

  var _renderIcon = function _renderIcon() {
    return React.createElement("div", {
      className: _getContentClassName(),
    });
  };

  var _renderContent = function _renderContent() {
    return React.createElement(
      "div",
      {
        className: "".concat(_preflxCls, "-root-content"),
      },
      _renderIcon(),
      _children
    );
  };

  var _onCancel = function _onCancel(e) {
    document.body.removeChild(_rootNode);
  };

  var _onOK = function _onOK(e) {
    document.body.removeChild(_rootNode);
    _props.handleOK && _props.handleOK(e);
  };

  var _renderFooter = function _renderFooter() {
    return [
      <Button key="ok" text="OK" onClick={_onOK}>
        OK
      </Button>,
    ];
  };

  return React.createElement(
    Dialog,
    {
      visible: true,
      title: "Confrim",
      closeFooter: true,
      footer: _renderFooter(),
      closeIcon: false,
      width: 520,
      handleOK: _onOK,
      handleCancel: _onCancel,
    },
    _renderRoot()
  );
};

Confrim.defaultProps = {
  preflxCls: "ui-confrim",
  visible: false,
  title: void 0,
  children: null,
  closeFooter: false,
  footer: null,
  closeIcon: false,
  width: 520,
  destory: false,
  handleOK: null,
};

Confrim.warn = function _warn(props) {
  var { children, handleOK } = props;
  var div = document.createElement("div");
  document.body.appendChild(div);
  var cProps = { children, type: "warn", rootNode: div, handleOK: handleOK };
  ReactDOM.render(<Confrim {...cProps} />, div);
};

Confrim.error = function _error(props) {
  var { children, handleOK } = props;
  var div = document.createElement("div");
  document.body.appendChild(div);
  var cProps = { children, type: "error", rootNode: div, handleOK: handleOK };
  ReactDOM.render(<Confrim {...cProps} />, div);
};

Confrim.info = function _info(props) {
  var { children, handleOK } = props;
  var div = document.createElement("div");
  document.body.appendChild(div);
  var cProps = { children, type: "info", rootNode: div, handleOK: handleOK };
  ReactDOM.render(<Confrim {...cProps} />, div);
};

Confrim.success = function _success(props) {
  var { children, handleOK } = props;
  var div = document.createElement("div");
  document.body.appendChild(div);
  var cProps = { children, type: "success", rootNode: div, handleOK: handleOK };
  ReactDOM.render(<Confrim {...cProps} />, div);
};

var _default = Confrim;
export default _default;
