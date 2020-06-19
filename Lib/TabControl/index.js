require("./style");

function TabControl(_props) {
  var _preflxCls = _props.preflxCls,
    _items = _props.items,
    _children = _props.children,
    _destory = _props.destory,
    _selectedIndex = _props.selectedIndex;

  var _convert = function _convert() {
    var result = {};
    _items.forEach((item, index) => {
      var value = _getTabValue(item);
      result[value] = index;
    });
    return result;
  };

  var _getTabValue = function _getTabValue(item) {
    return typeof item.template === "string"
      ? item.template
      : item.template.innerText;
  };

  var _tabHash = _convert();

  var _onClick = function _onClick(e) {
    var value = e.currentTarget.innerText;
    var index = _tabHash[value];
    _props.handleClick && _props.handleClick(e, index);
  };

  // var _saveRef = function _saveRef(index) {
  //   return function (node) {
  //     refHash[index] = node;
  //   };
  // };

  // var _getCurrentIndex = function _getCurrentIndex() {

  // };

  var _renderContainer = function _renderContainer() {
    if (typeof _items === "undefined") console.warn("items must be array.");
    else
      return React.createElement(
        "div",
        {
          className: "".concat(_preflxCls, "-root-container"),
        },
        _items.map((item, index) => {
          return React.createElement(
            "div",
            {
              key: "".concat(_preflxCls, "-root-container-item-", index),
              // ref: _saveRef(_selectedIndex === index ? "active" : index),
              className:
                _selectedIndex === index
                  ? "".concat(_preflxCls, "-root-container-item active")
                  : "".concat(_preflxCls, "-root-container-item"),
              onClick: _onClick,
            },
            item.template
          );
        })
      );
  };

  var _renderContent = function _renderContent() {
    if (_children.length !== _items.length)
      throw new Error("items countss is not match dom count.");
    return React.createElement(
      "div",
      {
        className: "".concat(_preflxCls, "-root-content"),
      },
      _children.map((item, index) => {
        return React.createElement(
          "div",
          {
            key: "".concat(_preflxCls, "-root-content-item-", index),
            className: "".concat(_preflxCls, "-root-content-item"),
          },
          item
        );
      })
    );
  };

  return React.createElement(
    "div",
    {
      className: "".concat(_preflxCls, "-root"),
    },
    _renderContainer(),
    _renderContent()
  );
}

TabControl.defaultProps = {
  preflxCls: "ui-tabcontrol",
  items: [],
  children: null,
  destory: false,
  selectedIndex: 0,
  handleClick: null,
};
var _default = TabControl;
export default _default;
