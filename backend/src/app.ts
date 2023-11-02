import Express from 'express';
import routes from './routes';

const main = async () => {
	const app = Express();
	app.use(Express.json());
	app.use(routes);
	app.listen(8000);
};

main()
	.then(() => {
		console.log('server started');
	})
	.catch((err) => console.log(err));
