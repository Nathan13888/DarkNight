const fs = require('fs');
const mustache = require('mustache');

const buildDir = `${__dirname}/../themes`;
const variables = require('./variables.json');
const template = JSON.stringify(require(`${__dirname}/template.json`));
const themeNames = [
	'darknight',
	'darknight-italic',
	'darknight-bold',
	'darknight-bold-better',
	'darknight-bold-italic'
];

let content, theme;
for (themeName of themeNames) {
	content = require(`${__dirname}/variants/${themeName}.json`);
	theme = mustache.render(template, { ...content, ...variables });
	fs.writeFileSync(`${buildDir}/${themeName}.json`, theme);
}
