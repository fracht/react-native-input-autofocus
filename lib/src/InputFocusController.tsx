import React, { PropsWithChildren, RefObject, useCallback, useRef } from 'react';
import { TextInput } from 'react-native';

import { InputFocusControllerContext } from './InputFocusControllerContext';

export class Node<T> {
    public value: T;
    public next: Node<T> | null;
    public prev: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    public push = (value: T) => {
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
    };

    public remove = (node: Node<T>) => {
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
            this.tail = this.tail.prev;
            if (this.tail?.next) {
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
    };
}

export const InputFocusController = ({ children }: PropsWithChildren<{}>) => {
    const refs = useRef(new DoublyLinkedList<RefObject<TextInput | undefined>>());

    const register = useCallback((ref: RefObject<TextInput | undefined>) => {
        const node = refs.current.push(ref);
        return node;
    }, []);

    const unregister = useCallback((node: Node<RefObject<TextInput | undefined>>) => {
        refs.current.remove(node);
    }, []);

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
        [refs]
    );

    return (
        <InputFocusControllerContext.Provider value={{ register, unregister, createOnSubmitEditing }}>
            {children}
        </InputFocusControllerContext.Provider>
    );
};
