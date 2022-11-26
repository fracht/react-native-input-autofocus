import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from './Input';
import {InputFocusController} from '@alcs/react-native-input-autofocus';

export const TestPage = () => {
  return (
    <InputFocusController>
      <View style={styles.container}>
        <Input placeholder="Input 1" />
        <Input placeholder="Input 2" />
        <Input placeholder="Input 3" />
        <Input placeholder="Input 4" />
      </View>
    </InputFocusController>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
});
