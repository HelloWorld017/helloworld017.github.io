const Koa = require('koa');

const chalk = require('chalk');
const send = require('koa-send');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const dist = path.join(__dirname, '..', 'dist');
const layout = path.join(__dirname, '..', 'index.html');
const port = process.env.PORT || '3000';

app
	.use(serve(dist, {maxAge: 1000 * 60 * 24}))
	.use(ctx => {
		ctx.response.type = 'text/html';
		send(ctx, layout);
	})
	.listen(port, () => console.log(chalk.cyan(`Listening on port ${port}`)));
