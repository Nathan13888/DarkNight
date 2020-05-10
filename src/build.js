const fs = require('fs');
const tache = require('mustache');

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

if(!fs.existsSync(buildDir)) fs.mkdirSync(buildDir);

let variant, compiledTheme, writeDir;
for (theme of themes) {
	variant = require(`${__dirname}/variants/${theme}.json`);
	writeDir = `${buildDir}/${theme}.json`;
	compiledTheme = tache.render(template, { ...variant, ...variables });
	fs.writeFileSync(writeDir, compiledTheme);
}
