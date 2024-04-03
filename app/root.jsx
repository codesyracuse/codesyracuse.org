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
import { useLocation } from "react-router-dom";

import stylesheet from "~/tailwind.css";
import { NotFound, ServerError } from "./components/errors";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { getNavigation } from "~/lib/sanity/queries";

export async function loader() {
  const { mainNavigation } = await getNavigation();
  const env = {
    // ENVs defined here will be added to window.ENV for client side secrets
    MAILCHIMP_FORM_URL: process.env.MAILCHIMP_FORM_URL,
  };

  return { mainNavigation, env };
}

export const meta = () => [{ title: "CODE Syracuse" }];

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export default function App() {
  const { mainNavigation, env } = useLoaderData();
  const location = useLocation();
  const onHomePage = location.pathname === "/";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header mainNavigation={mainNavigation} onHomePage={onHomePage} />
        <Outlet />
        <Footer mailchimpFormUrl={env.MAILCHIMP_FORM_URL} />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(env)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
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
