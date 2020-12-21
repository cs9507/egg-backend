module.exports =  app => {
    const {io} = app;
    console.log('router')
    app.io.of('/').route('chat', app.io.controller.chat.ping);

    // app.io.of('/chat').route('chat', io.controller.chat.index);
  };