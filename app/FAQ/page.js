/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    question: "What is KilimoChapChap?",
    answer:
      "KilimoChapChap is an innovative mobile app designed to revolutionize agriculture. It provides farmers with real-time data, market price updates, and advanced tools to make informed decisions, manage resources efficiently, and enhance productivity..",
  },
  {
    question: "When will KilimoChapChap be available?",
    answer:
      "The app is currently in development and is expected to launch in Q4 2024. We are working hard to ensure it meets the highest standards and delivers valuable features to our users.",
  },
  {
    question: "How can I access KilimoChapChap?",
    answer:
      "Once launched, KilimoChapChap will be available for download on both the Apple App Store and Google Play Store. You can also access it through its dedicated website.",
  },
  {
    question: "Will KilimoChapChap be available in multiple languages?",
    answer:
      "Yes, KilimoChapChap will support multiple languages to accommodate a diverse user base and ensure accessibility for farmers across different regions.",
  },
  {
    question: "What features are included in the risk mitigation alerts?",
    answer:
      "Risk mitigation alerts will notify users of potential threats such as extreme weather conditions, pest outbreaks, or crop diseases, allowing farmers to take preventive measures.",
  },
  {
    question: "How can I help improve KilimoChapChap?",
    answer:
      "We appreciate your interest in helping us improve KilimoChapChap! Please fill out the forms available on our support page to provide your suggestions, feedback, or report any issues. Your input is crucial to making KilimoChapChap the best it can be.",
    // More questions...
  },
  {
    question: "What truly sets KilimoChapChap apart?",
    answer:
      "KilimoChapChap stands out for its comprehensive approach, which integrates profitability analysis, market transparency, and decision support. This unique combination makes it an innovative and superior alternative to traditional methods for addressing the challenges farmers face. By providing real-time data and advanced analytics, KilimoChapChap ensures accuracy and relevance, making it practical and effective for real-world agricultural use.",
    // More questions...
  },

  {
    question: "How does KilimoChapChap use AI?",
    answer:
      "KilimoChapChap stands out for its comprehensive approach, which integrates profitability analysis, market transparency, and decision support. This unique combination makes it an innovative and superior alternative to traditional methods for addressing the challenges farmers face. By providing real-time data and advanced analytics, KilimoChapChap ensures accuracy and relevance, making it practical and effective for real-world agricultural use.",
    // More questions...
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold font-font  text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg font-font text-gray-500">
              We’re excited to involve our community in the testing phase! To
              become a beta tester, sign up through our website or follow us on
              social media for announcements about beta testing opportunities.
              Beta testers will get early access to the app and the chance to
              provide valuable feedback. For more information, visit our{" "}
              <a
                href="/support"
                className="font-medium text-one font-font hover:text-two"
              >
                Support
              </a>{" "}
              page.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-font font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base  font-font text-gray-500">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
