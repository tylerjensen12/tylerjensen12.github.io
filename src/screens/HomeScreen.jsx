import React from "react";

const HomeScreen = () => {
  return (
    <div className="h-screen bg-[url('/pics/homeBackground.jpg')] flex ">
      <div className="flex flex-col items-center bg-blue-300 w-1/3 m-auto py-10 rounded-lg">
        <h1 className="text-4xl font-medium">Tyler Jensen</h1>
        <h3 className="text-2xl font-normal">
          ~ Software Developer/Engineer ~
        </h3>
      </div>
    </div>
  );
};

export default HomeScreen;
