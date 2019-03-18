const Koa = require('koa');
const app = new Koa();


app.use(async (ctx, next) => {
  console.log(1)
  ctx.body = "hello world";
  await next();
});
app.use(async (ctx, next) => {
  console.log(2);
});
app.use(async (ctx, next) => {
  console.log(3);
});
  
app.listen(3000,() => {
  console.log('The serve is Running');
})