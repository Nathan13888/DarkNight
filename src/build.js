const fs = require('fs');
const mustache = require('mustache');

const buildDir = `${__dirname}/../themes`;
const variables = require('./variables.json');
const template = JSON.stringify(require(`${__dirname}/template.json`));
const themes = [
	'darknight',
	'darknight-italic',
	'darknight-bold',
	'darknight-extra-bold',
	'darknight-bold-italic'
];

let variant, compiled;
for (theme of themes) {
	variant = require(`${__dirname}/variants/${theme}.json`);
	compiled = mustache.render(template, { ...variant, ...variables });
	fs.writeFileSync(`${buildDir}/${theme}.json`, compiled);
}
