/* eslint-disable max-len */
/* prettier-ignore */

import { redirect } from "@remix-run/node";

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
  if (redirectRules[slug]) {
    throw redirect(redirectRules[slug], 302);
  }
};

const redirectRules = {
  "/programs/mentorship": "/mentorship", // new site doesn't have a /programs
};
