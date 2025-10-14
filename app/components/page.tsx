import type { PropsWithChildren } from "react";

export default function Page({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-5 w-full">{children}</div>;
}
