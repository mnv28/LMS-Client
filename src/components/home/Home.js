import React, { useState, useEffect } from "react";
import Carousel from "../swiper/ImageSlider";
import axios from "axios";
import VideoThumbnail from "react-video-thumbnail";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ClipLoader } from "react-spinners";
import Class from "../classes/Class";

export default function Home({ CourseData, standardData }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [Selected, setSelected] = useState(false);
  const [mainstandardData, setMainStandardData] = useState(null);
  const [courses, setCourses] = useState([]);
  const [buyCourse, setBuyCourse] = useState("");
  const key_secret = "rzp_test_JVqQWR4Ae2STfT";
  const [orderid, setOrderId] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const data = {
    amount: 1099,
    name: "E-Learning",
    profile_name: "Manav",
    email: "manav@gmail.com",
    product: `Course-${buyCourse}`,
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
          setShowButton(true);
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOpenTerms = () => {
    const pdfUrl =
      "https://res.cloudinary.com/duhiildi0/image/upload/v1702729409/pdfs/TERMS_OF_SERVICE_RETEACH-1_irooju.pdf";

    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
  };

  const handleOpenPrivacy = () => {
    const pdfUrl =
      "https://res.cloudinary.com/duhiildi0/image/upload/v1702729393/pdfs/PRIVACY_POLICY_Reteach_hx61qh.pdf";

    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank");
  };

  const handleClassClick = (id) => {
    setSelected(id);
    getOrderId();
    setCourses(CourseData);
  };

  console.log("CourseData is ==>", CourseData);

  const handleItemClick = () => {};
  // const handleItemClick = (index) => {
  //   setSelectedItem(index);
  //   getOrderId();
  //   if (index === 0) {
  //     axios
  //       .get(
  //         "http://localhost:5000/api/course/get-course/Nursery"
  //       )
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("Nursery");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 1) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/LKG")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("LKG");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 2) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/UKG")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("UKG");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 3) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/I")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("I");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 4) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/II")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("II");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 5) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/III")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("III");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 6) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/IV")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("IV");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 7) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/V")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("V");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 8) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/VI")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("VI");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 9) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/VII")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("VII");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 10) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/VIII")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("VIII");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 11) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/IX")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("IX");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 12) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/X")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("X");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 13) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/XI")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("XI");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (index === 14) {
  //     axios
  //       .get("http://localhost:5000/api/course/get-course/XII")
  //       .then(async (res) => {
  //         setCourses(res.data.courses);
  //         setBuyCourse("XII");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  const uniqueClassNames = new Set();

  let slides = ["./reteach-slider-1.png", "./reteach-slider-2.png"];
  return (
    <>
      {/* <div
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
          </div> */}
      <div className="w-full flex flex-col pt-0">
        <div className=" flex justify-center items-center">
          <p className=" items-center  py-4 px-20 font-semibold my-3 rounded-xl text-white bg-gray-950">
            Select class from below
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <Disclosure>
            <div className="flex flex-col px-8 py-6 mt-2 md:justify-between md:flex-row md:mx-10 md:py-0">
              <ul className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
                {standardData?.map((item) => {
                  return (
                    <li key={item._id}>
                      <Class standard={item.className} standardData={item} />
                    </li>
                  );
                })}
              </ul>
              {/* <ul className=" grid grid-cols-3 gap-3">
                {CourseData?.map((item) => {
                  if (uniqueClassNames.has(item.standard)) {
                    return null;
                  }
                  uniqueClassNames.add(item.standard);
                  console.log(uniqueClassNames);
                  return (
                    <li key={item._id}>
                      <Class
                        standard={item.standard}
                        standardData={standardData}
                      />
                    </li>
                  );
                })}
              </ul> */}
            </div>
          </Disclosure>
        </div>

        {/* <div className=" flex justify-center items-center">
          <Disclosure>
            <div className="flex flex-col px-2 mt-2 md:justify-between md:flex-row md:mx-10 md:py-0">
              <ul className=" grid grid-cols-5 gap-4">
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm text-center font-medium border border-indigo-600 ${
                        selectedItem === 0
                          ? " bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(0)}
                    >
                      Nursery
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 1
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(1)}
                    >
                      LKG
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 2
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(2)}
                    >
                      UKG
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 3
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(3)}
                    >
                      I
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 4
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(4)}
                    >
                      II
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 5
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(5)}
                    >
                      III
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 6
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(6)}
                    >
                      IV
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 7
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(7)}
                    >
                      V
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 8
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(8)}
                    >
                      VI
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 9
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(9)}
                    >
                      VII
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 10
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(10)}
                    >
                      VIII
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 11
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(11)}
                    >
                      IX
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 12
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(12)}
                    >
                      X
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 13
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(13)}
                    >
                      XI
                    </Disclosure.Button>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <Disclosure.Button
                      className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm font-medium border border-indigo-600 ${
                        selectedItem === 14
                          ? "bg-gray-500 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => handleItemClick(14)}
                    >
                      XII
                    </Disclosure.Button>
                  </Link>
                </li>
              </ul>
            </div>
          </Disclosure>
        </div> */}

        <div>
          <section>
            <div className="container px-2 py-10 mx-auto">
              <div className=" flex justify-end items-end">
                <form
                  method="POST"
                  action="https://api.razorpay.com/v1/checkout/embedded"
                >
                  <input type="hidden" name="key_id" value={key_secret} />
                  <input type="hidden" name="amount" value={data.amount} />
                  <input type="hidden" name="order_id" value={orderid} />
                  <input type="hidden" name="name" value={data.name} />
                  <input
                    type="hidden"
                    name="description"
                    value={data.product}
                  />
                  <input type="hidden" name="image" value={logo} />
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
                  {/* <div className="col-12 center">
                    <button
                      className="text-white bg-indigo-500 rounded-md w-40 h-10"
                      type="submit"
                    >
                      Buy Now
                    </button>
                  </div> */}

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
              </div>

              {/* <div className="grid grid-cols-1 bg-gray-950 gap-8 mt-8 md:mt-4 md:grid-cols-2 xl:grid-cols-3">
                {courses.length
                  ? courses.map((e) => (
                      <div key={e._id} className=" py-4">
                        <div className="relative">
                          <Link to={`/course/${e._id}`}>
                            <h1 className="mt-6 text-xl font-semibold text-white ml-2">
                              {e.subject}
                            </h1>

                            <p className="text-sm flex text-white ml-2">
                              <span>{e.course_discount}</span>
                              <span>{e.course_price}</span>
                            </p>

                            <div className=" flex flex-row justify-between mx-2">
                              <p className=" text-white inline mt-4">
                                Standard: {e.standard}
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))
                  : selectedItem && (
                      <div className="p-4 flex items-center justify-center w-full">
                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          No Videos Available for Selected Class
                        </span>
                      </div>
                    )}
              </div> */}

              {/* <div className="grid grid-cols-1 bg-gray-950 gap-8 mt-8 md:mt-4 md:grid-cols-2 xl:grid-cols-3">
                {courses.length
                  ? courses.map((e) => (
                      <div key={e._id} className=" py-4">
                        <div className="relative">
                          <Link to={`/course/${e._id}`}>
                            <VideoThumbnail
                              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                              videoUrl={e.course_video_url}
                              alt=""
                            />
                          </Link>
                        </div>

                        <h1 className="mt-6 text-xl font-semibold text-white ml-2">
                          {e.course_name}
                        </h1>

                        <p className="text-sm text-white ml-2">
                          {e.course_description.substring(0, 85) + "..."}
                        </p>

                        <div className=" flex flex-row justify-between mx-2">
                          <p className=" text-white inline mt-4">
                            Standard: {e.standard}
                          </p>
                        </div>
                      </div>
                    ))
                  : selectedItem && (
                      <div className="p-4 flex items-center justify-center w-full">
                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          No Videos Available for Selected Class
                        </span>
                      </div>
                    )}
              </div> */}
            </div>
          </section>
          <div className="">
            <Carousel slides={slides} />
          </div>
        </div>

        {/* <div className=" w-full h-auto bottom-0 bg-white ">
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
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}

// <Link to="">
// <Disclosure.Button
//   className={`cursor-pointer block w-20 rounded-md px-3 py-2 text-sm text-center font-medium border border-indigo-600 ${
//     Selected === item._id
//       ? " bg-gray-500 text-white"
//       : "text-gray-300 hover:bg-gray-700 hover:text-white"
//   }`}
//   onClick={() => handleClassClick(item._id)}
// >
//   {item.standard}
// </Disclosure.Button>
// </Link>
