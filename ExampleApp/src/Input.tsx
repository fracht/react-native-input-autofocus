import React, {useEffect, useRef, useState} from 'react';
import {
  NativeMethods,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';
import {useInputFocusControllerContext} from '@alcs/react-native-input-autofocus';

type InputProps = TextInputProps;

export const Input = ({...other}: InputProps) => {
  const {register, unregister, createOnSubmitEditing} =
    useInputFocusControllerContext();

  const [inputIndex, setInputIndex] = useState(0);
  const inputRef = useRef<NativeMethods>(null);

  useEffect(() => {
    const index = register(inputRef);
    setInputIndex(index);

    return () => {
      unregister(index);
    };
  }, [register, unregister]);

  return (
    <TextInput
      style={styles.input}
      ref={inputRef}
      blurOnSubmit={false}
      onSubmitEditing={createOnSubmitEditing(inputIndex)}
      {...other}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 1,
    borderRadius: 10,
    borderWidth: 1,
  },
});
