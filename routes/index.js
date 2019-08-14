const express = require('express');
const router = express.Router();
const projectData = require('../data/projects/project_list.json');
// const metaTag = require('../data/metaTag/en_US.json');

// main content
router.get('/', function (req, res, next) {
	res.render('index', {
		page: 'landing',
		projectData: projectData,
		// meta: metaTag.homepage,
	});
});

projectData.forEach(project => {
	const projectURL = "/project/" + project.link;
	router.get(projectURL, function (req, res, next) {
		res.render('index', {
			page: 'project',
			projectData: project,
		});
	});
});

router.get('*', (req, res, next) => {
	res.redirect('/');
});

module.exports = router;
