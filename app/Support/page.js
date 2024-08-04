"use client";
import { PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Support = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-3xl font-extrabold font-font text-gray-900 tracking-tight sm:text-4xl">
            How to Support Us
          </h2>
          <p className="mt-4 text-lg font-font leading-6 text-gray-600">
            Your support helps us grow and continue our mission. Choose one of the following options to get involved.
          </p>
        </div>

        <div className="mt-12">
          <ul className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            <li className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold font-font text-gray-800">General Inquiry</h3>
              <p className="mt-3 text-base font-font text-gray-600">
                Have a general question? Use this form to get in touch.
              </p>
              <a href="https://fchwklwlc9b.typeform.com/to/WFFgjBQe" target="_blank">
                <a className="mt-4 inline-flex font-font items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-two hover:bg-one">
                  Fill Out The Form
                </a>
              </a>
            </li>

           

            <li className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold font-font text-gray-800">Feedback and Suggestions</h3>
              <p className="mt-3 text-base font-font text-gray-600">
                We value your input. Let us know how we can improve.
              </p>
              <a href="/Contact">
                <a className="mt-4 font-font inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  bg-two hover:bg-one">
                  Share Feedback
                </a>
              </a>
            </li>

           

            <li className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold font-font text-gray-800">Beta Testing</h3>
              <p className="mt-3 text-base font-font text-gray-600">
                Interested in trying out new features? Join our beta testing program.
              </p>
              <a href="Contact">
                <a className="mt-4 inline-flex font-font items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  bg-two hover:bg-one">
                  Apply Now
                </a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
