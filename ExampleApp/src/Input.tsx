//#region example
import React, {useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useInputFocusController} from '@alcs/react-native-input-autofocus';

export const Input = (props: TextInputProps) => {
  const focusController = useInputFocusController();

  const [typedValue, setTypedValue] = useState('');

  return (
    <TextInput
      onChangeText={setTypedValue}
      value={typedValue}
      style={styles.input}
      {...focusController}
      {...props}
    />
  );
};
//#endregion

const styles = StyleSheet.create({
  input: {
    padding: 4,
    marginVertical: 1,
    borderRadius: 10,
    borderWidth: 1,
  },
});
