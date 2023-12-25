import React from "react";

export const FAQS = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
              Be Innovative
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Reteach</span>
            </span>{" "}
            Learning Management System
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium text-white">
                What is Reteach?
              </p>
              <p className="text-white">
                Reteach is a comprehensive Learning Management System (LMS)
                designed to facilitate online learning experiences for both
                Hindi and English medium schools.
                <br />
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium text-white">
                How does Reteach cater to Hindi medium schools?
              </p>
              <p className="text-white">
                Reteach offers specialized classes in Hindi medium, ensuring
                quality education in the Hindi language.
                <br />
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium text-white">
                Is Reteach suitable for English medium schools as well?
              </p>
              <p className="text-white">
                Absolutely! Reteach provides a dedicated platform for English
                medium schools, delivering content in English for a seamless
                learning experience.{" "}
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-medium text-white">
                Can schools choose both Hindi and English medium classes on
                Reteach?
              </p>
              <p className="text-white">
                Yes, schools have the flexibility to choose classes based on
                their medium preferences, be it Hindi, English, or a mix of
                both.
                <br />
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium text-white">
                How can schools integrate Reteach into their curriculum?
              </p>
              <p className="text-white">
                Integrating Reteach into your curriculum is simple. Contact our
                support team, and they will guide you through the process.
                <br />
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-medium text-white">
                Is Reteach suitable for remote learning?
              </p>
              <p className="text-white">
                Yes, Reteach is designed for both classroom and remote learning,
                providing flexibility in any learning environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
