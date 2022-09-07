"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useInputFocusControllerContext = exports.LinkedList = exports.InputFocusController = void 0;

var _safeContext = require("@sirse-dev/safe-context");

var _react = _interopRequireWildcard(require("react"));

var _InputFocusControllerContext = require("./InputFocusControllerContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let uniqueId = 0;

const uuid = () => uniqueId++;

class Node {
  constructor(value, next, id) {
    this.value = value;
    this.next = next;
    this.id = id;
  }

}

class LinkedList {
  constructor() {
    _defineProperty(this, "head", null);

    _defineProperty(this, "size", 0);

    _defineProperty(this, "getLastNode", () => {
      if (this.size === 0) {
        return null;
      }

      let node = this.head;

      while (node.next !== null) {
        node = node.next;
      }

      return node;
    });

    _defineProperty(this, "get", id => {
      if (this.size === 0) {
        return null;
      }

      let node = this.head;

      while (node.next && node.id !== id) {
        node = node.next;
      }

      return node;
    });

    _defineProperty(this, "push", value => {
      const id = uuid();
      const node = new Node(value, null, id);

      if (this.size === 0) {
        this.head = node;
      } else {
        const lastNode = this.getLastNode();
        lastNode.next = node;
      }

      this.size++;
      return id;
    });

    _defineProperty(this, "remove", id => {
      if (this.size === 0) {
        return;
      }

      let prevNode = this.head,
          node = this.head;

      while (node.id !== id) {
        prevNode = node;

        if (!node.next) {
          throw new Error('hello');
        }

        node = node.next;
      }

      prevNode.next = node.next;
      this.size--;
    });
  }

}

exports.LinkedList = LinkedList;

const InputFocusController = _ref => {
  let {
    children
  } = _ref;
  const refs = (0, _react.useRef)(new LinkedList());
  const register = (0, _react.useCallback)(ref => {
    const id = refs.current.push(ref);
    return id;
  }, []);
  const unregister = (0, _react.useCallback)(id => {
    refs.current.remove(id);
  }, []);
  const createOnSubmitEditing = (0, _react.useCallback)(id => {
    return () => {
      var _currentRef$next;

      console.log(id);
      const currentRef = refs.current.get(id);
      const nextRef = currentRef === null || currentRef === void 0 ? void 0 : (_currentRef$next = currentRef.next) === null || _currentRef$next === void 0 ? void 0 : _currentRef$next.value;

      if (nextRef) {
        var _nextRef$current;

        (_nextRef$current = nextRef.current) === null || _nextRef$current === void 0 ? void 0 : _nextRef$current.focus();
      } else {
        var _currentRef$value$cur;

        currentRef === null || currentRef === void 0 ? void 0 : (_currentRef$value$cur = currentRef.value.current) === null || _currentRef$value$cur === void 0 ? void 0 : _currentRef$value$cur.blur();
      }
    };
  }, [refs]);
  return /*#__PURE__*/_react.default.createElement(_InputFocusControllerContext.InputFocusControllerContext.Provider, {
    value: {
      register,
      unregister,
      createOnSubmitEditing
    }
  }, children);
};

exports.InputFocusController = InputFocusController;

const useInputFocusControllerContext = () => (0, _safeContext.useSafeContext)(_InputFocusControllerContext.InputFocusControllerContext);

exports.useInputFocusControllerContext = useInputFocusControllerContext;
//# sourceMappingURL=InputFocusController.js.map