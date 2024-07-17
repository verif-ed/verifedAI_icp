import React from "react";

const Card = ({
  imgUrl,
  Title,
  description,
  size,
}: {
  imgUrl: string;
  Title?: string;
  description: string;
  size?: string;
}) => {
  return (
    <div className="card w-72 ">
      <figure className="">
        <img src={imgUrl} alt="car!" className="rounded-lg" width={size} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-secondary ">{Title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
