import { config } from './config.js';
import { app } from './app.js';

if (!config.APP.PORT) {
	console.log('PORT is not defined in .env file');
	process.exit(1);
}

// Create & Start Server
const port = config.APP.PORT || 5000;
const server = app.listen(port, async () => {
	console.log(
		`✅ BlockPlate started at:  ${config.APP.SERVER_URL}${port} ✅  Happy Coding! 🚀 `
	);
});

// Unhandled Rejections
process.on('unhandledRejection', (err) => {
	console.log('UNHANDLED SERVER REJECTION! 💥 Shutting down...');
	console.log(err.name, err.message);
	server.close(() => {
		process.exit(1);
	});
});

// Uncaught Exceptions
process.on('uncaughtException', (err) => {
	console.log('UNCAUGHT EXCEPTION! 💥 App Shutting down...');
	console.log(err.name, err.message);
	process.exit(1);
});
