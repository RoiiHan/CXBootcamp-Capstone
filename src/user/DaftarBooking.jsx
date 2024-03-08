import React from "react";
import { Link } from "react-router-dom";
import group from "../component/user/Group.png";
import prof from "../component/user/profile.png";
import home from "../component/user/Beranda/home-bold.png";
import bloodplus from "../component/user/Beranda/blood-plus-outline.png";
import date from "../component/user/Beranda/date-add.png";
import bloodbag from "../component/user/Beranda/blood-bag-donation.png";
import icon from "../component/user/Beranda/icon-park-outline_data-all.png";
import hand from "../component/user/Beranda/streamline_blood-donate-drop.png";
import bloodcheck from "../component/user/Beranda/blood-check-outline.png";
import lines from "../component/user/Beranda/material-symbols_patient-list-outline.png";
import post from "../component/user/Beranda/material-symbols_post-add.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const DaftarBooking = () => {
    return (
        <div className="front-poppins bg-white">
            {/* SECTION HEAD */}
            <div className="flex h-20">
                <div className="flex ">
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

                            <div className="mt-[10px]">
                                <span className="text-[13px] text-pdg font-poppins">User</span>
                            </div>
                        </div>
                        <div className="flex pt-0  w-[60px] h-[60px] mt-3  ">
                            <img
                                src={prof}
                                alt="Profil"
                                className="w-full h-auto rounded-full w-[50px] h-[50px]"
                            />
                        </div>

                    </div>
                </div>
            </div>
            {/* Beranda */}
            <div className="flex mt-2 font-sans">
                <div className="bg-aburam w-[200px] h-[400px] flex  rounded-md">
                    <nav className="text-border w-[200px] cursor-pointer">
                        <ul className=" flex flex-col text-[14px] ">
                            <li className=" p-[25px] pt-[10px] mt-[10px] h-10  hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                <img
                                    src={home}
                                    alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]"
                                />
                                Beranda
                            </li>

                            <li className=" p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                <img
                                    src={bloodplus}
                                    alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]"
                                />
                                Donor Darah
                            </li>
                            <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                <img
                                    src={date}
                                    alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]"
                                />
                                Jadwal Donor
                            </li>
                            <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                <img
                                    src={bloodbag}
                                    alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]"
                                />{" "}
                                Booking Darah
                            </li>
                            <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                <img
                                    src={icon}
                                    alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]"
                                />
                                Data Donor
                            </li>
                            <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                <img
                                    src={hand}
                                    alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]"
                                />
                                Butuh Darah
                            </li>
                            <li className="p-[25px] pt-[10px] h-10  text-border font-bold text-[12px] hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                Informasi
                            </li>
                            <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                <img
                                    src={bloodcheck}
                                    alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]"
                                />{" "}
                                Stok Darah
                            </li>
                            <li className="p-[25px] pt-[10px] h-10 bg-donor text-white flex rounded-md">
                                <Link to="/DaftarBooking" className="flex">
                                    <img
                                        src={lines}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px] "
                                    />{" "}
                                    Daftar Booking
                                </Link>
                            </li>

                            <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                <img
                                    src={post}
                                    alt="frame"
                                    className="w-[20px] h-[20px] mr-[10px]"
                                />{" "}
                                Postingan
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* isi */}
                <div className="bg-white ml-2 rounded-md w-screen font-poppins">
                    <div className="m-0 ml-[50px] p-auto">
                        <span className="text-pdg font-bold text-[25px] font-poppins">
                            DAFTAR BOOKING
                        </span>{" "}
                        <span className="text-donor font-bold text-[25px] font-poppins">
                            DARAH
                        </span>
                        <form action="">
                            <input
                                type="text"
                                placeholder="Cari Nama Pasien"
                                className="outline-none placeholder-border border-border border-2 rounded-3xl w-[600px] h-10 p-4 ml-[200px] mt-5"
                            />
                            <FontAwesomeIcon icon={faSearch}
                                className="h-5 w-5 ml-[-30px] mt-[10px] text-gray-500" />
                            <table className="w-auto mt-8 mb-10">
                                <tr className="bg-donor text-white text-center">
                                    <td className="p-[10px] px-[2.5rem]">Nama Pasien</td>
                                    <td className="px-[2.5rem]">Golongan darah</td>
                                    <td className="px-[2.5rem]">Tanggal Kebutuhan Darah</td>
                                    <td className="pr-[2rem]">Keteranan Pasien</td>
                                </tr>
                                <tr className="my-[8px]  border-b-2 border-black">
                                    <td>Imam Rahmad</td>
                                    <td className="text-center">O</td>
                                    <td className="text-center">11 februari 2024</td>
                                    <td className="w-[20rem] py-3">Pasien menderita penyakit yang membutuhkan transfusi darah secara rutin.</td>
                                </tr>
                                <tr className="my-[8px]  border-b-2 border-black">
                                    <td>Imam Rahmad</td>
                                    <td className="text-center">O</td>
                                    <td className="text-center">11 februari 2024</td>
                                    <td className="w-[20rem] py-3">Pasien menderita penyakit yang membutuhkan transfusi darah secara rutin.</td>
                                </tr>
                                <tr className="my-[8px]  border-b-2 border-black">
                                    <td>Imam Rahmad</td>
                                    <td className="text-center">O</td>
                                    <td className="text-center">11 februari 2024</td>
                                    <td className="w-[20rem] py-3">Pasien menderita penyakit yang membutuhkan transfusi darah secara rutin.</td>
                                </tr>
                                <tr className="my-[8px]  border-b-2 border-black">
                                    <td>Imam Rahmad</td>
                                    <td className="text-center">O</td>
                                    <td className="text-center">11 februari 2024</td>
                                    <td className="w-[20rem] py-3">Pasien menderita penyakit yang membutuhkan transfusi darah secara rutin.</td>
                                </tr>
                                <tr className="my-[8px]  border-b-2 border-black">
                                    <td>Imam Rahmad</td>
                                    <td className="text-center">O</td>
                                    <td className="text-center">11 februari 2024</td>
                                    <td className="w-[20rem] py-3">Pasien menderita penyakit yang membutuhkan transfusi darah secara rutin.</td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaftarBooking;