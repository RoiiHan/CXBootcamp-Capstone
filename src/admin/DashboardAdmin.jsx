import React, { useState } from "react";
import "../index.css";
import Profil from "../image/profil1.jpeg";
import frame from "../component/Frame.png";
import droplet from "../component/droplet-fill.png";
import fileearmark from "../component/file-earmark-fill.png";
import pen from "../component/pen-fill.png";
import people from "../component/people-fill.png";
import peoplemin from "../component/person-dash-fill.png";
import peopleplush from "../component/person-plus-fill.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import btn from "../component/user/Group 310.png";
import cklis from "../component/Vector.png";
import silang from "../component/x.png";
import pth from "../component/Framepth.png";

const DashboardAdmin = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="h-screen font-poppins">
      {/* {SELECTION HEAD} */}
      <div className="flex h-20">
        <div className="flex">
          <div className="p-4">
            <span className="text-[26px] font-bold text-donor cursor-pointer">
              Donor
            </span>
            <span className="text-[26px] font-bold text-pdg cursor-pointer">
              .Pdg
            </span>
          </div>
          <div className="flex pl-[420px] ml-[90px]">
            <div className="w-[600px] text-right p-4">
              <div>
                <span className="font-poppins font-semibold w-[600px]">
                  Dr.Fadel Muhammad
                </span>
              </div>
              <div className="">
                <span className="text-[13px]">Ahli tht</span>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex pt-0 w-[60px] h-[60px] mt-3 ">
              <img
                src={Profil}
                alt="Profil"
                className="w-full h-auto rounded-full w-[50px] h-[50px] "
              />
