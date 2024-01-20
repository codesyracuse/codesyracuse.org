import { SanityImage } from "~/components/sanity/Image";
import { SectionTitle } from "~/components/SectionTitle";
import { Layout } from "../layout";

export function Image({ title, image }) {
  return (
    <Layout>
      {title && <SectionTitle title={title} />}
      <SanityImage
        className="rounded-md mx-auto w-full object-scale-down shadow-lg lg:object-cover lg:object-center"
        value={image.asset}
        caption={image.caption}
      />
    </Layout>
  );
}

export function NoBorderImage({ title, image }) {
  return (
    <Layout>
      {title && <SectionTitle title={title} />}
      <SanityImage
        className="border-none shadow-none mx-auto w-full object-scale-down lg:object-cover lg:object-center"
        value={image.asset}
        caption={image.caption}
      />
    </Layout>
  );
}


