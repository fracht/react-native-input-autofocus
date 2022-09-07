import React, { PropsWithChildren } from 'react';
import { NativeMethods } from 'react-native';
declare class Node<T> {
    value: T;
    next: Node<T> | null;
    id: number;
    constructor(value: T, next: Node<T> | null, id: number);
}
export declare class LinkedList<T> {
    private head;
    size: number;
    private getLastNode;
    get: (id: number) => Node<T> | null;
    push: (value: T) => number;
    remove: (id: number) => void;
}
export declare const InputFocusController: ({ children }: PropsWithChildren<{}>) => JSX.Element;
export declare const useInputFocusControllerContext: () => {
    register: (ref: React.RefObject<NativeMethods | undefined>) => number;
    unregister: (id: number) => void;
    createOnSubmitEditing: (id: number) => () => void;
};
export {};
