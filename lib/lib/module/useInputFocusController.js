import { useEffect, useRef, useState } from 'react';
import { useInputFocusControllerContext } from './InputFocusControllerContext';
export const useInputFocusController = () => {
  const {
    register,
    unregister,
    createOnSubmitEditing
  } = useInputFocusControllerContext();
  const [node, setNode] = useState();
  const inputRef = useRef(null);
  useEffect(() => {
    const newNode = register(inputRef);
    setNode(newNode);
    return () => {
      unregister(newNode);
    };
  }, [register, unregister]);
  const [typedValue, setTypedValue] = useState('');
  const [returnKeyType, setReturnKeyType] = useState();
  useEffect(() => {
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
//# sourceMappingURL=useInputFocusController.js.map