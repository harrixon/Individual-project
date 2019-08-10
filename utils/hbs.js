const hbs = require('hbs');
const hbsutils = require('hbs-utils')(hbs);
const path = require('path');

function HBS() {

    const partialsPath = path.join(__dirname, '../views/partials');
    hbsutils.registerPartials(partialsPath);
    hbsutils.registerWatchedPartials(partialsPath);

    hbs.registerHelper('ifEquals', function (arg1, arg2) {
        return (arg1 === arg2);
    });
    // hbs.registerHelper('ifSelected', function (arg1, arg2) {
    //     return (arg1 === arg2) ? 'selected="selected"' : null;
    // });
    // hbs.registerHelper('for', function (arg1, block) {
    //     let accu = "";
    //     arg1.forEach(e => accu += block.fn(e));
    //     return accu;
    // });
    // hbs.registerHelper('render', function (arg1, arg2, block) {
    //     return (arg1 === arg2) ? block.fn() : null;
    // });
    // hbs.registerHelper('showSubNav', function (arg1, block, args) {
    //     if (arg1.hihotels) { return block.fn(); }
    //     else if (arg1.hidestinations) { return block.fn(); }
    //     else { return null; }
    // });
    // hbs.registerHelper('raw-helper', function (options) {
    //     return options.fn();
    // });
}

module.exports = HBS;
