import React from "react";
import { Link } from "react-router-dom";
import VideoThumbnail from "react-video-thumbnail";
import { FaRegCirclePlay } from "react-icons/fa6";

function Topic({ CourseData, standard, subject }) {
  //   const lectureCount = () => {
  //     let count = 0;
  //     return count + 1;
  //   };

  console.log(CourseData);
  return (
    <div>
      <div className="rounded-lg h-72 w-64 border-solid border-2 relative items-center justify-center cursor-pointer m-4">
        <div className="bg-white text-blue-500 text-center w-full rounded-tl-md rounded-tr-md h-12 p-5 font-bold text-md absolute top-0 left-0 ">
          {CourseData.course_name}
        </div>

        <div className="flex flex-col items-center mt-7 justify-center">
          <VideoThumbnail
            className="object-cover object-center  w-64 h-auto rounded-lg lg:h-80"
            videoUrl={CourseData.course_video_url}
            alt="Video Thumbnail"
          />
          <Link
            className="flex items-center justify-center mt-3  mb-"
            to={`/Topic/${CourseData.course_name}/${CourseData.medium}/${CourseData._id}`}
          >
            <div className="bg-transparent hover:bg-blue-500 flex items-center justify-center font-semibold text-white hover:text-white  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Start Learning <FaRegCirclePlay className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topic;
