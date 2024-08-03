"use client";
import {React , useState } from "react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "103b29be-f555-472e-91aa-946e1589a55b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

  }
  return (
    <div>
    <form onSubmit={handleSubmit} className="">
    <div className="bg-white py-16 sm:py-24">
    
    <div className="relative sm:py-16">
      <div aria-hidden="true" className="hidden sm:block">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
        <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={392}  />
        </svg>
      </div>
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative rounded-2xl px-6 py-10 bg-two overflow-hidden shadow-xl sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="text-two "
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              />
              <path
                className="text-two "
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="sm:text-center">
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-font sm:text-4xl">
                Get notified when we&rsquo;re launching.
              </h2>
              
            </div>
            <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="cta-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta-email"
                  type="email"
                  className="block w-full border font-font border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent font-font px-5 py-3 bg-green-500 bg-opacity-60 hover:bg-opacity-70  text-base font-medium text-white shadow hover:bg-four focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  </form>
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
 </div>
)}


export default Contact