module.exports = app => {
    const {io,router,controller} = app;
    io.of('/').route('/im/new-message',app.io.controller.default.newMessage)
}