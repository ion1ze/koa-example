const Koa = require("koa");
const app = new Koa();

const SERVER_PORT = 5000;

app.use(async (ctx,next)=>{
  console.log(`Process ${ctx.request.method}:${ctx.request.url}`);
  await next();
});

app.use((ctx)=>{
  ctx.body = "HelloWorld";
});

app.listen(SERVER_PORT,()=>{
  console.log(`Server running on port: ${SERVER_PORT} .`);
});