
//use "npm i (package name)" in terminal to install package
const validator = require('validator')
const chalk = require('chalk');

console.log(validator.isEmail('ardikaas@gmail.com'))
console.log(validator.isMobilePhone('+628211812332', 'id-ID'))

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

console.log(`
  CPU: ${chalk.red('90%')}
  RAM: ${chalk.green('40%')}
  DISK: ${chalk.yellow('70%')}
`);