=======

            {/* SELECTION  */}
            <div className="flex mt-2">
                <div className="bg-white w-[200px] h-[400px] flex rounded-md">
                    <nav className="text-border w-[200px] cursor-pointer">
                        <ul className="flex flex-col text-[14px]">
                            <li className="p-[25px] pt-[10px] h-10 bg-donor text-white flex rounded-md">
                                <Link to="/DashboardAdmin" className="flex">
                                    <img src={pth} alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]" />
                                    Dashboard
                                </Link>

                            </li>
                            <Link>
                                <li className="p-[25px] pt-[10px] h-10 font-bold text-black text-[15px]  hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                    Input Data
                                </li>
                            </Link>
                            <Link to="/DaftarRsGolDarah">
                                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                    <img src={droplet} alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]" />
                                    Gol Darah
                                </li>
                            </Link>
                            <Link to="/DaftarPersyaratan">
                                <li className="p-[25px] pt-[10px] h-10  hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                    <img src={fileearmark} alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]" />
                                    Persyaratan
                                </li>
                            </Link>
                            <Link to="/DaftarArtikel" >
                                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                    <img src={pen} alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]" />
                                    Artikel
                                </li>
                            </Link>

                            <li className="p-[25px] pt-[10px] h-10 font-bold text-black text-[15px] hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                Informasi
                            </li>
                            <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                <img src={people} alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]" />
                                Pendonor
                            </li>
                            <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                <img src={peoplemin} alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]" />
                                Butuh Darah
                            </li>
                            <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                <img src={peopleplush} alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]" />
                                Booking
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* HALAMAN */}
                <div className="bg-white ml-2 rounded-md w-screen">
                    <div className="m-8 ml-[50px] p-auto">
                        <span className="text-pdg font-bold text-[20px]">DASH</span>
                        <span className="text-donor font-bold text-[20px]">BOARD</span>

                        <div className="flex mt-5">
                            <div className="bg-donor w-[15rem] text-white font-poppins rounded-md">
                                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">25</p>
                                <p className="pt-0 text-[10px] ml-5">Darah Tersedia</p>
                                <button><img src={btn} alt="" className="w-10 ml-[200px]" /></button>
                            </div>
                            <div className="bg-donor w-[15rem] text-white font-poppins rounded-md ml-20">
                                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">55</p>
                                <p className="pt-0 text-[10px] ml-5">Kasus Ditangani</p>
                                <button><img src={btn} alt="" className="w-10 ml-[200px]" /></button>
                            </div>
                            <div className="bg-donorO w-[15rem] text-white font-poppins rounded-md ml-20">
                                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">14</p>
                                <p className="pt-0 text-[10px] ml-5">Kasus Belum Ditangani</p>
                                <button><img src={btn} alt="" className="w-10 ml-[200px]" /></button>
                            </div>
                        </div>
                        <div className="flex mt-10 mb-10">
                            <div className="bg-donor w-[15rem] text-white font-poppins rounded-md">
                                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">250</p>
                                <p className="pt-0 text-[10px] ml-5">Pendonor Darah</p>
                                <button><img src={btn} alt="" className="w-10 ml-[200px]" /></button>
                            </div>
                            <div className="bg-donor w-[15rem] text-white font-poppins rounded-md ml-20">
                                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">550</p>
                                <p className="pt-0 text-[10px] ml-5">Booking Darah</p>
                                <button><img src={btn} alt="" className="w-10 ml-[200px]" /></button>
                            </div>
                            <div className="bg-donor w-[15rem] text-white font-poppins rounded-md ml-20">
                                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">140</p>
                                <p className="pt-0 text-[10px] ml-5">Postingan dan Artikel</p>
                                <button><img src={btn} alt="" className="w-10 ml-[200px]" /></button>
                            </div>
                        </div>
                        <div>
                            <span className="text-pdg font-bold text-[20px]">DATA</span>
                            <span className="text-donor font-bold text-[20px]">PENDONOR DARAH</span>
                            <form action="mt-5 ">
                                <input
                                    type="text"
                                    placeholder="Cari Nama"
                                    className="outline-none placeholder-border border-border border-2 rounded-md w-[600px] h-10 p-4"
                                />
                                <FontAwesomeIcon icon={faSearch}
                                    className="h-5 w-5 ml-[-30px] mt-[10px] text-gray-500" />
                            </form>
                            <div>
                                <table className="w-full mt-[20px] text-center">
                                    <tr className=" p-[10px]">
                                        <td>Nama</td>
                                        <td>Tipe Gol Darah</td>
                                        <td>Tanggal Pendaftaran</td>
                                        <td>Tanggal Pelaksanaan</td>
                                        <td>Aksi</td>
                                    </tr>
                                    <tr className="mt-5">
                                        <td className="py-5">Syahrul Gunawan Asri</td>
                                        <td>A</td>
                                        <td>20 Januari 2024</td>
                                        <td>25 Januari 2024</td>
                                        <div className="mt-4">
                                            <td className="bg-selesai text-white text-[10px] flex px-2 py-2 rounded-md">
                                                <img src={cklis} alt="" className="w-4" />
                                                <p className="ml-2">Selesai</p>
                                            </td>
                                        </div>
                                    </tr>
                                    <tr className="">
                                        <td className="py-5">Syahrul Gunawan Asri</td>
                                        <td>A</td>
                                        <td>20 Januari 2024</td>
                                        <td>25 Januari 2024</td>
                                        <div className="mt-3">
                                            <td className="bg-selesai text-white text-[10px] flex px-2 py-2 rounded-md">
                                                <img src={cklis} alt="" className="w-4" />
                                                <p className="ml-2">Selesai</p>
                                            </td>
                                        </div>

                                    </tr>
                                    <tr className="">
                                        <td className="py-5">Syahrul Gunawan Asri</td>
                                        <td>A</td>
                                        <td>20 Januari 2024</td>
                                        <td>25 Januari 2024</td>
                                        <div className="mt-3">
                                            <td className="bg-selesai text-white text-[10px] flex px-2 py-2 rounded-md">
                                                <img src={cklis} alt="" className="w-4" />
                                                <p className="ml-2">Selesai</p>
                                            </td>
                                        </div>

                                    </tr>
                                    <tr className="">
                                        <td className="py-5">Syahrul Gunawan Asri</td>
                                        <td>A</td>
                                        <td>20 Januari 2024</td>
                                        <td>25 Januari 2024</td>
                                        <div className="mt-3">
                                            <td className="bg-donor text-white text-[10px] flex px-2 py-2 rounded-md">
                                                <img src={silang} alt="" className="w-4" />
                                                <p className="ml-2">Batal</p>
                                            </td>
                                        </div>

                                    </tr>
                                    <tr className="">
                                        <td className="py-5">Syahrul Gunawan Asri</td>
                                        <td>A</td>
                                        <td>20 Januari 2024</td>
                                        <td>25 Januari 2024</td>
                                        <div className="mt-3">
                                            <td className="bg-selesai text-white text-[10px] flex px-2 py-2 rounded-md">
                                                <img src={cklis} alt="" className="w-4" />
                                                <p className="ml-2">Selesai</p>
                                            </td>
                                        </div>

                                    </tr>

                                </table>
                            </div>
                            <div className="ml-[350px]">
                                <button className="m-10 border-border border-2 rounded-md w-[200px] h-10 bg-white text-black-500 hover:bg-border hover:text-700
                                ">
                                    Lihat Selengkapnya
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

