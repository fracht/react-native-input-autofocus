# @alcs/react-native-input-autofocus

This package simplifies the focus system on the next input.

<table>
<thead>
<tr>
<th>
iOS
</th>
<th>
Android
</th>
</tr>
</thead>
<tbody>
<tr>
<td>

![Example](https://raw.githubusercontent.com/fracht/react-native-input-autofocus/75d9ef95574f1a1b59c3d40fc7845c9a29de6b7d/docs/assets/iosExample.gif)
</td>
<td>

![Example](https://raw.githubusercontent.com/fracht/react-native-input-autofocus/75d9ef95574f1a1b59c3d40fc7845c9a29de6b7d/docs/assets/androidExample.gif)

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

## Usage

-   Create or add to your `<Input />` component.

```tsx
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

```tsx
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

## License

MIT © [Aleksandras Bogdanovas <aleksandras.bogdanovas21@gmail.com>](https://github.com/Aleksandriukas)
