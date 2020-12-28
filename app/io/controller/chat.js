module.exports = app => {
  class Controller extends app.Controller {
    async ping(ctx) {
      const nsp = app.io.of('/');
      const message = this.ctx.args[0];
      try{
        const { target, payload } = message;
        if (!target) return;
        const {msg} = payload
        nsp.emit(target, msg);
      }catch(error){
        console.log(error)
      }
    }
  }
    return Controller
  };