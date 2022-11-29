# @alcs/react-native-input-autofocus

> Best solution for your react-native application

## Introduction

This package simplifies the focus system on the next input.

<table>
<thead>
<tr>
<th>
IOS
</th>
<th>
Android
</th>
</tr>
</thead>
<tbody>
<tr>
<td>

![Example](./assets/iosExample.gif){width=100%, height=100%}

</td>
<td>

![Example](./assets/androidExample.gif){width=100%, height=100%}

</td>
</tr>
</tbody>

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

## USAGE

-   Create or add to your `<Input />` component.

```tsx{3,6,14}
import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { useInputFocusController } from '@alcs/react-native-input-autofocus';

export const Input = (props: TextInputProps) => {
    const focusController = useInputFocusController();

    const [typedValue, setTypedValue] = useState('');

    return (
        <TextInput
            onChangeText={setTypedValue}
            value={typedValue}
            {...focusController}
            {...props}
        />
    );
};
```

-   Wrap component where you want to add auto focus.

```tsx{4,8,15}
import React from 'react';
import { Input } from './Input';
import { View } from 'react-native';
import { InputFocusController } from '@alcs/react-native-input-autofocus';

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
