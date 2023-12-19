import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import logo from "../../assets/name_logo.png";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <ClipLoader
              className=" items-center w-full h-full"
              color="#FFFFFF"
              loading={loading}
              size={50}
            />
          </div>
        ) : (
          <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src={logo}
                alt="reteach.co.in"
              />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                New User ? Create an Account for free !
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                noValidate
                onSubmit={handleSubmit(async (data) => {
                  setLoading(true);
                  const response = await fetch(
                    "https://lms-backend-ln7x.onrender.com/api/user/signup",
                    {
                      method: "POST",
                      body: JSON.stringify({
                        email: data.email,
                        password: data.password,
                        name: data.name,
                        mobile: data.mobile,
                      }),
                      headers: { "content-type": "application/json" },
                    }
                  );
                  if (response.ok) {
                    const data = await response.json();
                    setError("");
                    setLoading(false);
                    navigate("/home");
                    showToastMessage();
                    dispatch({ type: "USER", payload: true });
                  } else {
                    const err = await response.text();
                    setError(err);
                    setLoading(false);
                  }
                })}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6  text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      {...register("email", {
                        required: "email is required",
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                          message: "email not valid",
                        },
                      })}
                      className="block w-full rounded-md border-0 py-1.5 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email && (
                      <p className="text-start text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      {...register("password", {
                        required: "password is required",
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                          message: ` at least 8 characters\n
                      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                      - Can contain special characters`,
                        },
                      })}
                      className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-900  bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.password && (
                      <p className=" text-start text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Username
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      {...register("name", {
                        required: "username is required",
                      })}
                      className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-900  bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-start">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Mobile number
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      {...register("mobile", {
                        required: "mobile number is required",
                      })}
                      className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-900  bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-start">
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>
                </div>

                {error && (
                  <p className="text-red-500">{error || error.message}</p>
                )}
                <div className="flex flex-col items-center justify-center">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                  <p className=" text-white mt-4 text-sm font-sans font-light">
                    Already Registered ?
                    <Link
                      to="/login"
                      className="text-white font-semibold text-[13px] underline cursor-pointer"
                    >
                      {" " + "Signin"}
                    </Link>
                  </p>
                </div>
                <ToastContainer />
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}
