import { infinity } from "ldrs";

import React from "react";

const Loader = () => {
  infinity.register();
  return (
    // Default values shown
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <l-infinity
          size="80"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.1"
          color="white"
        ></l-infinity>
      </div>
    </>
  );
};

export default Loader;
