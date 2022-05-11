const usuariosControlador = require('./usuarios-controlador');

const passport = require('passport');

module.exports = app => {
  app
    .route('/usuario')
    .post(
      passport.authenticate('bearer', { session: false }),
      usuariosControlador.adiciona)
    .get(
      passport.authenticate('bearer', { session: false }),
      usuariosControlador.lista);

  app.route('/usuario/:id').delete(
    passport.authenticate('bearer', { session: false }),
    usuariosControlador.deleta);

  app.route('/usuario/login').post(
    passport.authenticate('local', { session: false }), 
    usuariosControlador.login
  );
};
