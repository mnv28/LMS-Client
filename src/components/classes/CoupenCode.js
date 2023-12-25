import React, { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";

function CoupenCode({
  open,
  setOpen,
  cancelButtonRef,
  coupenCode,
  setCoupenCode,
  coupenList,
  IsCoupen,
  setIsCoupen,
}) {
  const handleCoupenApply = () => {
    console.log(coupenList);
    coupenList?.forEach((coupenItem) => {
      console.log(coupenItem.coupenCode === coupenCode);
      console.log(coupenItem.coupenCode);
      console.log(coupenCode);
      if (coupenItem.coupenCode === coupenCode) {
        setIsCoupen({
          status: true,
          coupenAmount: coupenItem.coupenAmountPercentage,
          message: "Coupen Applied Successfully",
        });
        console.log(IsCoupen);
      }
      setCoupenCode("");
      setOpen(false);
    });
  };

  return (
    <>
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
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Apply Coupen Code
                        </Dialog.Title>
                      </div>
                    </div>
                  </div>
                  <div className="ml-8 mb-5 ">
                    <form className="w-full max-w-sm">
                      <div className="flex items-center border-b border-teal-500 py-2">
                        <input
                          className="appearance-none bg-transparent border-none w-full text-yellow-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          value={coupenCode}
                          placeholder="e.g.FIRST50"
                          aria-label=""
                          onChange={(e) => setCoupenCode(e.target.value)}
                        />
                        {coupenCode && (
                          <button
                            className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-sm border-4 text-white py-1 px-2 rounded"
                            type="button"
                            onClick={handleCoupenApply}
                          >
                            Apply Coupen Code
                          </button>
                        )}
                        <button
                          className="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-800 text-sm py-1 px-2 rounded"
                          type="button"
                          onClick={() => {
                            setCoupenCode("");
                            setOpen(false);
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default CoupenCode;
