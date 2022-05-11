const postsControlador = require('./posts-controlador');
const passport = require('passport');

module.exports = app => {
  app
    .route('/post')
    .get(
      passport.authenticate('bearer', { session: false }),
      postsControlador.lista)
    .post(passport.authenticate('bearer', { session: false }),
      postsControlador.adiciona);
};
