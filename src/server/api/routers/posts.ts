import {createTRPCRouter, publicProcedure,} from "n/server/api/trpc";

export const postsRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        const posts = ctx.prisma.post.findMany()
        console.log("Posts", posts)
        return posts
    }),
});
