import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import ClassPrice from "./ClassPrice";

function Class({ standard, standardData }) {
  const [IsPurchased, setIsPurchased] = useState(false);
  const [open, setOpen] = useState(false);
  const key_secret = "rzp_test_JVqQWR4Ae2STfT";

  const handleModal = () => {
    setOpen(true);
  };
  const cancelButtonRef = useRef(null);
  // console.log("Standard is this :- ", standard);
  // console.log("StandardData is this :- ", standardData);
  return (
    <div>
      <div className="rounded-lg p-10 w-56 h-32 border-solid border-2 relative items-center justify-center cursor-pointer m-4">
        <div className="bg-blue-500 text-white text-center w-full rounded-tl-md rounded-tr-md h-12 p-5 font-bold text-md absolute top-0 left-0 ">
          {"Class : " + standard}
        </div>
        <div className="flex flex-col items-center justify-center">
          {IsPurchased ? (
            <Link
              className="flex items-center justify-center mt-6 -mb-5 mb-"
              to={`/standard/${standard}`}
            >
              <div
                className="bg-transparent hover:bg-blue-500 font-semibold flex items-center justify-center text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="button"
                data-modal-toggle="authentication-modal"
              >
                Enroll Now{" "}
                {IsPurchased ? (
                  <FaLockOpen className="ml-2 font-bold" />
                ) : (
                  <FaLock className="ml-2" />
                )}
                <div
                  id="authentication-modal"
                  aria-hidden="true"
                  className="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 lefclassNamet-0 right-0 md:inset-0 z-50 justify-center items-center"
                ></div>
              </div>
            </Link>
          ) : (
            <div className="flex items-center justify-center mt-6 -mb-5 mb-">
              {" "}
              <div
                className="bg-transparent hover:bg-blue-500 font-semibold flex items-center justify-center text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                type="button"
                data-modal-toggle="authentication-modal"
                onClick={handleModal}
              >
                Enroll Now{" "}
                {IsPurchased ? (
                  <FaLockOpen className="ml-2 font-bold" />
                ) : (
                  <FaLock className="ml-2" />
                )}
                <ClassPrice
                  cancelButtonRef={cancelButtonRef}
                  open={open}
                  setOpen={setOpen}
                  standardData={standardData}
                  standard={standard}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Class;
