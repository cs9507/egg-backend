module.exports = () => {
  return async (ctx, next) => {
    const {socket,service} = ctx;
    const say = await service.user.say();
    socket.emit('res', 'packet!' + say);
    await next();
    console.log('packet response!');
  };
};