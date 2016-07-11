#!/usr/bin/env node --harmony
const shell = require('shelljs');
const program = require('commander')

function execute(domainname, country) {
  shell.exec(`sslfie -c ${country ? country : 'US'} -o ${domainname}.crt -k ${domainname}.key www.${domainname} ${domainname}`);
  shell.exec(`sudo security add-trusted-cert -d -r trustRoot -k $HOME/Library/Keychains/login.keychain ${domainname}.crt`);
}

program
  .version('1.0.0')
  .arguments('<domainname> [country]')
  .action(execute)
  .parse(process.argv);
