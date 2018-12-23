const BaseRoute = require('../utils/BaseRoute');

module.exports = class UserRoute extends BaseRoute {
  constructor(controller) {
    super();
    this.controller = controller;
  }

  getRouter() {
    this.router.get('/', this.controller.get.bind(this.controller));
    this.router.get('/:id', this.controller.getById.bind(this.controller));

    return this.router;
  }
};
