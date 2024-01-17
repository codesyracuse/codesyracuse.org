import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import * as Sentry from "@sentry/remix";
import { NotFound, ServerError } from ".";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  Sentry.captureException(error);
  return <ServerError />;
}
