import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, ReturnKeyTypeOptions } from 'react-native';
import { Node } from './DoublyLinkedList';
import { useInputFocusControllerContext } from './InputFocusControllerContext';

export type UseInputFocusControllerBag = {
    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: () => void;
    ref: RefObject<TextInput>;
    register: () => () => void;
};

export const useInputFocusController = (): UseInputFocusControllerBag => {
    const { register, createOnSubmitEditing, unregister } =
        useInputFocusControllerContext();

    const [node, setNode] =
        useState<Node<React.RefObject<TextInput | undefined>>>();

    const inputRef = useRef<TextInput>(null);

    const [returnKeyType, setReturnKeyType] = useState<ReturnKeyTypeOptions>();

    useEffect(() => {
        if (node?.next) {
            setReturnKeyType('go');
            return;
        }
        setReturnKeyType('done');
    }, [node]);

    const handleRegister = useCallback(() => {
        const node = register(inputRef);
        setNode(node);

        return () => {
            unregister(node);
        };
    }, [register, unregister]);

    return {
        onSubmitEditing: node && createOnSubmitEditing(node),
        returnKeyType: returnKeyType,
        ref: inputRef,
        register: handleRegister,
    };
};
