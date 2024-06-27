import { UserService } from './services/UserService';

(async () => {
  const userService = new UserService('mongodb');

  // Cadastro de usuário
  await userService.register('user', 'password');

  // Autenticação de usuário com autenticação básica
  const isAuthenticatedBasic = await userService.authenticate('user', 'password', 'basic');
  console.log(`Autenticação básica: ${isAuthenticatedBasic}`);

  // Autenticação de usuário com autenticação JWT
  const isAuthenticatedJwt = await userService.authenticate('user', 'jwtpassword', 'jwt');
  console.log(`Autenticação JWT: ${isAuthenticatedJwt}`);
})();
