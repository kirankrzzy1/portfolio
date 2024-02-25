import { Link, NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Education", href: "/education", current: false },
  { name: "Experience", href: "/experience", current: false },
  { name: "Projects", href: "/projects", current: false },
  // { name: "Github", href: "/github", current: false },
];

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <img
                      src="src\assets\android-chrome-512x512.png"
                      className="mr-3 h-12"
                      alt="Logo"
                    />
                    <span
                      className="text-gray-800"
                      style={{
                        fontFamily: "Agustina",
                        fontWeight: 700,
                        padding: "0 10px",
                      }}
                    >
                      {"<Kiran Kumar A R />"}
                    </span>
                  </Link>
                </div>
                <div className="hidden  sm:ml-6 sm:flex items-center">
                  <div className="flex space-x-10 font-medium">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                            ${
                                              isActive
                                                ? "text-orange-700"
                                                : "text-gray-700"
                                            } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="items-center lg:order-2 hidden sm:flex">
                  <Link
                    to="#"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                            ${
                                              isActive
                                                ? "bg-orange-800 text-white"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                            } block rounded-md px-3 py-2 text-base font-medium`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
