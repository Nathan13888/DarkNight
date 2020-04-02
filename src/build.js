const fs = require('fs');
const mustache = require('mustache');

const buildDir = `${__dirname}/../themes`;
const variables = require('./variables.json');
const template = JSON.stringify(require(`${__dirname}/template.json`));
const themes = [
	'darknight',
	'darknight-italic',
	'darknight-bold',
	'darknight-better-bold',
	'darknight-bold-italic'
];

let content, theme;
for (theme of themes) {
	content = require(`${__dirname}/variants/${theme}.json`);
	theme = mustache.render(template, { ...content, ...variables });
	fs.writeFileSync(`${buildDir}/${theme}.json`, theme);
}
