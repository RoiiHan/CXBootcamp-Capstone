import React from "react";
import { Link } from "react-router-dom";
import google from "../component/Logo Google.png";
import apple from "../component/Applee.png";
import fb from "../component/fb.png";

const RegisterUser = () => {
  return (
    <div className="font-poppins bg-bguser">
      <div className="p-8 flex justify-end text-white ">
        {" "}
        <Link className="text-[20px]">X</Link>
      </div>
      <div className="text-center  pb-10">
        <div className="text-white text-[44px] font-bold">Buat Akun Baru</div>
        <div className="m-auto mt-5  bg-white w-[550px]  rounded-md flex justify-center ">
          <form action="" className="text-borderuser flex flex-col">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-[500px] text-[15px] p-5 font-semibold pl-5 mt-7 h-[60px] border-borderuser border-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Nomor Telepon"
              className="w-[500px] text-[15px] p-5 pl-5 font-semibold mt-4 h-[60px] border-borderuser border-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Alamat Email"
              className="w-[500px] text-[15px] p-5 pl-5 font-semibold mt-4 h-[60px] border-borderuser border-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[500px] text-[15px] p-5 pl-5 font-semibold mt-4 h-[60px] border-borderuser border-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="w-[500px] text-[15px] p-5 pl-5 font-semibold mt-4 h-[60px] border-borderuser border-2 rounded-md"
            />
            <Link
              to="/LoginAdmin"
              className="bg-bguser h-[60px] rounded-3xl font-semibold mt-4 text-white mb-[20px] font-bold pt-4"
            >
              Daftar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
