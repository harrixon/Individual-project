/**
 * 
 * app entrance
 * 
 */
const express = require('express');
const app = express();
// const cors = require('cors');
// app.use(cors({ "origin": "*", }));
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

/**
 * 
 * DEV settings
 * 
 * use dev js instead of bundled ver in prod
 * 
 */

if (app.get('env') === 'development') {
	// js not bundled on local, serve app.js instead
	const expressBrowserify = require('express-browserify');
	app.get('/javascripts/bundle-min.js', expressBrowserify(['./public/javascripts/app.js'], {
		watch: true,
	}));
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * 
 * Template engine handlebars / hbs
 * 
 * hbs helper function lies in utils folder
 * includes
 * 	-- data handling / mapping / sorting / filtering
 *  -- i18n function
 * 
 */

const hbs = require("./utils/hbs")();
app.set('view engine', 'hbs');


/**
 *
 * SASS
 * also see README
 * 
 */
const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
	src: path.join(__dirname, 'public'),
	dest: path.join(__dirname, 'public'),
	indentedSyntax: false,
	sourceMap: true,
	outputStyle: 'compressed',
	debug: true,
}));

/**
 *
 * Sitemap
 * 
 */
const SITEMAP = require("./utils/sitemap");
const sitemap = SITEMAP();

/**
 *
 * Routing
 * 
 */
/* serving sitemap */
app.get('/sitemap.xml', function (req, res) {
	sitemap.toXML(function (err, xml) {
		if (err) {
			return res.status(500).end();
		}
		res.header('Content-Type', 'application/xml');
		res.send(xml);
	});
});

// Note: you must place sass-middleware *before* `express.static` or else it will not work.
app.use(express.static(path.join(__dirname, 'public')));

/* normal routing */
// const apiRouter = require('./routes/api');
// app.use("/api", apiRouter);

const indexRouter = require('./routes/index');
app.use("/", indexRouter);

// error handler
app.use(function (err, req, res, next) {
	console.log(err.message)
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen("8080");

module.exports = app;
