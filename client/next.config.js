const withTM = require('next-transpile-modules')([
	'@jbkr/components',
	'@jbkr/models-react',
	'gsap',
	'prop-types',
]);

module.exports = withTM({
	// 'debug': true,
});

/* const path = require('path');

module.exports = withTM({
	'webpack': (config, options) => {
		if (options.isServer) {
			config.externals = ['react', ...config.externals];
		}
		config.resolve.alias['react'] =
			path.resolve(__dirname, '.', 'node_modules', 'react');

		return config;
	},
}); */
module.exports.images = {
	'domains': ['res.cloudinary.com'],
};
