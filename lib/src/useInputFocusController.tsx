import { RefObject, useEffect, useRef, useState } from 'react';
import { TextInput, ReturnKeyTypeOptions } from 'react-native';
import { Node } from './DoublyLinkedList';
import { useInputFocusControllerContext } from './InputFocusControllerContext';

export type UseInputFocusControllerBag = {
    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: () => void;
    ref: RefObject<TextInput>;
    blurOnSubmit: boolean;
};

export const useInputFocusController = (): UseInputFocusControllerBag => {
    const { register, createOnSubmitEditing, unregister } =
        useInputFocusControllerContext();

    const [node, setNode] =
        useState<Node<React.RefObject<TextInput | undefined>>>();

    const inputReference = useRef<TextInput>(null);

    const [returnKeyType, setReturnKeyType] = useState<ReturnKeyTypeOptions>();

    useEffect(() => {
        if (node?.next) {
            setReturnKeyType('go');
            return;
        }
        setReturnKeyType('done');
    }, [node]);

    useEffect(() => {
        const node = register(inputReference);
        setNode(node);

        return () => {
            unregister(node);
        };
    }, [register, unregister]);

    return {
        onSubmitEditing: node && createOnSubmitEditing(node),
        returnKeyType: returnKeyType,
        ref: inputReference,
        blurOnSubmit: returnKeyType === 'done',
    };
};
