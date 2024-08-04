"use client";
import React, { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const [state, handleSubmit] = useForm("xnnadwvv"); // Replace with your Formspree ID

  if (state.succeeded) {
    setShowNotification(true);
    setTimeout(() => {
      router.push("/");
    }, 3000); // Redirect after 3 seconds
  }

  return (
    <div className="relative bg-white">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-sm font-font text-black">
            First name
          </label>
          <input
            type="text"
            name="first-name"
            id="first-name"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-two focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last-name" className="block text-sm font-font text-black text-gray-700">
            Last name
          </label>
          <input
            type="text"
            name="last-name"
            id="last-name"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-two focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-font text-black text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-two focus:border-indigo-500 sm:text-sm"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-font text-black text-gray-700">
            Country
          </label>
          <input
            type="text"
            name="company"
            id="company"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-two focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-font text-black text-gray-700">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-two focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="how-can-we-help" className="block text-sm font-font text-black text-gray-700">
            How can we help you?
          </label>
          <textarea
            name="how-can-we-help"
            id="how-can-we-help"
            rows="4"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-two focus:border-indigo-500 sm:text-sm"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <fieldset className="mb-4">
          <legend className="block text-sm font-font text-black text-gray-700">Inquiry Type</legend>
          <div className="mt-4 grid grid-cols-1 gap-y-4">
            <div className="flex items-center">
              <input
                id="general-inquiry"
                name="inquiry-type"
                value="General Inquiry"
                type="radio"
                required
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="general-inquiry" className="ml-3 block text-sm font-font text-black text-gray-700">
                General Inquiry
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="technical-support"
                name="inquiry-type"
                value="Technical Support"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="technical-support" className="ml-3 block font-font text-black text-sm text-gray-700">
                Technical Support
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="feedback"
                name="inquiry-type"
                value="Feedback and Suggestions"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="feedback" className="ml-3 block text-sm font-font text-black text-gray-700">
                Feedback and Suggestions
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="beta-testing"
                name="inquiry-type"
                value="Beta Testing Application"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="beta-testing" className="ml-3 block font-font text-black text-sm text-gray-700">
                Beta Testing Application
              </label>
            </div>
          </div>
        </fieldset>
        <div className="mb-4">
          <label htmlFor="how-did-you-hear-about-us" className="block text-sm font-medium font-font text-black text-gray-700">
            How did you hear about us?
          </label>
          <input
            type="text"
            name="how-did-you-hear-about-us"
            id="how-did-you-hear-about-us"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-two sm:text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex justify-center py-2 px-4 border border-transparent font-font text-white shadow-sm text-sm font-medium rounded-md text-white bg-two hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Form
        </button>
        <span className="block mt-4 text-sm text-gray-700">{state.succeeded ? "Form Submitted Successfully" : ""}</span>
      </form>

      {/* Notification Component */}
      {showNotification && (
        <div
          aria-live="assertive"
          className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
        >
          <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
            <Transition
              show={showNotification}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium font-font text-gray-900">Message sent Successfully!</p>
                      <p className="mt-1 text-sm text-gray-500">We will contact you shortly...</p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                      <button
                        className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 font-font focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setShowNotification(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      )}
    </div>
  );
}
