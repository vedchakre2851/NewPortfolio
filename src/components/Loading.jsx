import React from "react";
import loading from "../assets/loadingplane.json";
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-1/3 w-1/3">
        <Lottie animationData={loading}></Lottie>
      </div>
    </div>
  );
};

export default Loading;
