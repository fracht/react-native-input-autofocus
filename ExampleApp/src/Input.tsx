import {useInputFocusController} from '@alcs/react-native-input-autofocus';
import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

type InputProps = TextInputProps;

export const Input = ({...other}: InputProps) => {
  const {ref, onSubmitEditing, returnKeyType} = useInputFocusController();

  return (
    <TextInput
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
