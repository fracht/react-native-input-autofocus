import { PropsWithChildren } from 'react';
export declare class Node<T> {
    value: T;
    next: Node<T> | null;
    prev: Node<T> | null;
    constructor(value: T);
}
export declare const InputFocusController: ({ children }: PropsWithChildren<{}>) => JSX.Element;
