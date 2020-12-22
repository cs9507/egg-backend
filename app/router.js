module.exports =  app => {
    const {io} = app;
    console.log('router')
    app.io.of('/').route('/', app.io.controller.chat.ping);
  };