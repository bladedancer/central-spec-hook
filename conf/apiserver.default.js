module.exports = {
	// The configuration settings for the OAS3 flow-node: API Server specification.
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'apiserver': {}
		}
	},
	apiserver: {
		url: "https://gmatthews.dev.ampc.axwaytest.net/apis",
		tenantId: "",
		kid: process.env.KID,
		sub: process.env.SUB,
		privateKey: process.env.PRIVATE_KEY,
	}
};
