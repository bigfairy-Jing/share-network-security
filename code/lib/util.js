const chalk = require('chalk')
const xss = require('xss')

exports.escapeFormat = (str) => {
    if (!str) return '';
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#39;");
    return str;
  };

exports.erLog = contents => {
    console.log(chalk.red(contents))
}


exports.xssFormat = str => xss(str)