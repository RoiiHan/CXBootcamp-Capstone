import React from "react";
import "../index.css";
import boyjpg from "../image/IMG_20220430_200929_686.jpg";

const InputArtikel = () => {
  return (
    <div className="h-screen font-poppins">
      {/* SECTION HEAD */}
      <div className="flex h-20 ">
        <div className="flex ">
          <div className="p-4">
            <span className="text-[26px] font-bold text-donor cursor-pointer">
              Donor
            </span>
            <span className="text-[26px] font-bold text-pdg cursor-pointer">
              .Pdg
            </span>
          </div>
          <div className="flex pl-[420px]">
            <div className="w-[600px] text-right p-4">
              <div>
                <span className="font-poppins font-semibold w-[600px]">
                  Dr.Roihan Tauhid
                </span>
              </div>
              <div className="mt-[-5px]">
                <span className="text-[13px]">Ahli tht</span>
              </div>
            </div>
            <div className="flex pt-0  w-16 h-[60px] mt-2  ">
              <img
                src={boyjpg}
                alt="Profil"
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION DASHBOARD */}
      <div className="flex mt-2 ">
        <div className="bg-white w-52 h-80 border-solid border-black border-2 flex  rounded-md">
          <div className="">Dasboard</div>
        </div>

        {/* SECTION HALAMAN */}
        <div>
          <div className="bg-white ml-3 border-solid border-black border-2 rounded-md h-[500px] w-[580px]">
            <div className="">
              <div>Input Postingan Artikel Kesehatan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputArtikel;
