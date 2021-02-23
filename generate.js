const fs = require('fs');
const { startCase } = require('lodash');
const [, , type, name] = process.argv;
const capitalisedName = startCase(name);
const folderPath = `_${type}/${name}`;

function createFiles() {
  fs.mkdirSync(folderPath);
  fs.writeFileSync(`${folderPath}/_${name}.scss`, `.${capitalisedName} {\n\n}`);
  fs.writeFileSync(
    `${folderPath}/${name}.html`,
    `<div class="${capitalisedName}-container">\n</div>`
  );
}

function addImports() {
  fs.appendFileSync(
    `_sass/_${type}.scss`,
    `@import '../${folderPath}/${name}'`
  );
}

createFiles();
addImports();
