import {RefObject} from 'react';
import {NativeMethods} from 'react-native';
import {createSafeContext} from '@sirse-dev/safe-context';

type InputFocusControllerContextType = {
	register: (ref: RefObject<NativeMethods | undefined>) => number;
	unregister: (id: number) => void;
	createOnSubmitEditing: (id: number) => () => void;
};
export const InputFocusControllerContext = createSafeContext<InputFocusControllerContextType>();
