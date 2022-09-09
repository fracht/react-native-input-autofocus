import { RefObject, useEffect, useRef, useState } from 'react';
import { TextInput, ReturnKeyTypeOptions } from 'react-native';
import { Node } from './DoublyLinkedList';
import { useInputFocusControllerContext } from './InputFocusControllerContext';

type useInputFocusControllerReturnType = {
    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: () => void;
    ref: RefObject<TextInput>;
};

export const useInputFocusController = (): useInputFocusControllerReturnType => {
    const { register, unregister, createOnSubmitEditing } = useInputFocusControllerContext();

    const [node, setNode] = useState<Node<React.RefObject<TextInput | undefined>>>();

    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        const newNode = register(inputRef);
        setNode(newNode);

        return () => {
            unregister(newNode);
        };
    }, [register, unregister]);

    const [typedValue, setTypedValue] = useState('');

    const [returnKeyType, setReturnKeyType] = useState<ReturnKeyTypeOptions>();
    useEffect(() => {
        if (node?.next) {
            setReturnKeyType('go');
        }
        setTypedValue('done');
    }, [node]);

    return {
        onSubmitEditing: node && createOnSubmitEditing(node),
        returnKeyType: returnKeyType,
        ref: inputRef,
    };
};
