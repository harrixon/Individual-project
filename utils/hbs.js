const hbs = require('hbs');
const hbsutils = require('hbs-utils')(hbs);
const path = require('path');

function HBS() {

    // watch partials in `partial` folder
    hbsutils.registerPartials(path.join(__dirname, '../views/partials'));
    hbsutils.registerWatchedPartials(path.join(__dirname, '../views/partials'));
    // watch partials in `component` folder
    hbsutils.registerPartials(path.join(__dirname, '../views/partials/components'));
    hbsutils.registerWatchedPartials(path.join(__dirname, '../views/partials/components'));
    // watch partials in `pages` folder
    hbsutils.registerPartials(path.join(__dirname, '../views/partials/pages'));
    hbsutils.registerWatchedPartials(path.join(__dirname, '../views/partials/pages'));

    hbs.registerHelper('ifEquals', function (arg1, arg2) {
        return (arg1 === arg2);
    });
    // hbs.registerHelper('ifSelected', function (arg1, arg2) {
    //     return (arg1 === arg2) ? 'selected="selected"' : null;
    // });
    hbs.registerHelper('for', function (array, block) {
        let accu = "";
        array.forEach(e => accu += block.fn(e));
        return accu;
    });
    hbs.registerHelper('inArray', function (array, index, block) {
        return block.fn(array[parseInt(index)].file);
    });
    hbs.registerHelper('render', function (arg1, arg2, block) {
        return (arg1 === arg2) ? block.fn(this) : null;
    });
    // hbs.registerHelper('showSubNav', function (arg1, block, args) {
    //     if (arg1.hihotels) { return block.fn(); }
    //     else if (arg1.hidestinations) { return block.fn(); }
    //     else { return null; }
    // });
    // hbs.registerHelper('raw-helper', function (options) {
    //     return options.fn();
    // });
    hbs.registerHelper('log', function (arg1) {
        console.log(typeof(arg1));
        console.log(arg1);
    });
}

module.exports = HBS;
