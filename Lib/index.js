import dialog from './Dialog';
import button from './Button';
// Object.defineProperty(exports, "dialog", {
//     enumerable: true,
//     get: function get() {
//         return _version["default"];
//     }
// });

export {
    dialog,
    button
}

if (typeof window !== 'undefined') {
    console.warn('runtime must be window.');
}