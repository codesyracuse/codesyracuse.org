import { Layout } from "../layout";
export function PageHeader({ text }) {
  return (
    <Layout>
      {text && (
        <div className="max-w-2xl pt-6 sm:px-6 lg:px-8 ">
          <h1 className="mt-4 block text-center text-3xl font-extrabold leading-8 tracking-tight text-brand-dark sm:text-4xl">
            {text}
          </h1>
        </div>
      )}
    </Layout>
  );
}
