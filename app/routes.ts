import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("options", "routes/options.tsx"),
  route("intro", "routes/intro.tsx"),
  route("play-overview", "routes/playOverview.tsx"),
  route("era-1", "routes/era1.tsx"),
  route("era-2", "routes/era2.tsx"),
  route("era-3", "routes/era3.tsx"),
  route('era-4', 'routes/era4.tsx'),
  route('era-5', 'routes/era5.tsx'),
  route('era-6', 'routes/era6.tsx'),
  route('special-rules', 'routes/specialRules.tsx')
] satisfies RouteConfig;
