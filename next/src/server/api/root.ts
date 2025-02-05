import { agentRouter } from "./routers/agentRouter";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  agent: agentRouter,
});

export type AppRouter = typeof appRouter;
