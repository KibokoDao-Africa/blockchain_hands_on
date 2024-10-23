import 'dotenv/config';

const config = {
	APP: {
		PORT: process.env.PORT,
		RPC_URL: process.env.RPC_URL,
		SERVER_URL: process.env.SERVER_URL,
	},
	ETH: {
		WALLET_ADDRESS: process.env.WALLET_ADDRESS,
		PRIVATE_KEY: process.env.PRIVATE_KEY,
	},
};

export { config };
