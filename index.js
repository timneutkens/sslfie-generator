#!/usr/bin/env node
const shell = require('shelljs');
const program = require('commander');

function execute (domainname, country) {
  shell.cd(program.output);
  shell.exec(`sslfie -c ${country ? country : 'US'} -o ${domainname}.crt -k ${domainname}.key www.${domainname} ${domainname}`);
  shell.exec(`sudo security add-trusted-cert -d -r trustRoot -k $HOME/Library/Keychains/login.keychain ${domainname}.crt`);
}

program
  .version('1.0.1')
  .arguments('<domainname> [country]')
  .option('-o, --output <output>', 'Output directory', './')
  .action(execute)
  .parse(process.argv);