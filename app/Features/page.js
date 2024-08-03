/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ClockIcon,
  ChartBarIcon,
  BellIcon,
  TranslateIcon,
  CashIcon,
  TrendingUpIcon,
  PhoneIcon,
  ViewBoardsIcon,
  SunIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Real-Time Data Access",
    description:
      "Stay updated with the latest agricultural data,including weather forecasts, soil conditions, and crop health indicators. Real-time information helps farmers make timely decisions",
    icon: ClockIcon,
  },
  {
    name: "Market Price Updates",
    description:
      "Get daily updates on market prices for various crops and livestock. This feature helps farmers understand current market trends and set competitive prices",
    icon: ViewBoardsIcon,
  },
  {
    name: "Risk Mitigation Alerts",
    description:
      " Receive alerts about potential risks such as extreme weather events, pest outbreaks, or diseases",
    icon: BellIcon,
  },
  {
    name: " Data-Driven Insights",
    description:
      "Access detailed analytics and reports based on collected data to enhance farming practices and strategies",
    icon: TrendingUpIcon,
  },
  {
    name: "Multilingual Support",
    description:
      "Available in multiple languages to cater to diverse linguistic needs.",
    icon: TranslateIcon,
  },
  {
    name: "Sustainability Tracking",
    description:
      "Track and measure sustainability efforts to ensure environmentally friendly practices",
    icon: SunIcon,
  },
];

export default function Example() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold font-font text-gray-900 tracking-tight sm:text-4xl">
          Features of KilimoChapChap.
        </p>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-one rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-font font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base  font-font text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
