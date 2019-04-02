const dataBase = require('../config/sql.js');
const config = require('../config/config.js');
const back = config.backData;
const home = {
  index:async (ctx, next) => {
    ctx.body = 'aini';
    await next();
  },
  login:async (ctx, next) => {
    ctx.body = 'llll'
    console.log(ctx.query.id);
  },
  zhuce:async (ctx, next) => {
    const user = {
      name: ctx.query.name,
      password: ctx.query.password,
    }
    await dataBase.findUserByName(ctx.query.name).then(async (result) => {
      if (result.length <= 0) {
        await dataBase.addUser([ctx.query.name, ctx.query.password]).then((res) => {
          back(ctx, {status:1, messages: '注册成功----'});
        }).catch((err) => {
          back(ctx, {status:0, messages: '注册失败，系统错误---'});
        })
      } else {
        back(ctx, {status:0, messages: '注册失败，用户已存在---'});
      }
    }).catch((err) => {
      back(ctx, {status:0, messages: '注册失败，系统错误---'});
    })
  }
}

module.exports = home;