import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {useInputFocusController} from '@alcs/react-native-input-autofocus';

export const Input = (other: TextInputProps) => {
  const {register, ref, onSubmitEditing, returnKeyType} =
    useInputFocusController();

  useEffect(() => {
    register();
  }, [register]);

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
    padding: 4,
    marginVertical: 1,
    borderRadius: 10,
    borderWidth: 1,
  },
});
