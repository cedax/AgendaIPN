const  { writeFile } = require('fs');
const fs = require('fs');
const { argv } = require('yargs');
require('dotenv').config();

let credencialesFirebase = fs.readFileSync(process.env["CREDENCIALES_FIREBASE"]);

const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   firebase: ${credencialesFirebase}
};
`;

writeFile(targetPath, environmentFileContent, function (err:any) {
   if (err) {
      console.log(err);
   }
});