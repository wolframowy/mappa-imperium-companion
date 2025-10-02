import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("options", "routes/options.tsx"),
  route("intro", "routes/intro.tsx"),
] satisfies RouteConfig;
