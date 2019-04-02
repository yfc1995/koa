const router = require('koa-router')();
const home = require('./home.js');

router.get('/', home.index);
// router.get('/login', home.login);
router.get('/register', home.zhuce);
// console.log(home.zhuce);
module.exports = router;