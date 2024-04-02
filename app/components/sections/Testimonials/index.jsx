import clsx from "clsx";
import { FullWidthLayout } from "../layout";
import { PersonImage } from "~/components/PersonImage";
import ProseableText from "~/components/sanity/ProseableText";
import { SectionTitle } from "~/components/SectionTitle";

export function Testimonials({ title, testimonialList }) {
  return (
    <FullWidthLayout>
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            {title && <SectionTitle title={title} />}
          </div>
          <div className=" mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 ">
            {/*xl:grid-flow-col xl:grid-cols-4 xl:mx-0 xl:max-w-none*/}
            {testimonialList.map((testimonial) => (
              <div
                className="space-y-8 xl:contents xl:space-y-0"
                key={testimonial.endorser._id}
              >
                <div className={("xl:row-start-1", "space-y-8")}>
                  <figure className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                    <blockquote className="text-gray-900">
                      <blockquote className="text-gray-900">
                        <ProseableText
                          value={testimonial.body}
                          classes="max-w-none"
                        />
                      </blockquote>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <PersonImage
                        person={testimonial.endorser}
                        className="h-10 w-10 rounded-full bg-gray-50"
                        alt={`photo of ${testimonial.endorser.name}`}
                      />
                      <div>
                        <div className="font-semibold">
                          {testimonial.endorser.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.endorserDescription}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FullWidthLayout>
  );
}
