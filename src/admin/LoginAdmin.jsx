import React from "react";

const LoginAdmin = () => {
  return (
    <div className="flex justify-center items-center text-center">
      {/* Section 1 */}
      <div className="m-auto w-1/2 h-screen flex justify-center items-center font-poppins">
        <div className=" h-120 w-120 p-4 ">
          <form action="">
            <h1 className="mb-6">
              <span className="text-5xl font-bold text-donor cursor-pointer">
                Donor
              </span>
              <span className="text-5xl font-bold text-pdg cursor-pointer">
                .Pdg
              </span>
            </h1>
            <div className="h-90 w-96">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="border-solid border-2 border-border rounded-md cursor-pointer block w-full h-8 mb-5 p-4"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="border-solid border-2 border-border rounded-md block w-full h-8 cursor-pointer mb-1 p-4"
              />
            </div>
            <div className="flex">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="cursor-pointer"
              />
              <label for="" className="p-1 cursor-pointer">
                Remember me
              </label>
              <a href="" className="ml-auto text-xs mt-2">
                Forgot password?
              </a>
            </div>
            <a
              href=""
              className="rounded-md block bg-donor p-2 mt-8 text-white hover:shadow-xl hover:shadow-donor transition duration-300 "
            >
              Login
            </a>
          </form>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-1/2 h-screen bg-custom-gradient flex justify-center items-center">
        <div className="text text-white text-center justify-center font-poppins italic space-y-2">
          <span className="text-2xl "> "Mari donor</span>
          <span className="font-bold text-4xl"> mendonor</span>
          <p className="space-y-8">
            <span className="text-2xl "> agar mendonor jadi </span>
            <span className="font-bold text-4xl">donormen</span>
            <span className="text-2xl ">"</span>
          </p>
          <br />
          <p className="not-italic text-xl space-x-4 ">-Sujiwo Tejo-</p>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
