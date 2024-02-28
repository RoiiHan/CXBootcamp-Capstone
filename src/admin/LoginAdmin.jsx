import React from "react";

const LoginAdmin = () => {
  return (
    <div className="flex justify-center items-center text-center">
      {/* Section 1 */}
      <div className="m-auto w-1/2 h-screen flex justify-center items-center font-poppins">
        <div className=" w-90 h-60 border-solid border-2 border-indigo-600">
          <form action="">
            <h1>
              <span className="text-7xl font-bold">Donor</span>
              <span className="text-7xl font-bold">.Pdg</span>
            </h1>
            <div class="form1">
              <input type="text" name="email" id="email" placeholder="Email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="check">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label for="">Remember me</label>
              <a href="">Forgot password?</a>
            </div>
            <a href="" class="button">
              Login
            </a>
          </form>
        </div>
      </div>

      {/* Section 2 */}
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
