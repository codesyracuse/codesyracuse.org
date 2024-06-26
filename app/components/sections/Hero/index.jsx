import React from "react";
import { FullWidthLayout } from "../layout";
import ProseableText from "~/components/sanity/ProseableText";
import { SanityImage } from "~/components/sanity/Image";
import { pagePath } from "~/lib/utils";

export function Hero({ image, title, description, cta, secondaryCta }) {
  return (
    <FullWidthLayout className="bg-brand-dark">
      <div className="relative isolate min-h-[30svh] px-6 pt-14 md:min-h-[60svh] lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="to-bg-brand-dark relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] overflow-hidden bg-gradient-to-tr from-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {title && (
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  {title}
                </h1>
              )}
              {description && (
                <ProseableText
                  value={description}
                  classes="prose-xl mt-6 prose-invert"
                />
              )}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {cta && (
                  <a
                    href={pagePath(cta)}
                    className="h-9 rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
                  >
                    {cta.target?.title || cta.title}
                  </a>
                )}
                {secondaryCta?.target && (
                  <a
                    href={pagePath(secondaryCta)}
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    {secondaryCta.target?.title || secondaryCta.title}{" "}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3FE15A] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </FullWidthLayout>
  );
}

export function BoringHero({ image, title, description, cta, secondaryCta }) {
  return (
    <FullWidthLayout>
      <div className="relative min-h-[30svh] bg-gray-300 md:min-h-[60svh]">
        {/* Decorative image and overlay */}
        {image && (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden"
            >
              <SanityImage
                className=" h-full w-full object-cover object-center"
                value={image.asset}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-700 opacity-60"
            />
          </>
        )}

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-8 text-center sm:py-36 lg:px-0">
          {title && (
            <h1 className="py-8 text-4xl font-bold tracking-tight text-white lg:text-6xl">
              {title}
            </h1>
          )}
          {description && (
            <ProseableText
              value={description}
              classes="prose-2xl prose-invert"
            />
          )}
          {cta && (
            <a
              href={pagePath(cta)}
              className="h-9 rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
            >
              {cta.target?.title || cta.title}
            </a>
          )}
          {secondaryCta?.target && (
            <a
              href={pagePath(secondaryCta)}
              className="text-sm font-semibold leading-6 text-white"
            >
              {secondaryCta.target?.title || secondaryCta.title}{" "}
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </FullWidthLayout>
  );
}
