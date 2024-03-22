import ProseableText from "~/components/sanity/ProseableText";
import { FullWidthLayout } from "../layout";
import { SectionTitle } from "~/components/SectionTitle";

export function Features({ title, content }) {
  return (
    <FullWidthLayout>
      {false && title && <SectionTitle title={title} />}
      <div
        id="programs"
        className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
      >
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Our Programs
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-600 sm:mt-4">
              Our programs give students and early-career professionals
              opportunities to connect with and learn from mentors and
              professionals in the Syracuse tech community.
            </p>
          </div>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="/programs/mentorship" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Mentor Ship
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-600">
                      The program pairs professional engineers with members of
                      the Syracuse public who are looking to grow their careers
                      or break into the industry.
                    </p>
                    <div className="mt-5 font-bold text-blue-500">
                      <a href="/programs/mentorship">Learn More</a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1573165067541-4cd6d9837902?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="/programs/events" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Community Events
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-600">
                      We aim to gather professional or aspiring devs together to
                      chat, learn from each other, and build out stronger
                      networksgg.
                    </p>
                    <div className="mt-5 font-bold text-blue-500">
                      <a href="/programs/events">Learn More</a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80g"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Much more in store!
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-600">
                      We're just getting started and have a lot more exciting
                      things coming your way
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullWidthLayout>
  );
}
