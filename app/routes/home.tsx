import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export default function Home({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return <Welcome />;
}
