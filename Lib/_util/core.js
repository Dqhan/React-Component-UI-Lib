var __rest = void 0 && (void 0).__rest || function (s, e) {
    var t = {};

    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

var __extend = void 0 && (void 0).__extend || function (s, e) {
    var t = {};

    for (var p in e) {
        if (Object.prototype.hasOwnProperty.call(e, p)) s[p] = e[p];
    }

    return t;
};

export {
    __rest,
    __extend
}