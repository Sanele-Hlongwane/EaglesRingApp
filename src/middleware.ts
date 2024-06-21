import { authMiddleware } from "@clerk/nextjs/server";

const middleware = authMiddleware({
  publicRoutes: ["/", "/api/webhooks/clerk", "/about", "/contact"],
});

export default middleware;

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
