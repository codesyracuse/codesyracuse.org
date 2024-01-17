import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { captureRemixErrorBoundaryError } from "@sentry/remix";
import stylesheet from "~/tailwind.css";
import { NotFound, ServerError } from "./components/errors";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { getNavigation } from "~/lib/sanity/queries";

export async function loader() {
  const { mainNavigation, footerNavigation } = await getNavigation();

  return { mainNavigation, footerNavigation };
}

export const meta = () => [{ title: "CODE Syracuse" }];

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  const { mainNavigation } = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header mainNavigation={mainNavigation} />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status !== 404) {
    captureRemixErrorBoundaryError(error);
  }

  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header />
        <main>
          {isRouteErrorResponse(error) &&
            (error.status === 404 ? <NotFound /> : <ServerError />)}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}