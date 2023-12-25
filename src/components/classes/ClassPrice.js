import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CgDanger } from "react-icons/cg";

import CoupenCode from "./CoupenCode";
import axios from "axios";

export default function ClassPrice({
  open,
  setOpen,
  cancelButtonRef,
  standardData,
  standard,
}) {
  const [openCoupen, setOpenCoupen] = useState(true);
  const [coupenCode, setCoupenCode] = useState("");
  const [orderid, setOrderId] = useState(null);
  const [coupenList, setCoupenList] = useState(null);
  const [IsCoupen, setIsCoupen] = useState({});
  const cancelButtonRefCoupen = useRef(null);
  const key_secret = "rzp_test_JVqQWR4Ae2STfT";

  // Coupencodes getting here

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/coupen-code/coupens-list")
      .then(async (res) => {
        await setCoupenList(res.data.coupens);
        return console.log(coupenList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const checkCoupenValidity = () => {
  //   coupen?.forEach((coupenItem) => {
  //     if (coupenItem.coupenCode === coupenCode) {
  //       console.log(coupenItem.coupenCode, coupenCode);
  //       setIsCoupen({ status: true, message: "Coupen Applied !" });
  //       return;
  //     }
  //   });
  // };

  // useEffect(() => {
  //   checkCoupenValidity();
  // }, [coupen, coupenCode]);

  const data = {
    name: "E-Learning",
    profile_name: "Manav",
    email: "manav@gmail.com",
    number: "9712205783",
    address: "Gujrant,India",
    callback_url: "http://localhost:5000/api/payment-callback",
    cancel: "http://localhost:5000/api/payment-cancel",
  };

  const getOrderId = () => {
    axios
      .post("http://localhost:5000/api/orders", { ...data })
      .then((res) => {
        setTimeout(() => {
          setOrderId(res.data);
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getOrderId();
  }, []);
  return (
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full w-full flex items-center justify-center flex-col ml-4 mr-4">
                <div className="bg-white w-max px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className=" flex justify-center items-center">
                    <p className=" items-center  py-4 px-20 font-semibold my-3 rounded-xl text-white bg-gray-950">
                      Buy Class {standardData.className}
                    </p>
                  </div>
                  <div className="grid w-max lg:grid-cols-3 gap-3 sm:grid-cols-1 items-end place-items-center m-auto md:grid-cols-2">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="font-bold text-xl text-black">
                          Hindi Medium
                        </p>
                        <p className="text-base font-semibold text-gray-600">
                          Pay once, own it forever
                        </p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-5xl font-bold tracking-tight text-gray-900">
                            {"₹" + standardData.class_hindiMediumDiscountPrice}
                          </span>
                          <span className="text-xl font-semibold leading-6 tracking-wide text-indigo-600 line-through">
                            {standardData.class_hindiMediumPrice}
                          </span>
                          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                            INR
                          </span>
                        </p>

                        <form
                          method="POST"
                          action="https://api.razorpay.com/v1/checkout/embedded"
                        >
                          <input
                            type="hidden"
                            name="key_id"
                            value={key_secret}
                          />
                          <input
                            type="hidden"
                            name="amount"
                            value={standardData.class_hindiMediumDiscountPrice}
                          />
                          <input
                            type="hidden"
                            name="order_id"
                            value={orderid}
                          />
                          <input type="hidden" name="name" value={data.name} />
                          <input
                            type="hidden"
                            name="description"
                            value={standardData.className}
                          />
                          {/* <input type="hidden" name="image" value={logo} /> */}
                          <input
                            type="hidden"
                            name="prefill[name]"
                            value={data.profile_name}
                          />
                          <input
                            type="hidden"
                            name="prefill[contact]"
                            value={data.number}
                          />
                          <input
                            type="hidden"
                            name="prefill[email]"
                            value={data.email}
                          />
                          <input
                            type="hidden"
                            name="notes[shipping address]"
                            value={data.address}
                          />
                          <input
                            type="hidden"
                            name="callback_url"
                            value={data.callback_url}
                          />
                          <input
                            type="hidden"
                            name="cancel_url"
                            value={data.cancel_url}
                          />
                          <button
                            className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit"
                          >
                            Buy Now
                          </button>

                          {/* <div className="center">
                    {showButton && (
                      <div className=" bg-gray-500 rounded-md w-auto h-auto flex flex-col px-2 mb-2">
                        <p className="text-white">Class: {buyCourse}</p>
                        <p className="text-white">Price:- 1099/-</p>
                      </div>
                    )}
                  </div>
                 */}
                        </form>

                        <div
                          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 mt-4 text-sm cursor-pointer border-blue-700 hover:border-blue-500 rounded"
                          onClick={() => {
                            setOpenCoupen(true);
                          }}
                        >
                          Have a coupen code? Apply Now
                        </div>
                        <CoupenCode
                          open={openCoupen}
                          setOpen={setOpenCoupen}
                          cancelButtonRef={cancelButtonRefCoupen}
                          coupenCode={coupenCode}
                          setCoupenCode={setCoupenCode}
                          coupenList={coupenList}
                          IsCoupen={IsCoupen}
                          setIsCoupen={setIsCoupen}
                        />
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                          All Subjects and Classes will be included in one-time
                          purchase for Class {standardData.className}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="font-bold text-xl text-black">
                          English Medium
                        </p>
                        <p className="text-base font-semibold text-gray-600">
                          Pay once, own it forever
                        </p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-5xl font-bold tracking-tight text-gray-900">
                            {"₹" +
                              standardData.class_englishMediumDiscountPrice}
                          </span>
                          <span className="text-xl font-semibold leading-6 tracking-wide text-indigo-600 line-through">
                            {standardData.class_englishMediumPrice}
                          </span>
                          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                            INR
                          </span>
                        </p>
                        <form
                          method="POST"
                          action="https://api.razorpay.com/v1/checkout/embedded"
                        >
                          <input
                            type="hidden"
                            name="key_id"
                            value={key_secret}
                          />
                          <input
                            type="hidden"
                            name="amount"
                            value={
                              standardData.class_englishMediumDiscountPrice
                            }
                          />
                          <input
                            type="hidden"
                            name="order_id"
                            value={orderid}
                          />
                          <input type="hidden" name="name" value={data.name} />
                          <input
                            type="hidden"
                            name="description"
                            value={standardData.className}
                          />
                          {/* <input type="hidden" name="image" value={logo} /> */}
                          <input
                            type="hidden"
                            name="prefill[name]"
                            value={data.profile_name}
                          />
                          <input
                            type="hidden"
                            name="prefill[contact]"
                            value={data.number}
                          />
                          <input
                            type="hidden"
                            name="prefill[email]"
                            value={data.email}
                          />
                          <input
                            type="hidden"
                            name="notes[shipping address]"
                            value={data.address}
                          />
                          <input
                            type="hidden"
                            name="callback_url"
                            value={data.callback_url}
                          />
                          <input
                            type="hidden"
                            name="cancel_url"
                            value={data.cancel_url}
                          />
                          <button
                            className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit"
                          >
                            Buy Now
                          </button>

                          {/* <div className="center">
                    {showButton && (
                      <div className=" bg-gray-500 rounded-md w-auto h-auto flex flex-col px-2 mb-2">
                        <p className="text-white">Class: {buyCourse}</p>
                        <p className="text-white">Price:- 1099/-</p>
                      </div>
                    )}
                  </div>
                 */}
                        </form>
                        <div
                          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 mt-4 text-sm cursor-pointer border-blue-700 hover:border-blue-500 rounded"
                          onClick={() => {
                            setOpenCoupen(true);
                          }}
                        >
                          Have a coupen code? Apply Now
                        </div>
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                          All Subjects and Classes will be included in one-time
                          purchase for Class {standardData.className}
                        </p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="font-bold text-xl text-black">
                          Hindi + English Medium
                        </p>
                        <p className="text-base font-semibold text-gray-600">
                          Pay once, own it forever
                        </p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-5xl font-bold tracking-tight text-gray-900">
                            {"₹" + standardData.classDiscountPrice}
                          </span>
                          <span className="text-xl font-semibold leading-6 tracking-wide text-indigo-600 line-through">
                            {standardData.classPrice}
                          </span>
                          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                            INR
                          </span>
                        </p>
                        <form
                          method="POST"
                          action="https://api.razorpay.com/v1/checkout/embedded"
                        >
                          <input
                            type="hidden"
                            name="key_id"
                            value={key_secret}
                          />
                          <input
                            type="hidden"
                            name="amount"
                            value={standardData.classDiscountPrice}
                          />
                          <input
                            type="hidden"
                            name="order_id"
                            value={orderid}
                          />
                          <input type="hidden" name="name" value={data.name} />
                          <input
                            type="hidden"
                            name="description"
                            value={standardData.className}
                          />
                          {/* <input type="hidden" name="image" value={logo} /> */}
                          <input
                            type="hidden"
                            name="prefill[name]"
                            value={data.profile_name}
                          />
                          <input
                            type="hidden"
                            name="prefill[contact]"
                            value={data.number}
                          />
                          <input
                            type="hidden"
                            name="prefill[email]"
                            value={data.email}
                          />
                          <input
                            type="hidden"
                            name="notes[shipping address]"
                            value={data.address}
                          />
                          <input
                            type="hidden"
                            name="callback_url"
                            value={data.callback_url}
                          />
                          <input
                            type="hidden"
                            name="cancel_url"
                            value={data.cancel_url}
                          />
                          <button
                            className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit"
                          >
                            Buy Now
                          </button>

                          {/* <div className="center">
                    {showButton && (
                      <div className=" bg-gray-500 rounded-md w-auto h-auto flex flex-col px-2 mb-2">
                        <p className="text-white">Class: {buyCourse}</p>
                        <p className="text-white">Price:- 1099/-</p>
                      </div>
                    )}
                  </div>
                 */}
                        </form>
                        <div
                          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 mt-4 text-sm cursor-pointer border-blue-700 hover:border-blue-500 rounded"
                          onClick={() => {
                            setOpenCoupen(true);
                          }}
                        >
                          Have a coupen code? Apply Now
                        </div>
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                          All Subjects and Classes will be included in one-time
                          purchase for Class {standardData.className}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
