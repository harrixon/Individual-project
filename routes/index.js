const express = require('express');
const router = express.Router();
// const metaTag = require('../data/metaTag/en_US.json');
// const axios = require('axios');


// main content
router.get('/', function (req, res, next) {
	res.render('index', {
		mainPage: {
			homepage: true
		},
		subPage: "homepage",
		// meta: metaTag.homepage,
		// lang: toShortLocale[req.locale],
	});
});

router.get('*', (req, res, next) => {
	res.redirect('/');
});

module.exports = router;
