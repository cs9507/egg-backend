'use strict';
module.exports = () => {
    return async (ctx, next) => {
      const {socket} = ctx;
      const query = socket.handshake.query;
      const say = await ctx.service.user.say();
          // 用户信息
      const { auth } = query;
      console.log(auth)
      socket.emit('res', 'auth!' + say);
      await next();
      console.log('disconnect!');
    };
  };