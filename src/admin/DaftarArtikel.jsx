import React, { useState } from "react";
import "../index.css";
import boyjpg from "../image/IMG_20220430_200929_686.jpg";
import frame from "../component/Frame.png";
import droplet from "../component/droplet-fill.png";
import fileearmark from "../component/file-earmark-fill.png";
import pen from "../component/pen-fill.png";
import people from "../component/people-fill.png";
import peoplemin from "../component/person-dash-fill.png";
import peopleplush from "../component/person-plus-fill.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const DaftarArtikel = () => {
  const [clicked, setClicked] = useState(false);

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
        <div className="bg-white w-52 h-[400px] flex  rounded-md">
          <nav className="text-border w-full cursor-pointer  ">
            <ul className=" flex flex-col text-[14px] ">
              <li className=" p-[25px] pt-[10px] mt-[10px] h-10 flex">
                <img
                  src={frame}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />
                Dashboard
              </li>
              <li className="p-[25px] pt-[10px] h-10 text-black font-semibold text-[15px] hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300">
                Input data
              </li>
              <li className=" p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                <img
                  src={droplet}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />
                Gol Darah
              </li>
              <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                <img
                  src={fileearmark}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />
                Persyaratan
              </li>
              <li
                // className={`p-[25px] pt-[10px] h-10 ${
                //   clicked ? "bg-donor text-white rounded-md" : "hover:bg-donor "
                // } hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex `}
                // onClick={() => setClicked(true)}
                className="p-[25px] pt-[10px] h-10 bg-donor text-white flex rounded-md"
              >
                <Link to="/Daftar`Artikel" className="flex">
                  <img
                    src={pen}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px] "
                  />{" "}
                  Artikel
                </Link>
              </li>
              <li className="p-[25px] pt-[10px] h-10  text-black font-semibold text-[15px] hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                Informasi
              </li>
              <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                <img
                  src={people}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />{" "}
                Pendonor
              </li>
              <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                <img
                  src={peoplemin}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />{" "}
                Butuh Darah
              </li>
              <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                <img
                  src={peopleplush}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />{" "}
                Boking Darah
              </li>
            </ul>
          </nav>
        </div>

        {/* SECTION HALAMAN */}
        <div className="bg-white ml-2 rounded-md h-[700px] w-full ">
          <div className="">
            <div className="m-8 ml-[80px]  p-auto h-[450px]">
              <span className="text-pdg font-bold text-[20px]">
                DAFTAR POSTINGAN
              </span>{" "}
              <span className="text-donor font-bold text-[20px]">
                ARTIKEL KESEHATAN
              </span>
              <form action="" className="mt-3 flex">
                <input
                  type="text"
                  name="search"
                  id=""
                  className=" border-border border-2 rounded-md w-[600px] h-10 p-4 "
                  placeholder="Cari artikel"
                />

                <Link
                  to="/InputArtikel"
                  className="bg-tambahartikel rounded-md ml-[100px] w-[200px] h-10 text-white p-[8px]"
                >
                  Tambah Artikel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaftarArtikel;
