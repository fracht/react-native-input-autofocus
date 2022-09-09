import {useInputFocusController} from '@alcs/react-native-input-autofocus';
import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

type InputProps = TextInputProps & {
  enableAutoFocus?: boolean;
};

export const Input = ({enableAutoFocus = true, ...other}: InputProps) => {
  const {register, ref, onSubmitEditing, returnKeyType} =
    useInputFocusController();

  useEffect(() => {
    if (enableAutoFocus) {
      return register();
    }

    return;
  }, [enableAutoFocus, register]);

  const [typedValue, setTypedValue] = useState('');

  return (
    <TextInput
      onChangeText={setTypedValue}
      value={typedValue}
      style={styles.input}
      ref={ref}
      blurOnSubmit={false}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
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
