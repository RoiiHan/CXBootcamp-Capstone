import React from "react";

const LoginAdmin = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="w-1/2 h-screen">Kotak1 </div>
      <div className="w-1/2 h-screen bg-gradient-to-l from-red-500 via-red-500 to-transparent flex justify-center items-center">
        <div className="text text-white text-center justify-center font-poppins italic space-y-2">
          <span className="text-2xl "> "Mari donor</span>
          <span className="font-bold text-4xl"> mendonor</span>
          <p className="space-y-8">
            <span className="text-2xl "> agar mendonor jadi </span>
            <span className="font-bold text-4xl">donormen</span>{" "}
            <span className="text-2xl ">"</span>
          </p>
          <br />
          <p className=" text-2xl space-x-4 ">-Sujiwo Tejo-</p>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
