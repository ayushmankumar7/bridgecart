export default function CTASection() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Try Our Social Commerce Solution Today.
              <br />
              {/* Get started in minutes with our easy-to-use platform */}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Our solution is designed to help small businesses like yours succeed in the competitive world of social commerce.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#footerSection"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    )
  }
  