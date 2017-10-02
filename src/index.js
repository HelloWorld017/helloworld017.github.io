const Koa = require('koa');

const chalk = require('chalk');
const mount = require('koa-mount');
const send = require('koa-send');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const dist = path.join(__dirname, '..', 'dist');
const files = path.join(__dirname, '..', 'public');
const port = process.env.PORT || '3000';

app
	.use(mount('/dist', serve(dist, {maxage: 1000 * 60 * 24})))
	.use(serve(files, {maxage: 1000 * 60 * 24}))
	.use(ctx => {
		ctx.response.type = 'text/html';
		return send(ctx, 'index.html');
	})
	.listen(port, () => console.log(chalk.cyan(`Listening on port ${port}`)));
