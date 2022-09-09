import { RefObject } from 'react';
import { NativeMethods } from 'react-native';
import { createSafeContext, useSafeContext } from '@sirse-dev/safe-context';
import { Node } from './InputFocusController';

type InputFocusControllerContextType = {
    register: (ref: RefObject<NativeMethods | undefined>) => Node<React.RefObject<NativeMethods | undefined>>;
    unregister: (node: Node<RefObject<NativeMethods | undefined>>) => void;
    createOnSubmitEditing: (node: Node<RefObject<NativeMethods | undefined>>) => () => void;
};
export const InputFocusControllerContext = createSafeContext<InputFocusControllerContextType>();

export const useInputFocusControllerContext = () => useSafeContext(InputFocusControllerContext);
