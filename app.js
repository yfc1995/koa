const Koa = require('koa');
const app = new Koa();
const router = require('./router/router.js');

app.use(router.routes());
app.listen(3000, '172.18.10.136' () => {
  console.log('The serve is Running');
})