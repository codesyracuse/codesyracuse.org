import * as Sentry from "@sentry/remix";
/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import { PassThrough } from "node:stream";

import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";

export function handleError(error, { request }) {
  Sentry.captureRemixServerException(error, "remix.server", request);
}

Sentry.init({
  dsn: "https://78f56b31a22697f0a28e215936070aa2@o4506592648364032.ingest.sentry.io/4506592649674752",
  tracesSampleRate: 1,
});

const ABORT_DELAY = 5_000;

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return isbot(request.headers.get("user-agent") || "")
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      );
}

function handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        onAllReady() {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          console.error(error);
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}

function handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        onShellReady() {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error);
          responseStatusCode = 500;
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
