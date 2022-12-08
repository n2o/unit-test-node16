module.exports = {
    async hello(ctx, next) {
      // called by GET /public
      ctx.body = 'Hello World!'; // A JSON can also be sent.
    },
  };