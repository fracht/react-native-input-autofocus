import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'input-autofocus',
    description: 'Support for next input focusing functionality.',
    base: '/react-native-input-autofocus/',
    themeConfig: {
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/fracht/react-native-input-autofocus',
            },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Aleksandras Bogdanovas',
        },
    },
});
