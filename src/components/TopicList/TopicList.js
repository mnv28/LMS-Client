import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Topic from "./Topic";
import MediumSelector from "../helpingComponents/MediumSelector";

function TopicList({ CourseData }) {
  let { subject, standard } = useParams();
  const Subject = subject;
  const [selectMedium, setSelectMedium] = useState("English");
  const Standard = standard;
  // console.log(Subject, Standard);
  console.log(selectMedium);

  const handleMediumChange = (event) => {
    setSelectMedium(event.target.value);
  };

  // console.log(medium.value);
  return (
    <div>
      <div className="w-full flex flex-col pt-0">
        <div className=" flex justify-center items-center">
          <p className=" items-center justify-center flex  py-4 px-20 font-semibold my-3 rounded-xl text-white bg-gray-950">
            Topics for {Subject} of Class {Standard}{" "}
            {/* {<MediumSelector className="ml-4" />} */}
            {
              <select
                id="medium"
                className="ml-4 block appearance-none w-fit bg-transperant border text-black border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mt-3"
                value={selectMedium}
                onChange={handleMediumChange}
              >
                <option value="English">English Medium</option>
                <option value="Hindi">Hindi Medium</option>
              </select>
            }
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="flex flex-col px-8 py-6 mt-2 w-full md:justify-between md:flex-row md:mx-10 md:py-0">
          <ul className=" grid grid-cols-3 gap-3">
            {CourseData?.map((item) => {
              if (item.standard === Standard) {
                if (item.subject === Subject) {
                  if (item.medium === selectMedium) {
                    return (
                      <Topic
                        CourseData={item}
                        subject={Subject}
                        standard={Standard}
                      />
                    );
                  } else {
                    return null;
                  }
                }
                return console.log("rejected inside standard");
              }
              return console.log("rejected before standard check");
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopicList;
