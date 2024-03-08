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
import linerabu from "../component/user/Beranda/material-outline.png";
import postwhite from "../component/user/Beranda/post-add.png";
import pendonor from "../component/user/image 15.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Postingan = () => {
    return (
        <div className="front-poppins bg-white">
            {/* SECTION HEAD */}
            <div className="flex h-20 font-poppins">
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
                                <span className="text-[13px] text-pdg">User</span>
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
                            <Link to="/Beranda">
                                <li className=" p-[25px] pt-[10px] mt-[10px] h-10  hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                    <img
                                        src={home}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]"
                                    />
                                    Beranda
                                </li>
                            </Link>
                            <Link>
                                <li className=" p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                    <img
                                        src={bloodplus}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]"
                                    />
                                    Donor Darah
                                </li>
                            </Link>
                            <Link>
                                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                    <img
                                        src={date}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]"
                                    />
                                    Jadwal Donor
                                </li>
                            </Link>
                            <Link>
                                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                    <img
                                        src={bloodbag}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]"
                                    />{" "}
                                    Booking Darah
                                </li>
                            </Link>
                            <Link>
                                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                    <img
                                        src={icon}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]"
                                    />
                                    Data Donor
                                </li>
                            </Link>
                            <Link>
                                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                                    <img
                                        src={hand}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]"
                                    />
                                    Butuh Darah
                                </li>
                            </Link>
                            <Link>
                                <li className="p-[25px] pt-[10px] h-10  text-border font-bold text-[12px] hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                    Informasi
                                </li>
                            </Link>
                            <Link>
                                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                    <img
                                        src={bloodcheck}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]"
                                    />{" "}
                                    Stok Darah
                                </li>
                            </Link>
                            <Link to="DaftarBooking">
                                <li className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                                    <img
                                        src={linerabu}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px]"
                                    />{" "}
                                    Daftar Booking
                                </li>
                            </Link>
                            <Link to="/Postingan" className="flex">
                                <li className="p-[25px] pt-[10px] h-10 bg-donor text-white flex rounded-md">
                                    <img
                                        src={postwhite}
                                        alt="frame"
                                        className="w-[20px] h-[20px] mr-[10px] "
                                    />{" "}
                                    postingan
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                {/* isi */}
                <div className="bg-white ml-2 rounded-md w-screen font-poppins">
                    <div className="m-0 ml-[50px] p-auto">
                        <span className="text-pdg font-bold text-[25px] font-poppins">
                            POSTINGAN YANG
                        </span>{" "}
                        <span className="text-donor font-bold text-[25px] font-poppins">
                            MEMBUTUHKAN DARAH
                        </span>
                    </div>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Cari Nama Pasien"
                            className="outline-none placeholder-border border-border border-2 rounded-3xl w-[600px] h-10 p-4 ml-[200px] mt-5"
                        />
                        <FontAwesomeIcon icon={faSearch}
                            className="h-5 w-5 ml-[-30px] mt-[10px] text-gray-500" />
                    </form>
                    <div className="flex">

                        <div className="flex my-10 ml-[50px] bg-donorburam w-[30rem] rounded-md shadow-lg ">
                            <div>
                                <img src={pendonor} alt=""
                                    className="w-[200px] h-[180px]" />
                            </div>
                            <div className="my-5 ">
                                <h5 className="text-[15px] mx-5 font-semibold text-textuserabu">
                                    Dibutuhkan Segera Golongan Darah A
                                </h5>
                                <div className="text-[12px] mx-5 mt-12 text-donor">
                                    <p> Nama : Imam Rahmad</p>
                                    <p>Tanggal Permintaan : 15 Februari 2024</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex my-10 ml-[50px] bg-donorburam w-[30rem] rounded-md shadow-lg ">
                            <div>
                                <img src={pendonor} alt=""
                                    className="w-[200px] h-[180px]" />
                            </div>
                            <div className="my-5 ">
                                <h5 className="text-[15px] mx-5 font-semibold text-textuserabu">
                                    Dibutuhkan Segera Golongan Darah A
                                </h5>
                                <div className="text-[12px] mx-5 mt-12 text-donor">
                                    <p> Nama : Imam Rahmad</p>
                                    <p>Tanggal Permintaan : 15 Februari 2024</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex">

                        <div className="flex my-10 ml-[50px] bg-donorburam w-[30rem] rounded-md shadow-lg ">
                            <div>
                                <img src={pendonor} alt=""
                                    className="w-[200px] h-[180px]" />
                            </div>
                            <div className="my-5 ">
                                <h5 className="text-[15px] mx-5 font-semibold text-textuserabu">
                                    Dibutuhkan Segera Golongan Darah A
                                </h5>
                                <div className="text-[12px] mx-5 mt-12 text-donor">
                                    <p> Nama : Imam Rahmad</p>
                                    <p>Tanggal Permintaan : 15 Februari 2024</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex my-10 ml-[50px] bg-donorburam w-[30rem] rounded-md shadow-lg ">
                            <div>
                                <img src={pendonor} alt=""
                                    className="w-[200px] h-[180px]" />
                            </div>
                            <div className="my-5 ">
                                <h5 className="text-[15px] mx-5 font-semibold text-textuserabu">
                                    Dibutuhkan Segera Golongan Darah A
                                </h5>
                                <div className="text-[12px] mx-5 mt-12 text-donor">
                                    <p> Nama : Imam Rahmad</p>
                                    <p>Tanggal Permintaan : 15 Februari 2024</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="flex">

                        <div className="flex my-10 ml-[50px] bg-donorburam w-[30rem] rounded-md shadow-lg ">
                            <div>
                                <img src={pendonor} alt=""
                                    className="w-[200px] h-[180px]" />
                            </div>
                            <div className="my-5 ">
                                <h5 className="text-[15px] mx-5 font-semibold text-textuserabu">
                                    Dibutuhkan Segera Golongan Darah A
                                </h5>
                                <div className="text-[12px] mx-5 mt-12 text-donor">
                                    <p> Nama : Imam Rahmad</p>
                                    <p>Tanggal Permintaan : 15 Februari 2024</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex my-10 ml-[50px] bg-donorburam w-[30rem] rounded-md shadow-lg ">
                            <div>
                                <img src={pendonor} alt=""
                                    className="w-[200px] h-[180px]" />
                            </div>
                            <div className="my-5 ">
                                <h5 className="text-[15px] mx-5 font-semibold text-textuserabu">
                                    Dibutuhkan Segera Golongan Darah A
                                </h5>
                                <div className="text-[12px] mx-5 mt-12 text-donor">
                                    <p> Nama : Imam Rahmad</p>
                                    <p>Tanggal Permintaan : 15 Februari 2024</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Postingan;