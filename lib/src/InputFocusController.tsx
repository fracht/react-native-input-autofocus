import { useSafeContext } from '@sirse-dev/safe-context';
import React, { PropsWithChildren, RefObject, useCallback, useRef } from 'react';
import { NativeMethods } from 'react-native';

import { InputFocusControllerContext } from './InputFocusControllerContext';

let uniqueId = 0;
const uuid = () => uniqueId++;

class Node<T> {
    constructor(public value: T, public next: Node<T> | null, public id: number) {}
}

export class LinkedList<T> {
    private head: Node<T> | null = null;
    public size = 0;

    private getLastNode = () => {
        if (this.size === 0) {
            return null;
        }

        let node = this.head!;

        while (node.next !== null) {
            node = node.next;
        }

        return node;
    };

    public get = (id: number) => {
        if (this.size === 0) {
            return null;
        }

        let node = this.head!;

        while (node.next && node.id !== id) {
            node = node.next;
        }

        return node;
    };

    public push = (value: T): number => {
        const id = uuid();
        const node = new Node(value, null, id);

        if (this.size === 0) {
            this.head = node;
        } else {
            const lastNode = this.getLastNode()!;

            lastNode.next = node;
        }

        this.size++;
        return id;
    };

    public remove = (id: number) => {
        if (this.size === 0) {
            return;
        }

        let prevNode = this.head!,
            node = this.head!;

        while (node.id !== id) {
            prevNode = node;
            if (!node.next) {
                throw new Error('hello');
            }
            node = node.next;
        }

        prevNode.next = node.next;

        this.size--;
    };
}

export const InputFocusController = ({ children }: PropsWithChildren<{}>) => {
    const refs = useRef(new LinkedList<RefObject<NativeMethods | undefined>>());

    const register = useCallback((ref: RefObject<NativeMethods | undefined>) => {
        const id = refs.current.push(ref);
        return id;
    }, []);

    const unregister = useCallback((id: number) => {
        refs.current.remove(id);
    }, []);

    const createOnSubmitEditing = useCallback(
        (id: number) => {
            return () => {
                console.log(id);
                const currentRef = refs.current.get(id);
                const nextRef = currentRef?.next?.value;
                if (nextRef) {
                    nextRef.current?.focus();
                } else {
                    currentRef?.value.current?.blur();
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

export const useInputFocusControllerContext = () => useSafeContext(InputFocusControllerContext);
