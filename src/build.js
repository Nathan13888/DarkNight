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

let variant, compiled;

for (theme of themes) {
	variant = require(`${__dirname}/variants/${theme}.json`);
	compiled = tache.render(template, { ...variant, ...variables });
	fs.writeFileSync(`${buildDir}/${theme}.json`, compiled);
}

// const extra = require('./extras.json');
// for (theme of themes) {
// 	path = `${__dirname}/variants/${theme}`;
// 	variant = require(path + '.json');
// 	variant.name = `${variant.name} Extra`;
// 	fs.writeFile(path, JSON.stringify(variant), function writeJSON(err) {
// 		if (err) return console.log(err);
// 		console.log(JSON.stringify(variant));
// 		console.log('Writing to ' + path);
// 	});
// 	compiled = tache.render(template, { ...variant, ...variables, ...tache });
// 	fs.writeFileSync(`${buildDir}/${theme}-extra.json`, compiled);
// }