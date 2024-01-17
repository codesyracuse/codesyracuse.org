export function throwNotFound(slug) {
  throwIfMatchesRedirectRules(slug);

  throw new Response("Not found", {
    status: 404,
    statusText: "Not found",
  });
}
const throwIfMatchesRedirectRules = (slug) => {
  if (!slug.startsWith("/")) {
    slug = "/" + slug;
  }
};
