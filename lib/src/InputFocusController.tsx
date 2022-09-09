import { useSafeContext } from '@sirse-dev/safe-context';
import React, { PropsWithChildren, RefObject, useCallback, useRef } from 'react';
import { NativeMethods } from 'react-native';
import { DoublyLinkedList, Node } from './DoublyLinkedList';

import { InputFocusControllerContext } from './InputFocusControllerContext';

export const InputFocusController = ({ children }: PropsWithChildren<{}>) => {
    const refs = useRef(new DoublyLinkedList<RefObject<NativeMethods | undefined>>());

    const register = useCallback((ref: RefObject<NativeMethods | undefined>) => {
        const node = refs.current.push(ref);
        return node;
    }, []);

    const unregister = useCallback((node: Node<RefObject<NativeMethods | undefined>>) => {
        refs.current.remove(node);
    }, []);

    const createOnSubmitEditing = useCallback(
        (node: Node<RefObject<NativeMethods | undefined>>) => {
            return () => {
                if (node.next) {
                    node.next.value.current?.focus();
                } else {
                    node.value.current?.blur();
                }
            };
        },
        [refs]
    );

    return (
        <InputFocusControllerContext.Provider value={{ register, unregister, createOnSubmitEditing }}>
            {children}
        </InputFocusControllerContext.Provider>
    );
};
