require('isomorphic-fetch');
const express = require('express');
const cookieParser = require('cookie-parser');
const next = require('next');
const cheerio = require('cheerio');
const fs = require('fs');
const proxy = require('http-proxy-middleware');
const Configs = require('./src/config/index');
const Helpers = require('./src/functions/helpers');
const routes = require('./src/routes');
const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dir: `./src`, dev});
const handle = routes.getRequestHandler(app);

const authChecker = (req, res, next) => {
	if (req.cookies.token || req.path === Configs.loginPath || Helpers.isExceptionUrl(req.path)) {
		next();
	} else {
		res.redirect(Configs.loginPath);
	}
};

app.prepare().then(() => {
	const server = express();
	server.use(cookieParser());
	server.use('/api', proxy({target: dev ? Configs.api_dev : Configs.api_prod, changeOrigin: true, logLevel: 'debug'}));
	server.get('/rewrite', (req, res) => {
		const url = req.query.url;
		return fetch(url).then(response => response.text()).then(data => {
			let domain = new URL(url);
			data = data.replace(/<\s*script[^>]*[^\/]>(.*?)<\s*\/\s*script\s*>/isugm, '');
			data = data.replace(/<\s*script\s*>(.*?)<\s*\/\s*script\s*>/isugm, '');
			data = data.replace(/<\s*noscript[^>]*[^/]>(.*?)<\s*\/\s*noscript\s*>/isugm, '');
			data = data.replace(/<\s*noscript\s*>(.*?)<\s*\/\s*noscript\s*>/isugm, '');
			const $ = cheerio.load(data);

			$("img").each(function () {
				let oldSrc = $(this).attr("src") || $(this).attr("data-src");
				if ($(this).length && oldSrc && !Helpers.isBase64Img(oldSrc) && !Helpers.isLink(oldSrc)) $(this).attr("src", `${domain.origin}/${oldSrc.replace(/^\/+/, "")}`);
			});

			$("link").each(function () {
				let oldSrc = $(this).attr("href");
				if ($(this).length && oldSrc && !Helpers.isLink(oldSrc)) $(this).attr("href", `${domain.origin}/${oldSrc.replace(/^\/+/, "")}`);
			});

			$("a").each(function () {
				let oldSrc = $(this).attr("href");
				if ($(this).length && oldSrc && !Helpers.isLink(oldSrc)) $(this).attr("href", `${domain.origin}/${oldSrc.replace(/^\/+/, "")}`);
			});

			res.send($.html())
		});
	});
	server.use(authChecker);
	server.use(handle);
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(` > Ready on http://localhost:${port}`)
	})
});
