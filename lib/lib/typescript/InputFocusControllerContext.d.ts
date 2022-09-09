import { RefObject } from 'react';
import { TextInput } from 'react-native';
import { Node } from './InputFocusController';
declare type InputFocusControllerContextType = {
    register: (ref: RefObject<TextInput | undefined>) => Node<React.RefObject<TextInput | undefined>>;
    unregister: (node: Node<RefObject<TextInput | undefined>>) => void;
    createOnSubmitEditing: (node: Node<RefObject<TextInput | undefined>>) => () => void;
};
export declare const InputFocusControllerContext: import("@sirse-dev/safe-context").SafeContext<InputFocusControllerContextType>;
export declare const useInputFocusControllerContext: () => InputFocusControllerContextType;
export {};
