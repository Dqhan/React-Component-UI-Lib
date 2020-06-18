import dialog from "./Dialog";
import button from "./Button";
import forms from "./Forms";
// Object.defineProperty(exports, "dialog", {
//     enumerable: true,
//     get: function get() {
//         return _version["default"];
//     }
// });

import confrim from "./Confrim";

export { dialog, button, forms, confrim };

if (typeof window !== "undefined") {
  console.warn("runtime must be window.");
}
