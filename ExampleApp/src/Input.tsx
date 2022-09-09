import {
  Node,
  useInputFocusControllerContext,
} from '@alcs/react-native-input-autofocus';
import React, {useEffect, useRef, useState} from 'react';
import {
  NativeMethods,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';

type InputProps = TextInputProps;

export const Input = ({...other}: InputProps) => {
  const {register, unregister, createOnSubmitEditing} =
    useInputFocusControllerContext();

  const [node, setNode] =
    useState<Node<React.RefObject<NativeMethods | undefined>>>();

  const inputRef = useRef<NativeMethods>(null);

  useEffect(() => {
    const newNode = register(inputRef);
    setNode(newNode);

    return () => {
      unregister(newNode);
    };
  }, [register, unregister]);

  const [typedValue, setTypedValue] = useState('');
  useEffect(() => {
    if (typedValue === 'del' && node) {
      unregister(node);
    }
  });

  return (
    <TextInput
      style={styles.input}
      value={typedValue}
      onChangeText={setTypedValue}
      ref={inputRef}
      returnKeyType="go"
      blurOnSubmit={false}
      onSubmitEditing={node && createOnSubmitEditing(node)}
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
