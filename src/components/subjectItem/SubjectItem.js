import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";

function SubjectItem({ standard, subject }) {
  return (
    <div>
      <div className="rounded-lg p-10 h-32 w-64 border-solid border-2 relative items-center justify-center cursor-pointer m-4">
        <div className="bg-white text-blue-500 text-center w-full rounded-tl-md rounded-tr-md h-12 p-5 font-bold text-md absolute top-0 left-0 ">
          {subject}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            className="flex items-center justify-center mt-6 -mb-5 mb-"
            to={`/${standard}/${subject}`}
          >
            <div className="bg-transparent hover:bg-blue-500 flex items-center justify-center font-semibold text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Get Started <FaCaretSquareRight className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubjectItem;
