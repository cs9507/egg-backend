const Controller = require("egg").Controller;

function toInt(str) {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.model.User.findAll();
  }
}
module.exports = UserController;