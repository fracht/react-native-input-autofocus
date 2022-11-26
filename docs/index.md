# @alcs/react-native-input-autofocus

> Best solution for your react-native application

## Introduction

This package simplifies the focus system on the next input.

<table>
<td>

![Example](./assets/inputFocusExample.gif){width=100%, height=100%}

</td>
<td>

![Example](./assets/inputFocusExample.gif){width=100%, height=100%}

</td>
</table>

## Installation

-   Using npm

```
npm i @alcs/react-native-input-autofocus
```

-   Using yarn

```
yarn add @alcs/react-native-input-autofocus
```

-   Using pnpm

```
pnpm add @alcs/react-native-input-autofocus
```

## API

-   Create or add to your `<Input />` component.

```

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
      ref={ref}
      blurOnSubmit={false}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      {...other}
    />
  );
};

```

-   Wrap component where you want to add auto focus.

```

import React from 'react';
import {Input} from './Input';
import {View} from 'react-native';
import {InputFocusController} from '@alcs/react-native-input-autofocus';

export const YourPage = () => {
  return (
    <InputFocusController>
      <View>
        <Input placeholder="Input 1" />
        <Input placeholder="Input 2" />
        <Input placeholder="Input 3" />
        <Input placeholder="Input 4" />
      </View>
    </InputFocusController>
  );
};

```
