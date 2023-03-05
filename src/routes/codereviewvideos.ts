import { Context } from "koa";
import Router from "koa-router";

const router = new Router();

router.post(`/codereviewvideos`, async (ctx: Context) => {
  try {
    console.log("CONTEXT", ctx.request.body);
    ctx.status = 201;
    ctx.body = {
      games: ctx.request.body
    };
  } catch (err) {
    console.error(err);
  }
});

export default router;
