"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInputFocusController = void 0;

var _react = require("react");

var _InputFocusControllerContext = require("./InputFocusControllerContext");

const useInputFocusController = () => {
  const {
    register,
    unregister,
    createOnSubmitEditing
  } = (0, _InputFocusControllerContext.useInputFocusControllerContext)();
  const [node, setNode] = (0, _react.useState)();
  const inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    const newNode = register(inputRef);
    setNode(newNode);
    return () => {
      unregister(newNode);
    };
  }, [register, unregister]);
  const [typedValue, setTypedValue] = (0, _react.useState)('');
  const [returnKeyType, setReturnKeyType] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (node !== null && node !== void 0 && node.next) {
      setReturnKeyType('go');
    }

    setTypedValue('done');
  }, [node]);
  return {
    onSubmitEditing: node && createOnSubmitEditing(node),
    returnKeyType: returnKeyType,
    ref: inputRef
  };
};

exports.useInputFocusController = useInputFocusController;
//# sourceMappingURL=useInputFocusController.js.map