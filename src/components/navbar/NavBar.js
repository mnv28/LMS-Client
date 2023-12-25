import { useContext, useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../assets/name_logo.png";
import { useNavigate } from "react-router-dom";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoWarning } from "react-icons/io5";

export default function NavBar() {
  const { state, dispatch } = useContext(UserContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  let navigate = useNavigate();
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  console.log(state);

  const [data, setData] = useState(null);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("payload");
    if (storedData) {
      setData(storedData);
      console.log(storedData);
    }
  }, []);

  const RenderMenu = () => {
    if (state) {
      return (
        <Disclosure>
          <li>
            <Link to="/home">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 4
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(4)}
              >
                Home
              </Disclosure.Button>
            </Link>
          </li>
          {/*  */}
          {/* <li>
            <Link to="/contact">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 2
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(2)}
              >
                Contact Us
              </Disclosure.Button>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 3
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(3)}
              >
                FAQS
              </Disclosure.Button>
            </Link>
          </li> */}
          <li>
            <Link to="/contact">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 2
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(2)}
              >
                Contact Us
              </Disclosure.Button>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 3
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(3)}
              >
                FAQS
              </Disclosure.Button>
            </Link>
          </li>
          <li>
            {/* <Link to="/login"> */}
            <Disclosure.Button
              onClick={() => {
                handleItemClick(5);
                setOpen(true);
              }}
              className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                selectedItem === 5
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              Logout
            </Disclosure.Button>
            {/* </Link> */}
          </li>
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              initialFocus={cancelButtonRef}
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <IoWarning className="h-6 w-6 text-red-600" />
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              Logout Warning
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Are you sure you want to logout ?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                          onClick={() => {
                            dispatch({ type: "USER", payload: false });
                            setOpen(false);
                          }}
                        >
                          Logout
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </Disclosure>
      );
    } else {
      return (
        <Disclosure>
          <li>
            <Link to="/home">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 4
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(4)}
              >
                Home
              </Disclosure.Button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 0
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(0)}
              >
                Sign In
              </Disclosure.Button>
            </Link>
          </li>

          {/* <li>
                      <Link to="/payment">
                      <Disclosure.Button
                  className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                    selectedItem === 4
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => handleItemClick(4)}>
                  Payment
                </Disclosure.Button>
                      </Link>
                    </li> */}

          <li>
            <Link to="/signup">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 1
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(1)}
              >
                Sign Up
              </Disclosure.Button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 2
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(2)}
              >
                Contact Us
              </Disclosure.Button>
            </Link>
          </li>
          <li>
            <Link to="/faq">
              <Disclosure.Button
                className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                  selectedItem === 3
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => handleItemClick(3)}
              >
                FAQS
              </Disclosure.Button>
            </Link>
          </li>
        </Disclosure>
      );
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <div className="flex flex-shrink-0 items-center">
                  <>
                    <Link to="/">
                      <img
                        className="h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                      />
                    </Link>
                  </>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className=" hidden sm:ml-6 sm:block">
                  <div className=" flex space-x-4">
                    <ul className=" flex-row flex space-x-5">
                      <RenderMenu />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <ul className=" flex-col flex space-y-3">
                <li>
                  <Link to="/login">
                    <Disclosure.Button
                      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                        selectedItem === 0
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(0)}
                    >
                      Sign In
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <Disclosure.Button
                      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                        selectedItem === 1
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(1)}
                    >
                      Sign Up
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <Disclosure.Button
                      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                        selectedItem === 2
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(2)}
                    >
                      Contact Us
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <Disclosure.Button
                      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                        selectedItem === 3
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(3)}
                    >
                      FAQS
                    </Disclosure.Button>
                  </Link>
                </li>
              </ul>
            </div>
          </Disclosure.Panel>

          {/* data-modal-target="popup-modal"
          data-modal-toggle="popup-modal" */}
          <div
            id="popup-modal"
            tabIndex={-1}
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <svg
                    className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to Logout?
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    onClick={() => {
                      handleItemClick(5);
                      dispatch({ type: "USER", payload: false });
                    }}
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

//  <Link to={`${index === 0 ? "/signin" : "/signup"}`}>
//                      <Disclosure.Button
//                         className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium ${
//                           selectedItem === index
//                             ? "bg-gray-900 text-white"
//                             : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                         }`}
//                         onClick={() =>{
//                           handleItemClick(index);
//                         }}
//                       >
//                       {item.name}
//                       </Disclosure.Button>
//                      </Link>

// {navigation.map((item, index) => (
//   <Link to={`${index === 0 ? "/signin" : "/signup"}`}>
//   <Disclosure.Button
//     className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
//       selectedItem === index
//         ? "bg-gray-900 text-white"
//         : "text-gray-300 hover:bg-gray-700 hover:text-white"
//     }`}
//     onClick={() => handleItemClick(index)}
//   >
//     {item.name}
//   </Disclosure.Button>
//   </Link>
// ))}
