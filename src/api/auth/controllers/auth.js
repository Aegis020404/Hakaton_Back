const jwt = require('jsonwebtoken');

module.exports = {
  async login(ctx) {
    const { username, password } = ctx.request.body;

    // Находим пользователя по логину и паролю
    // const user = await User.findOne({ login: username, password });

    if (!user) {
      return ctx.throw(401, 'Invalid login or password');
    }

    // Генерируем JWT-токен с помощью секретного ключа
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });

    // Отправляем JWT-токен в куки
    ctx.cookies.set('jwt', token, { httpOnly: true });

    return { message: 'Success' };
  },
};
