module.exports = ({ env }) => ({
	upload: {
		provider: 'cloudinary',
		providerOptions: {
			cloud_name: env('cloudinaryCDNName'),
			api_key: env('cloudinaryCDNKey'),
			api_secret: env('cloudinaryCDNSecret'),
		},
		breakpoints: {
			standard: 1920,
		}
	},
});
