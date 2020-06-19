require("./style");

function TabControl(_props) {
  var _preflxCls = _props.preflxCls,
    _items = _props.items,
    _children = _props.children,
    _destory = _props.destory,
    _selectedIndex = _props.selectedIndex,
    _horizontal = _props.horizontal;

  var _convert = function _convert() {
    var result = {};

    _items.forEach((item, index) => {
      var value = _getTabValue(item);

      result[value] = index;
    });

    return result;
  };

  var _getTabValue = function _getTabValue(item) {
    var result = void 0;

    if (typeof item.template === "string") result = item.template;
    else result = _deepGetValue(item.template);

    return result;
  };

  var _deepGetValue = function _deepGetValue(item) {
    if (typeof item.props !== "undefined") return _deepGetValue(item.props.children)
    else return item;
  }

  var _tabHash = _convert();

  var _onClick = function _onClick(e) {

    var value = e.currentTarget.innerText,
      index = _tabHash[value];

    _props.handleClick && _props.handleClick(e, index);

  };


  var _renderContainer = function _renderContainer() {

    if (typeof _items === "undefined") console.warn("items must be array.");

    else return React.createElement(
      "div",
      {
        className: "".concat(_preflxCls, "-root-container"),
      },
      _items.map((item, index) => {
        return React.createElement(
          "div",
          {
            key: "".concat(_preflxCls, "-root-container-item-", index),
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

  var _renderContentItems = function _renderContentItems() {
    if (_destory === false) return _children.map((item, index) => {
      return React.createElement(
        "div",
        {
          key: "".concat(_preflxCls, "-root-content-item-", index),
          className: _selectedIndex === index ? "".concat(_preflxCls, "-root-content-item") :
            "".concat(_preflxCls, "-root-content-item un-active"),
        },
        item
      );
    })
    else return React.createElement(
      "div",
      {
        key: "".concat(_preflxCls, "-root-content-item-", _selectedIndex),
        className: "".concat(_preflxCls, "-root-content-item")
      },
      _children[_selectedIndex]
    );
  }

  var _renderContent = function _renderContent() {
    if (_children.length !== _items.length)
      throw new Error("items countss is not match dom count.");
    return React.createElement(
      "div",
      {
        className: "".concat(_preflxCls, "-root-content"),
      },
      _renderContentItems()
    );
  };

  return React.createElement(
    "div",
    {
      className: _horizontal ? "".concat(_preflxCls, "-root") : "".concat(_preflxCls, "-root-vertical"),
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
  horizontal: true
};
var _default = TabControl;
export default _default;
