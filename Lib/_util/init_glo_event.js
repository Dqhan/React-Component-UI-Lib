const { __extend } = require('./core');

function GloEvent(props) {
    if (!(this instanceof GloEvent)) return new GloEvent(props);
    this.old = null;
    this.new = null;
    this.e = null;
    this.customParams = {};
    __extend(this, props);
};

export default GloEvent; 