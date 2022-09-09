"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInputFocusControllerContext = exports.InputFocusControllerContext = void 0;

var _safeContext = require("@sirse-dev/safe-context");

const InputFocusControllerContext = (0, _safeContext.createSafeContext)();
exports.InputFocusControllerContext = InputFocusControllerContext;

const useInputFocusControllerContext = () => (0, _safeContext.useSafeContext)(InputFocusControllerContext);

exports.useInputFocusControllerContext = useInputFocusControllerContext;
//# sourceMappingURL=InputFocusControllerContext.js.map