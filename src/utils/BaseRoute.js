const { Router } = require('express');

module.exports = class BaseRoute {
  constructor() {
    this.router = Router();
  }

  static getRouter() {
    throw new Error('Method is not implemented');
  }
};
