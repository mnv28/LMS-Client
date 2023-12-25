import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" w-full h-auto mt-5 fixed bottom-0 bg-white ">
      <div className="sm:flex sm:items-center sm:justify-between py-3">
        <span className="text-sm text-black sm:text-center mx-3">
          © 2023 RETEACH. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-3 mx-4">
          <p className="text-black cursor-pointer underline">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
          <p className="text-black  cursor-pointer underline">
            <Link to="/term-of-services">Terms of Service</Link>
          </p>
          <p className="text-black  cursor-pointer underline">
            <Link to="/refund-&-return">Refund & Returns</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
