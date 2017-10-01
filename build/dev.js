const package = require('../package.json');
const exec = require('child_process').exec;
const fs = require('fs');

exec('git rev-parse --verify --short HEAD', (error, commit) => {
  if (!error) {
    exec(('git show -s --format=%ct ' + commit), (error, epoch) => {
      if (!error) {
        const time = new Date(epoch * 1000).toISOString().replace(/\W/g, '');
        package.version = (package.version + '-dev.' + time + '.' + commit).replace(/\r?\n|\r/g, '');
        fs.writeFile('./package.json', JSON.stringify(package), 'utf8', (error) => {
          if (error) {
            throw error;
          }
          return console.log('package.json set to ' + package.version);
        });
      } else {
        throw error;
      }
    });
  } else {
    throw error;
  }
});