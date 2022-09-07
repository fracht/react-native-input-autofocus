const {makeMetroConfig} = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = makeMetroConfig({
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: true,
			},
		}),
	},
	projectRoot: __dirname,
	resolver: {
		resolveRequest: MetroSymlinksResolver(),
		resolverMainFields: ['react-native', 'browser', 'main'],
	},
});
