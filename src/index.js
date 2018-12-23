const express = require('express');
const bodyParser = require('body-parser');
const { ContainerBuilder, JsonFileLoader } = require('node-dependency-injection');
const config = require('../config/config');
const logger = require('../config/winston').default;

const RoutesLoader = require('./utils/RoutesLoader');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const initServiceContainer = () => {
  const container = new ContainerBuilder();
  const loader = new JsonFileLoader(container);
  loader.load(`${process.cwd()}/config/service.container`);

  return container;
};

const loadRoutes = (container) => {
  const routesLoader = new RoutesLoader(app, container);
  return routesLoader.load();
};

const init = async () => {
  try {
    const container = initServiceContainer();
    await loadRoutes(container);

    app.listen(config.port, () => {
      logger.info(`App started at ${config.port}`);
    });
  } catch (error) {
    logger.error(error);
  }
};

init();
