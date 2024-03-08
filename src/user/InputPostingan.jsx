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
import kirim from "../component/user/send-outline.png";


const InputPostingan = () => {
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
                        </ul>
                    </nav>
                </div>
                {/* isi */}
                <div className="bg-white ml-2 rounded-md w-screen font-poppins">
                    <div className="m-0 ml-[50px] p-auto">
                        <span className="text-pdg font-bold text-[25px] font-poppins">
                            INPUT POSTINGAN
                        </span>{" "}
                        <span className="text-donor font-bold text-[25px] font-poppins">
                            BUTUH DARAH
                        </span>
                    </div>

                    <form action="" className="ml-[50px] mt-5 text-border font-poppins">
                        <label htmlFor="nama">Nama Lengkap</label> <br />
                        <input
                            type="text"
                            id="nama"
                            placeholder=""
                            className="outline-none placeholder-border border-border border-2 rounded-md w-[600px] h-10 p-4 ml-[50pxpx] mt-2"
                        /> <br /> <br />

                        <label htmlFor="noident">Nomor Identifikasi (KTP atau Kartu Identitas Lainnya) </label> <br />
                        <input
                            type="text"
                            id="noident"
                            placeholder=""
                            className="outline-none placeholder-border border-border border-2 rounded-md w-[300px] h-10 p-4 ml-[50pxpx] mt-2"
                        /> <br /> <br />

                        <label htmlFor="alamat">Alamat</label> <br />
                        <textarea
                            name="textarea"
                            id="alamat"
                            cols="40"
                            rows="10"
                            placeholder="Ketik disini..."
                            className="border-border border-2 w-[600px] p-4  mt-4"
                        ></textarea> <br /> <br />

                        <label htmlFor="notlp">Nomor Telepon</label> <br />
                        <input
                            type="text"
                            id="notlp"
                            placeholder=""
                            className="outline-none placeholder-border border-border border-2 rounded-md w-[300px] h-10 p-4 ml-[50pxpx] mt-2"
                        /> <br /> <br />

                        <label htmlFor="tgllahir">Tanggal Lahir</label> <br />
                        <input
                            type="date"
                            id="tgllahir"
                            placeholder=""
                            className="outline-none placeholder-border border-border border-2 rounded-md w-[300px] h-10 p-4 ml-[50pxpx] mt-2"
                        /> <br /> <br />

                        <label htmlFor="klmn">Jenis Kelamin</label> <br />
                        <input
                            type="checkbox"
                            id="klmn"
                            placeholder=""
                            className="outline-none placeholder-border border-border mr-2 w-4"
                        />
                        <label htmlFor="klmn">Laki-laki</label>
                        <input
                            type="checkbox"
                            id="klmn"
                            placeholder=""
                            className="outline-none placeholder-border border-border mr-2 w-4 ml-10"
                        />
                        <label htmlFor="klmn">Perempuan</label>
                        <br /> <br />

                        <label htmlFor="goldarah">Golongan Darah</label> <br />
                        <input
                            type="checkbox"
                            id="godarah"
                            placeholder=""
                            className="outline-none placeholder-border border-border mr-2 w-4 "
                        />
                        <label htmlFor="goldarah">A</label>
                        <input
                            type="checkbox"
                            id="godarah"
                            placeholder=""
                            className="outline-none placeholder-border border-border mr-2 w-4 ml-10"
                        />
                        <label htmlFor="goldarah">AB</label>
                        <input
                            type="checkbox"
                            id="godarah"
                            placeholder=""
                            className="outline-none placeholder-border border-border mr-2 w-4 ml-10"
                        />
                        <label htmlFor="goldarah">B</label>
                        <input
                            type="checkbox"
                            id="godarah"
                            placeholder=""
                            className="outline-none placeholder-border border-border mr-2 w-4 ml-10"
                        />
                        <label htmlFor="goldarah">O</label>
                        <br /> <br />

                        <label htmlFor="judul">Judul Postingan</label> <br />
                        <input
                            type="text"
                            id="judul"
                            placeholder=""
                            className="outline-none placeholder-border border-border border-2 rounded-md w-[600px] h-10 p-4 ml-[50pxpx] mt-2"
                        /> <br /> <br />

                        <label htmlFor="gambar">Gambar Postingan</label> <br />
                        <input
                            type="file"
                            id="gambar"
                            placeholder=""
                            className="bg-donor mt-2"
                        /> <br /> <br />

                        <label htmlFor="tgl">Tanggal Permintaan</label> <br />
                        <input
                            type="date"
                            id="tgl"
                            placeholder=""
                            className="outline-none placeholder-border border-border border-2 rounded-md w-[300px] h-10 p-4 ml-[50pxpx] mt-2"
                        /> <br /> <br />

                        <label htmlFor="keterangan">Keterangan</label> <br />
                        <textarea
                            name="textarea"
                            id="keterangan"
                            cols="40"
                            rows="10"
                            placeholder="Ketik disini..."
                            className="border-border border-2 w-[600px] p-4  mt-4"
                        ></textarea> <br /> <br />

                    </form>

                    <button className="bg-donor p-2 w-[6rem] flex ml-[600px] my-10 rounded-md  hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300">
                        <p className="my-1 text-white">Kirim</p>
                        <img src={kirim} alt="kirim" className="mx-2" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default InputPostingan;