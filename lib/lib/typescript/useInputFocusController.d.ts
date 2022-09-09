import { RefObject } from 'react';
import { TextInput, ReturnKeyTypeOptions } from 'react-native';
declare type useInputFocusControllerReturnType = {
    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: () => void;
    ref: RefObject<TextInput>;
};
export declare const useInputFocusController: () => useInputFocusControllerReturnType;
export {};
