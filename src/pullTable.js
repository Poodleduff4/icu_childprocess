const {exec} = require('childprocess')


export function pullTable(command) {
  exec("bash bash/command.sh " + command);
}