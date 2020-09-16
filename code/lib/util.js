const chalk = require('chalk')

exports.erLog = contents => {
    console.log(chalk.red(contents))
}
