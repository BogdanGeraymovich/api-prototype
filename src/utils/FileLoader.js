const glob = require('glob-promise');

module.exports = class FileLoader {
  constructor(directory) {
    this.directory = directory;
  }

  loadFiles() {
    return glob(`${this.directory}/**/*.js`);
  }
};
