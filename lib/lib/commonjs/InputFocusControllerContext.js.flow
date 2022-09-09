import { RefObject } from 'react';
import { TextInput } from 'react-native';
import { createSafeContext, useSafeContext } from '@sirse-dev/safe-context';
import { Node } from './InputFocusController';

type InputFocusControllerContextType = {
    register: (ref: RefObject<TextInput | undefined>) => Node<React.RefObject<TextInput | undefined>>;
    unregister: (node: Node<RefObject<TextInput | undefined>>) => void;
    createOnSubmitEditing: (node: Node<RefObject<TextInput | undefined>>) => () => void;
};
export const InputFocusControllerContext = createSafeContext<InputFocusControllerContextType>();

export const useInputFocusControllerContext = () => useSafeContext(InputFocusControllerContext);
