'use strict';
module.exports = () => {
    return async (ctx, next) => {

      console.log('权限校验,暂无处理')
      await next();
      console.log('disconnect!');
    };
  };