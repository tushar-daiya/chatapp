import React from "react";
import { Bars } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="bg-[#2B2D42] h-screen w-screen flex items-center justify-center">
      <Bars
        height="80"
        width="80"
        color="white"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
