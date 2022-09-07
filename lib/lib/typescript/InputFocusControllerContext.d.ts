import { RefObject } from 'react';
import { NativeMethods } from 'react-native';
declare type InputFocusControllerContextType = {
    register: (ref: RefObject<NativeMethods | undefined>) => number;
    unregister: (id: number) => void;
    createOnSubmitEditing: (id: number) => () => void;
};
export declare const InputFocusControllerContext: import("@sirse-dev/safe-context").SafeContext<InputFocusControllerContextType>;
export {};
