/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
        <div className="py-16 bg-whiteoverflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-one font-semibold tracking-wide font-font uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold font-font tracking-tight text-gray-900 sm:text-4xl">
              Empowering Farmers, Enhancing Agriculture
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg font-font text-gray-500">
              At <strong className="font-font text-one">KilimoChapChap</strong>, we believe the future of farming lies in innovation, data-driven decisions, and accessible technology. Our mission is to empower small-scale farmers with the tools they need to thrive in a rapidly changing world.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                <h3 className="leading-6 text-one font-semibold font-font tracking-wide uppercase">Our Mission</h3>
                <p className="font-font">
                  Our mission is simple yet profound: to enable farmers to achieve greater productivity, sustainability, and profitability through cutting-edge technology. We aim to bridge the gap between traditional farming practices and modern technological advancements.
                </p>
                <ul role="list">
                  <li className="font-font">Real-Time Data & Analytics: Accurate, up-to-date information on soil health, weather conditions, and market trends.</li>
                  <li className="font-font">AI-Powered Solutions: Predict crop yields, provide detailed weather forecasts, and offer personalized recommendations.</li>
                  <li className="font-font">Market Transparency: Insights into market prices and trends to maximize profits and make informed selling decisions.</li>
                </ul>
                <h3 className="leading-6  font-semibold font-font text-one tracking-wide uppercase">Our Values</h3>
                <p className="font-font">
                  We are committed to innovation, sustainability, accessibility, and building a strong community of farmers for collective growth and improvement.
                </p>
                <h3 className="leading-6 text-one font-semibold tracking-wide font-font uppercase">Our Story</h3>
                <p className="font-font">
                  KilimoChapChap was born out of a deep understanding of the challenges that small-scale farmers face. Since our founding in 2021, we have grown into a trusted partner for farmers across Kenya, helping them achieve better yields and improve their livelihoods.
                </p>
              </div>
              <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="rounded-md shadow ml-4">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 sm:px-8"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
              </svg>
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <img
                    src="/logo.png"
                    alt="KilimoChapChap"
                    className="h-8"
                  />
                  <div className="relative text-lg text-gray-700 font-font font-medium mt-8">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative font-font ">
                      "I'm really looking forward to using KilimoChapChap. Dealing with unpredictable weather and market changes has always been tough. This app's promised features such as AI-powered insights and real-time data could make a huge difference for my farm. I think it’s going to help me plan better and improve my yields. Can’t wait to try it out!."
                    </p>
                  </div>
                </div>
                <cite className="relative flex items-center sm:items-start bg-one rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                  <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                    <img
                      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-two"
                      src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Farmer Testimonial"
                    />
                  </div>
                  <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                    <p className="text-white font-semibold font-font sm:inline">Wambui</p>{' '}
                    <p className="sm:inline text-two font-font ">Farmer</p>
                  </span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
  