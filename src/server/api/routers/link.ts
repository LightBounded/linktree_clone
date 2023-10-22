import { createTRPCRouter, publicProcedure } from "../trpc";

export const linkRouter = createTRPCRouter({
  get: publicProcedure.query(({ ctx }) => {
    return ctx.db.link.findMany();
  }),
});
