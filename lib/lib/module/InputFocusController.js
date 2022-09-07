function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { useSafeContext } from '@sirse-dev/safe-context';
import React, { useCallback, useRef } from 'react';
import { InputFocusControllerContext } from './InputFocusControllerContext';
let uniqueId = 0;

const uuid = () => uniqueId++;

class Node {
  constructor(value, next, id) {
    this.value = value;
    this.next = next;
    this.id = id;
  }

}

export class LinkedList {
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
export const InputFocusController = _ref => {
  let {
    children
  } = _ref;
  const refs = useRef(new LinkedList());
  const register = useCallback(ref => {
    const id = refs.current.push(ref);
    return id;
  }, []);
  const unregister = useCallback(id => {
    refs.current.remove(id);
  }, []);
  const createOnSubmitEditing = useCallback(id => {
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
  return /*#__PURE__*/React.createElement(InputFocusControllerContext.Provider, {
    value: {
      register,
      unregister,
      createOnSubmitEditing
    }
  }, children);
};
export const useInputFocusControllerContext = () => useSafeContext(InputFocusControllerContext);
//# sourceMappingURL=InputFocusController.js.map