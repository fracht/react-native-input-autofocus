function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useCallback, useRef } from 'react';
import { InputFocusControllerContext } from './InputFocusControllerContext';
export class Node {
  constructor(value) {
    _defineProperty(this, "value", void 0);

    _defineProperty(this, "next", void 0);

    _defineProperty(this, "prev", void 0);

    this.value = value;
    this.next = null;
    this.prev = null;
  }

}

class DoublyLinkedList {
  constructor() {
    _defineProperty(this, "head", null);

    _defineProperty(this, "tail", null);

    _defineProperty(this, "push", value => {
      let newNode = new Node(value);

      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        return this.tail;
      }

      this.head = newNode;
      this.tail = newNode;
      return this.tail;
    });

    _defineProperty(this, "removeAt", node => {
      if (this.head === node && node === this.tail) {
        this.head = null;
        this.tail = null;
        return undefined;
      }

      if (this.head === node) {
        this.head = this.head.next;
        return null;
      }

      if (this.tail === node) {
        var _this$tail;

        this.tail = this.tail.prev;

        if ((_this$tail = this.tail) !== null && _this$tail !== void 0 && _this$tail.next) {
          this.tail.next = null;
        }

        return undefined;
      }

      if (node.next != null) {
        node.next.prev = node.prev;
      }

      if (node.prev != null) {
        node.prev.next = node.next;
      }

      return undefined;
    });
  }

}

export const InputFocusController = _ref => {
  let {
    children
  } = _ref;
  const refs = useRef(new DoublyLinkedList());
  const register = useCallback(ref => {
    const node = refs.current.push(ref);
    return node;
  }, []);
  const unregister = useCallback(node => {
    refs.current.removeAt(node);
  }, []);
  const createOnSubmitEditing = useCallback(node => {
    return () => {
      if (node.next) {
        var _node$next$value$curr;

        (_node$next$value$curr = node.next.value.current) === null || _node$next$value$curr === void 0 ? void 0 : _node$next$value$curr.focus();
      } else {
        var _node$value$current;

        (_node$value$current = node.value.current) === null || _node$value$current === void 0 ? void 0 : _node$value$current.blur();
      }
    };
  }, [refs]);
  return /*#__PURE__*/React.createElement(InputFocusControllerContext.Provider, {
    value: {
      register,
      unregister,
      createOnSubmitEditing
    }
  }, children);
};
//# sourceMappingURL=InputFocusController.js.map