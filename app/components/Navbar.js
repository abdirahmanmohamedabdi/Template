/* This example requires Tailwind CSS v2.0+ */
"use client"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SupportIcon,
  QuestionMarkCircleIcon,
  ClipboardIcon,
  ViewGridIcon,
  ViewListIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const features = [
  {
    name: 'Features',
    href: '/Features',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ClipboardIcon,
  },
 
  { name: 'FAQ', href: '/FAQ', description: "Your customers' data will be safe and secure.", icon: QuestionMarkCircleIcon },
]




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">KilimoChapChap</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="logo.png"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-two">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-font  text-nine focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-two'
                      )}
                    >
                    
                    </Popover.Button>
                  </>
                )}
              </Popover>
              <a href="/" className="text-base font-font  text-nine  text-gray-500 hover:text-gray-900">
              Home
              </a>

              <a href="/Features" className="text-base font-font  text-nine  text-gray-500 hover:text-gray-900">
              Features
              </a>
              <a href="/About" className="text-base font-font  text-nine text-gray-500 hover:text-gray-900">
              About
              </a>
              <a href="/FAQ" className="text-base font-font  text-nine text-gray-500 hover:text-gray-900">
              FAQ
              </a>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="/Support" className="whitespace-nowrap text-base font-font  text-nine text-gray-500 hover:text-gray-900">
              Support
              </a>
              <a
                href="/Contact"
                className="ml-8 whitespace-nowrap inline-flex items-center font-font  text-white justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-one hover:bg-two"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/logo.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-two">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-one" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium font-font text-nine">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="/Support"
                    className="w-full flex items-center font-font justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-one hover:bg-two"
                  >
                    Support
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    <a href="/Contact" className="text-one font-font hover:text-two">
                      Contact
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
