const sm = require('sitemap');
require('dotenv').config();
const list = require('../data/sitemap/sitemap.json');

function init() {
    const urls = list.map(l => {
        const obj = {};
        obj.url = l.url;
        obj.priority = l.priority;
        obj.lastmodrealtime = true;
        obj.lastmodfile = l.lastmodfile;
        return obj;
    })
    const sitemap = sm.createSitemap({
        hostname: process.env.HOST || "https://harrixon.space",
        cacheTime: 600000,        // 600 sec - cache purge period
        urls,
    });
    return sitemap;
}

module.exports = init;
