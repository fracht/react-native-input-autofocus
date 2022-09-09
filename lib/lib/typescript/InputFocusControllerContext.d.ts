import { RefObject } from 'react';
import { NativeMethods } from 'react-native';
import { Node } from './InputFocusController';
declare type InputFocusControllerContextType = {
    register: (ref: RefObject<NativeMethods | undefined>) => Node<React.RefObject<NativeMethods | undefined>>;
    unregister: (node: Node<RefObject<NativeMethods | undefined>>) => void;
    createOnSubmitEditing: (node: Node<RefObject<NativeMethods | undefined>>) => () => void;
};
export declare const InputFocusControllerContext: import("@sirse-dev/safe-context").SafeContext<InputFocusControllerContextType>;
export declare const useInputFocusControllerContext: () => InputFocusControllerContextType;
export {};
