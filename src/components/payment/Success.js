import React from "react";
import { Link } from "react-router-dom";
import { FaSmile } from "react-icons/fa";

const Success = () => {
  return (
    <div className=" flex justify-center items-center w-full h-full">
      <div className=" text-white flex flex-col justify-center font-serif font-bold items-center">
        <FaSmile className="text text-green-500 text-8xl animate-pulse mt-24" />
        <h4 className="alert-heading mt-4">Payment Successfull</h4>
        <Link
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border mt-6 border-blue-500 hover:border-transparent rounded"
          to="/home"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
