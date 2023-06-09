import React from "react";
import { IMG_CDN } from "../../constant";
import { Link } from "react-router-dom";

const ResturantCard = ({
  name,
  cloudinaryImageId,
  costForTwoString,
  cusines,
}) => {
  // console.log(cloudinaryImageId);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow :bg-gray-800 :border-gray-700 mx-2 my-2">
      <Link href="#">
        <img
          className="rounded-t-lg md:w-[33vw] md:h-[43vh] sm:w-[90%] sm:h-80"
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 :text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 :text-gray-400">
          {costForTwoString}
        </p>
      </div>
    </div>
  );
};

export default ResturantCard;
