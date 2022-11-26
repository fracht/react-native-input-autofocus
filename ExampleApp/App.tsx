import React from 'react';
import {StyleSheet, Pressable, Keyboard} from 'react-native';
import {TestPage} from './src/TestPage';

const App = () => {
  return (
    <Pressable
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={styles.background}>
      <TestPage />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
  },
});

export default App;
