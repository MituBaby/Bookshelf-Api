const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const config = require('./config');

const init = async () => {
  const server = Hapi.server(config.server);

  server.route(routes);

  try {
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  } catch (error) {
    console.error('Gagal memulai server Hapi:', error);
    process.exit(1);
  }
};

init();
