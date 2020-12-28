module.exports = () => {
  return async (ctx, next) => {
    // const {socket} = ctx;
    // const id = socket.id;
    // console.log(id)
    console.log('数据包')
    // socket.emit('res', 'packet!' + say);
    await next();
    console.log('packet response!');
  };
};