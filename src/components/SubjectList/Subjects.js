import { Disclosure } from "@headlessui/react";
import React from "react";
import { useParams } from "react-router-dom";
import SubjectItem from "../subjectItem/SubjectItem";

function Subjects({ CourseData }) {
  let { subjects } = useParams();
  const classes = subjects;
  console.log(classes);
  console.log("from Subject Area", CourseData);

  const uniqueSubjects = new Set();

  return (
    <div>
      <div className="w-full flex flex-col pt-0">
        <div className=" flex justify-center items-center">
          <p className=" items-center  py-4 px-20 font-semibold my-3 rounded-xl text-white bg-gray-950">
            Select Subject for Class {classes}
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="flex flex-col px-8 py-6 mt-2 md:justify-between md:flex-row md:mx-10 md:py-0">
          <ul className=" grid grid-cols-2 gap-2">
            {CourseData?.map((item) => {
              if (!(item.standard === classes)) {
                return null;
              }
              if (uniqueSubjects.has(item.subject)) {
                return null;
              }
              uniqueSubjects.add(item.subject);
              return (
                <li key={item._id}>
                  <SubjectItem
                    standard={item.standard}
                    subject={item.subject}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
