import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ postContent: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const user = ctx.session.user
      const { id } = await ctx.prisma.post.create({ data: { text: input.postContent, authorId: user.id } })
      return id
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
