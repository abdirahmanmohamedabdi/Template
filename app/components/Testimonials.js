/* This example requires Tailwind CSS v2.0+ */
const stats = [
    { label: 'Market Price Updates', value: 'Daily' },
    { label: 'Sustainable Growth Support', value: '100%' },
    { label: 'Real-Time Insights', value: '24/7' },
    { label: 'Target Farmers', value: '2M+' },
  ]
  
  export default function Testimonial() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1516619774863-467b60d05aa0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <div className="absolute inset-0  mix-blend-multiply" />
                <div className="absolute inset-0   opacity-90" />
                <div className="relative px-8">
                 
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                     
                     
                    </div>
  
                  
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
  {/* Content area */}
  <div className="pt-12 sm:pt-16 lg:pt-20">
    <h2 className="text-3xl text-two font-font font-extrabold tracking-tight sm:text-4xl">
      From Soil to Screen: Empowering Farmers Digitally
    </h2>
    <div className="mt-6 text-gray-500 space-y-6">
      <p className="text-lg font-font">
        KilimoChapChap is a cutting-edge mobile app revolutionizing agriculture by providing real-time data to
        farmers. This empowers them to make informed decisions for optimal resource allocation, risk mitigation,
        and profit maximization. With a focus on market prices, the app enhances farmers' business acumen and
        supports sustainable growth.
      </p>
    
      <p className="text-base font-font leading-7">
        The app's innovative features provide valuable data-driven strategies that drive success and foster
        growth. Embrace the power of technology with KilimoChapChap and revolutionize your agricultural journey.
      </p>
    </div>
  </div>

  {/* Stats section */}
  <div className="mt-10">
    <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
      {stats.map((stat) => (
        <div key={stat.label} className="border-t-2  border-gray-100 pt-6">
          <dt className="text-base font-medium font-font text-gray-500">{stat.label}</dt>
          <dd className="text-4xl font-extrabold tracking-tight text-two  font-font lg:text-2xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  </div>
</div>
</div>
</div>
</div>
    )
}
