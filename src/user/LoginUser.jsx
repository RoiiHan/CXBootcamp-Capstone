import React from "react";
import { Link } from "react-router-dom";
import google from "../component/Logo Google.png";
import apple from "../component/Applee.png";
import fb from "../component/fb.png";

const LoginUser = () => {
  return (
    <div className="font-poppins bg-bguser">
      <div className="p-8 flex justify-end text-white">Home</div>
      <div className="text-center  pb-10">
        <div className="text-white text-[44px] font-bold">
          Ayo Bergabung di donor.<span>Pdg</span>
        </div>
        <div className="m-auto mt-5  bg-white w-[550px] h-[500px] rounded-md flex justify-center ">
          <form action="" className="text-borderuser flex flex-col">
            <input
              type="text"
              placeholder="Email"
              className="w-[500px] text-[15px] p-5  pl-5 mt-7 h-[60px] border-borderuser border-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[500px] text-[15px] p-5 pl-5 mt-2 h-[60px] border-borderuser border-2 rounded-md"
            />
            <Link
              to="/LoginAdmin"
              className="bg-bguser h-[60px] rounded-3xl mt-3 text-white font-bold pt-4"
            >
              Login
            </Link>
            <div className="pt-5 font-bold">Atau Gunakan Akun</div>
            <div className="flex justify-center flex-rows pt-5 gap-[40px]">
              <img
                src={apple}
                alt=""
                className="w-[50px] p-1  border-solid border-2 border-borderuser rounded-full"
              />
              <img
                src={google}
                alt=""
                className="w-[50px] p-1 border-solid border-2 border-borderuser rounded-full"
              />
              <img
                src={fb}
                alt=""
                className="w-[50px] p-2 border-solid border-2 border-borderuser rounded-full"
              />
            </div>
            <div className="w-[500px] text-[10px] text-textuser mt-5 font-bold">
              Dengan membuat akun kamu menyetujui{" "}
              <span className="text-donor"> Syarat & Ketentuan</span> dan <br />
              <span className="text-donor">Kebijakan Privasi </span>kami
            </div>
            <div className="mt-[50px] font-bold text-[15px] text-textuser">
              Belum punya akun? <span className="text-donor">Buat Baru</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