>>>>>>> be2383806f1a0751a985cf0583962a3079327feb
            </div>
          </div>
        </div>
      </div>

      {/* SELECTION  */}
      <div className="flex mt-2">
        <div className="bg-white w-[200px] h-[400px] flex rounded-md">
          <nav className="text-border w-full cursor-pointer  ">
            <ul className=" flex flex-col text-[14px] ">
              <Link to="/DasboardAdmin">
                <li className=" p-[25px] pt-[10px] mt-[10px] bg-donor text-white  rounded-md  h-10 flex">
                  <img
                    src={frame}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />
                  Dashboard
                </li>
              </Link>

              <li className="p-[25px] pt-[10px] h-10 text-black font-semibold text-[15px] hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300">
                Input data
              </li>
              <Link to="/DaftarRsGolDarah">
                <li className=" p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                  <img
                    src={droplet}
                    alt="frame"
                    className="w-[20px] h-[20spx] mr-[10px]"
                  />
                  Gol Darah
                </li>
              </Link>
              <Link to="/DaftarPersyaratan">
                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                  <img
                    src={fileearmark}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />
                  Persyaratan
                </li>
              </Link>
              <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex rounded-md">
                <Link to="/DaftarArtikel" className="flex ">
                  <img
                    src={pen}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px] "
                  />{" "}
                  Artikel
                </Link>
              </li>
              <Link>
                <li className="p-[25px] pt-[10px] h-10  text-black font-semibold text-[15px] hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  Informasi
                </li>
              </Link>
              <Link>
                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  <img
                    src={people}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Pendonor
                </li>
              </Link>
              <Link>
                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  <img
                    src={peoplemin}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Butuh Darah
                </li>
              </Link>
              <Link>
                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  <img
                    src={peopleplush}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Boking Darah
                </li>
              </Link>
            </ul>
          </nav>
        </div>

        {/* HALAMAN */}
        <div className="bg-white ml-2 rounded-md w-screen">
          <div className="m-8 ml-[50px] p-auto">
            <span className="text-pdg font-bold text-[20px]">DASH</span>
            <span className="text-donor font-bold text-[20px]">BOARD</span>

            <div className="flex mt-5">
              <div className="bg-donor w-[15rem] text-white font-poppins rounded-md">
                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">25</p>
                <p className="pt-0 text-[10px] ml-5">Darah Tersedia</p>
                <button>
                  <img src={btn} alt="" className="w-10 ml-[200px]" />
                </button>
              </div>
              <div className="bg-donor w-[15rem] text-white font-poppins rounded-md ml-20">
                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">55</p>
                <p className="pt-0 text-[10px] ml-5">Kasus Ditangani</p>
                <button>
                  <img src={btn} alt="" className="w-10 ml-[200px]" />
                </button>
              </div>
              <div className="bg-donorO w-[15rem] text-white font-poppins rounded-md ml-20">
                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">14</p>
                <p className="pt-0 text-[10px] ml-5">Kasus Belum Ditangani</p>
                <button>
                  <img src={btn} alt="" className="w-10 ml-[200px]" />
                </button>
              </div>
            </div>
            <div className="flex mt-10 mb-10">
              <div className="bg-donor w-[15rem] text-white font-poppins rounded-md">
                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">
                  250
                </p>
                <p className="pt-0 text-[10px] ml-5">Pendonor Darah</p>
                <button>
                  <img src={btn} alt="" className="w-10 ml-[200px]" />
                </button>
              </div>
              <div className="bg-donor w-[15rem] text-white font-poppins rounded-md ml-20">
                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">
                  550
                </p>
                <p className="pt-0 text-[10px] ml-5">Booking Darah</p>
                <button>
                  <img src={btn} alt="" className="w-10 ml-[200px]" />
                </button>
              </div>
              <div className="bg-donor w-[15rem] text-white font-poppins rounded-md ml-20">
                <p className="pt-5 font-bold text-[30px] ml-5 border-b-2">
                  140
                </p>
                <p className="pt-0 text-[10px] ml-5">Postingan dan Artikel</p>
                <button>
                  <img src={btn} alt="" className="w-10 ml-[200px]" />
                </button>
              </div>
            </div>
            <div>
              <span className="text-pdg font-bold text-[20px]">DATA</span>
              <span className="text-donor font-bold text-[20px]">
                PENDONOR DARAH
              </span>
              <form action="mt-5 ">
                <input
                  type="text"
                  placeholder="Cari Nama"
                  className="outline-none placeholder-border border-border border-2 rounded-md w-[600px] h-10 p-4"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="h-5 w-5 ml-[-30px] mt-[10px] text-gray-500"
                />
              </form>
              <div>
                <table className="w-full mt-[20px] text-center">
                  <tr className=" p-[10px]">
                    <td>Nama</td>
                    <td>Tipe Gol Darah</td>
                    <td>Tanggal Pendaftaran</td>
                    <td>Tanggal Pelaksanaan</td>
                    <td>Aksi</td>
                  </tr>
                  <tr className="mt-5">
                    <td className="py-5">Syahrul Gunawan Asri</td>
                    <td>A</td>
                    <td>20 Januari 2024</td>
                    <td>25 Januari 2024</td>
                    <div className="mt-4">
                      <td className="bg-selesai text-white text-[10px] flex px-2 py-2 rounded-md">
                        <img src={cklis} alt="" className="w-4" />
                        <p className="ml-2">Selesai</p>
                      </td>
                    </div>
                  </tr>
                  <tr className="">
                    <td className="py-5">Syahrul Gunawan Asri</td>
                    <td>A</td>
                    <td>20 Januari 2024</td>
                    <td>25 Januari 2024</td>
                    <div className="mt-3">
                      <td className="bg-selesai text-white text-[10px] flex px-2 py-2 rounded-md">
                        <img src={cklis} alt="" className="w-4" />
                        <p className="ml-2">Selesai</p>
                      </td>
                    </div>
                  </tr>
                  <tr className="">
                    <td className="py-5">Syahrul Gunawan Asri</td>
                    <td>A</td>
                    <td>20 Januari 2024</td>
                    <td>25 Januari 2024</td>
                    <div className="mt-3">
                      <td className="bg-selesai text-white text-[10px] flex px-2 py-2 rounded-md">
                        <img src={cklis} alt="" className="w-4" />
                        <p className="ml-2">Selesai</p>
                      </td>
                    </div>
                  </tr>
                  <tr className="">
                    <td className="py-5">Syahrul Gunawan Asri</td>
                    <td>A</td>
                    <td>20 Januari 2024</td>
                    <td>25 Januari 2024</td>
                    <div className="mt-3">
                      <td className="bg-donor text-white text-[10px] flex px-2 py-2 rounded-md">
                        <img src={silang} alt="" className="w-4" />
                        <p className="ml-2">Batal</p>
                      </td>
                    </div>
                  </tr>
                  <tr className="">
                    <td className="py-5">Syahrul Gunawan Asri</td>
                    <td>A</td>
                    <td>20 Januari 2024</td>
                    <td>25 Januari 2024</td>
                    <div className="mt-3">
                      <td className="bg-selesai text-white text-[10px] flex px-2 py-2 rounded-md">
                        <img src={cklis} alt="" className="w-4" />
                        <p className="ml-2">Selesai</p>
                      </td>
                    </div>
                  </tr>
                </table>
              </div>
              <div className="ml-[350px]">
                <button
                  className="m-10 border-border border-2 rounded-md w-[200px] h-10 bg-white text-black-500 hover:bg-border hover:text-700
                                "
                >
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
