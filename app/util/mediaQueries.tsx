export function getMdQuery() {
  if (typeof window === "undefined") {
    return null;
  }
  return window.matchMedia("(max-width: 48rem)");
}

export function getLgQuery() {
  if (typeof window === "undefined") {
    return null;
  }
  return window.matchMedia("(max-width: 64rem)");
}
