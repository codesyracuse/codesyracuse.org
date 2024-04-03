import ProseableText from "~/components/sanity/ProseableText";
import { Layout, FullWidthLayout } from "../layout";
import { SectionTitle } from "~/components/SectionTitle";

export function Content({ title, content, TitleComponent = SectionTitle }) {
  return (
    <Layout>
      {title && <TitleComponent title={title} />}
      <div className="overflow-hidden">
        <div className="prose prose-lg mx-auto">
          <ProseableText value={content} />
        </div>
      </div>
    </Layout>
  );
}

export function FullWidthContent({ title, content }) {
  return (
    <FullWidthLayout>
      {title && <SectionTitle title={title} />}
      <div className="overflow-hidden">
        <div className="prose prose-lg mx-auto prose-headings:first:mt-0 lg:max-w-none">
          <ProseableText value={content} />
        </div>
      </div>
    </FullWidthLayout>
  );
}
