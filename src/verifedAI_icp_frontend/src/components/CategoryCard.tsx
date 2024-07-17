import { Link } from "react-router-dom";

import icpImg from "../assets/icp.jpg";
import motoko from "../assets/motoko.jpeg";
const CategoryCard = () => {
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <div className="card-body w-full">
        <h2 className="card-title"> Featured Categories</h2>
        <div className="ui-card-default p-1 gap-1  w-auto shadow-md flex">
          <Link to={`/quiz/icp`}>
            <div className="flex relative w-full h-full ">
              <img
                className="w-full rounded-xl"
                src={icpImg}
                alt={"dummy"}
                loading="lazy"
                height={230}
                // width={430}
              />

              <div className="absolute right-3 top-2 text-white p-1  ">
                <span>{"20"} MCQs</span>
              </div>
            </div>
          </Link>
          <Link to={`/quiz/move`}>
            <div className="flex relative w-[80%] ">
              <img
                className="w-full rounded-xl"
                src={motoko}
                alt={"dummy"}
                loading="lazy"
                height={230}
                // width={230}
              />

              <div className="absolute right-3 top-2 text-white p-1  ">
                <span>{"20"} MCQs</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
