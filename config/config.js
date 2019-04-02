const backData = (ctx, data) => {
  data = JSON.stringify(data);
  ctx.body = data;
}


module.exports = {
  backData,
}