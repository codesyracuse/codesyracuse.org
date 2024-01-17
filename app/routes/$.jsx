import { useLoaderData } from "@remix-run/react";
import { getPage } from "~/lib/sanity/queries";
import { Section } from "~/components/sections";
import { throwNotFound } from "~/lib/redirects";

export async function loader({ params }) {
  const slug = params["*"];
  const { pageContent } = await getPage(slug);

  if (!pageContent) {
    throwNotFound(slug);
  }

  return { pageContent };
}

export const meta = ({ data }) => {
  if (!data?.pageContent) {
    return [
      { title: "Page not found | CODE Syracuse" },
      {
        name: "description",
        content: "We could not find the page you're looking for",
      },
    ];
  }
  const { pageContent } = data;

  return [
    { title: `${pageContent.internalTitle} | CODE Syracuse` },
    { name: "description", content: String(pageContent.metaDescription) },
  ];
};

export default function Index() {
  let { pageContent } = useLoaderData();

  return (
    <div key={pageContent._id}>
      {pageContent.title && (
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
          <h1 className="mt-4 block text-center text-3xl font-extrabold leading-8 tracking-tight text-brand-dark sm:text-4xl">
            {pageContent.title}
          </h1>
        </div>
      )}
      <div id="sections">
        {pageContent.sections?.map((section) => (
          <Section key={section._key} {...section} />
        ))}
      </div>
    </div>
  );
}
