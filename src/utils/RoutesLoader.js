const _ = require('lodash');
const path = require('path');
const FileLoader = require('./FileLoader');

module.exports = class RoutesLoader extends FileLoader {
  constructor(application, container) {
    super(`${process.cwd()}/src/routes`);
    this.application = application;
    this.container = container;
  }

  async load() {
    try {
      const routes = await this.loadFiles();

      return this.registerRoutes(routes);
    } catch (error) {
      throw new Error(`Can't load routes! ${error}`);
    }
  }

  registerRoutes(routes) {
    _.forEach(routes, (route) => {
      this.registerRoute(route);
    });
  }

  registerRoute(route) {
    const filename = path.basename(route);
    const routePath = _.first(filename.split('.'));
    const Router = require(route);
    const routeInstance = new Router(this.container.get(`${routePath}Controller`));

    this.application.use(`/api/${routePath}`, routeInstance.getRouter());
  }
};
