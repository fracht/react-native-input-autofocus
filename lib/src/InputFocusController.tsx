/* eslint-disable @typescript-eslint/naming-convention */
import React, {
    PropsWithChildren,
    RefObject,
    useCallback,
    useRef,
} from 'react';
import { TextInput } from 'react-native';
import { DoublyLinkedList, Node } from './DoublyLinkedList';

import { InputFocusControllerContext } from './InputFocusControllerContext';

export const InputFocusController = ({ children }: PropsWithChildren<{}>) => {
    const references = useRef(
        new DoublyLinkedList<RefObject<TextInput | undefined>>()
    );

    const register = useCallback(
        (reference: RefObject<TextInput | undefined>) => {
            const node = references.current.push(reference);
            return node;
        },
        []
    );
    //TODO add unregister functionality
    const unregister = useCallback(
        (node: Node<RefObject<TextInput | undefined>>) => {
            references.current.remove(node);
        },
        []
    );

    const createOnSubmitEditing = useCallback(
        (node: Node<RefObject<TextInput | undefined>>) => {
            return () => {
                if (node.next) {
                    node.next.value.current?.focus();
                } else {
                    node.value.current?.blur();
                }
            };
        },
        []
    );

    return (
        <InputFocusControllerContext.Provider
            value={{ register, unregister, createOnSubmitEditing }}
        >
            {children}
        </InputFocusControllerContext.Provider>
    );
};
