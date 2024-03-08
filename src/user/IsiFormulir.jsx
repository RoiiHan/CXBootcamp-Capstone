import React from "react";
import Profil from "../component/user/gg_profile2.png";
import home from "../component/user/iconamoon_home-bold.png";
import bloodplus from "../component/user/mdi_blood-plus-outline.png";
import jadwal from "../component/user/Vector.png";
import booking from "../component/user/streamline_blood-bag-donation.png";
import data from "../component/user/icon-park-outline_data-all.png";
import butuh from "../component/user/Butuh.png";
import isi from "../component/user/isi (1).png";
import syarat from "../component/user/syaarat.png";
import input from "../component/user/eos-icons_modified-date-outlined.png";
import surat from "../component/user/Vector (2).png";
import Langkah from "../component/user/8782.png";
import panah from "../component/user/panah.png";
import kembali from "../component/user/pajamas_go-back.png";

import { Link } from "react-router-dom";
const IsiFormulir = () => {
  return (
    <div className=" bg-white font-poppins">
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
            <div className=" w-[600px] text-right p-3">
              <div className="pr-0 p-5">
                <span className=" font-poppins  w-[600px]">User</span>
              </div>
            </div>
            <div className="flex pt-0  w-[60px] h-[60px] mt-3  ">
              <img
                src={Profil}
                alt="Profil"
                className="w-full h-auto rounded-full w-[50px] h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION DASHBOARD */}
      <div className="flex mt-2 ">
        <div className="bg-bgdashbord w-52 flex h-[470px]  rounded-md">
          <nav className="text-textuserabu  w-full cursor-pointer  ">
            <ul className="  flex flex-col  text-[14px] ">
              <Link to="/">
                <li className=" p-[15px] pt-[10px] mt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                  <img
                    src={home}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />
                  Beranda
                </li>
              </Link>
              <Link to="/">
                <li className=" p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                  <img
                    src={bloodplus}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />
                  Donor Darah
                </li>
              </Link>
              <Link to="">
                <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                  <img
                    src={jadwal}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />
                  Jadwal Donor
                </li>
              </Link>
              <Link to="">
                <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  <img
                    src={booking}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Boking Darah
                </li>
              </Link>
              <Link to="">
                <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  <img
                    src={data}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Data Donor
                </li>
              </Link>
              <Link to="">
                <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  <img
                    src={butuh}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Butuh Darah
                </li>
              </Link>

              <li className="p-[15px] pt-[10px] text-[12px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                Input Data
              </li>
              <Link to="/Persyaratan">
                <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300   flex">
                  <img
                    src={syarat}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Persyaratan
                </li>
              </Link>
              <Link to="/IsiFormulir">
                <li className="p-[15px] pt-[10px] h-10  bg-donor text-white rounded-md flex">
                  <img
                    src={isi}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Isi Formulir
                </li>
              </Link>
              <Link to="">
                <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  <img
                    src={input}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Input Jadwal{" "}
                </li>
              </Link>
              <Link to="">
                <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  <img
                    src={surat}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px]"
                  />{" "}
                  Surat Rujukan
                </li>
              </Link>
            </ul>
          </nav>
        </div>

        {/* SECTION HALAMAN */}
        <div className="bg-white ml-3 text-[15px] rounded-md  w-[850px]">
          <div className="flex justify-center">
            <img src={Langkah} alt="" className="w-[600px]" />
          </div>
          <div className="">
            <div className="">
              <div className="m-6 ml-8  p-auto ">
                <span className="text-pdg font-bold text-[20px]">
                  ISI FORMULIR
                </span>{" "}
                <span className="text-donor font-bold text-[20px]">
                  PENDONOR DARAH
                </span>
                <form className="mt-7 flex flex-col text-textuserabu" action="">
                  <label htmlFor="">Nama Lengkap</label>
                  <input
                    type="text"
                    className="border-[1px] rounded-md mt-3 border-textuserabu h-[40px]"
                  />
                  <label htmlFor="" className="mt-5">
                    Nomor Identifikasi (KTP atau Kartu Identitas Lainnya)
                  </label>
                  <input
                    type="text"
                    className="border-[1px] rounded-md mt-3 w-[300px] border-textuserabu h-[40px]"
                  />
                  <label htmlFor="" className="mt-5">
                    Alamat
                  </label>
                  <input
                    type="text"
                    className="border-[1px] rounded-md mt-3 border-textuserabu h-[120px]"
                  />
                  <label htmlFor="" className="mt-5">
                    Nomor Telepon
                  </label>
                  <input
                    type="text"
                    className="border-[1px] rounded-md mt-3 w-[300px] border-textuserabu h-[40px]"
                  />
                  <label htmlFor="" className="mt-5">
                    Tanggal Lahir
                  </label>
                  <input
                    type="text"
                    className="border-[1px] rounded-md mt-3 w-[300px] border-textuserabu h-[40px]"
                  />
                  <label htmlFor="" className="mt-5">
                    Jenis Kelamin
                  </label>
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="border-[1px] rounded-md mt-3 w-[100px]  border-textuserabu h-[30px]"
                    />
                    <label htmlFor="" className="mt-4 ml-[-25px]">
                      {" "}
                      Laki Laki{" "}
                    </label>
                    <input
                      type="checkbox"
                      className="border-[1px] rounded-md mt-3 w-[100px] border-textuserabu h-[30px]"
                    />
                    <label htmlFor="" className="mt-4 ml-[-25px]">
                      {" "}
                      Perempuan
                    </label>
                  </div>
                  <label htmlFor="" className="mt-5">
                    Golongan Darah
                  </label>
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="border-[1px] rounded-md mt-3 w-[100px]  border-textuserabu h-[30px]"
                    />
                    <label htmlFor="" className="mt-4 ml-[-25px]">
                      A
                    </label>
                    <input
                      type="checkbox"
                      className="border-[1px] rounded-md mt-3 w-[100px] border-textuserabu h-[30px]"
                    />
                    <label htmlFor="" className="mt-4 ml-[-25px]">
                      AB
                    </label>
                    <input
                      type="checkbox"
                      className="border-[1px] rounded-md mt-3 w-[100px] border-textuserabu h-[30px]"
                    />
                    <label htmlFor="" className="mt-4 ml-[-25px]">
                      B
                    </label>
                    <input
                      type="checkbox"
                      className="border-[1px] rounded-md mt-3 w-[100px] border-textuserabu h-[30px]"
                    />
                    <label htmlFor="" className="mt-4 ml-[-25px]">
                      O
                    </label>
                  </div>
                </form>
                <div className="flex justify-between mt-[80px] mr-[-150px]">
                  <Link className="" to="/Persyaratan">
                    <button className="flex border-[1px] border-textuserabu text-textuserabu rounded-md  pt-2 pb-2 px-3">
                      <img
                        src={kembali}
                        alt=""
                        className="w-[25px] mt-[-3px] mr-3"
                      />
                      Kembali
                    </button>
                  </Link>
                  <Link className="" to="/Jadwal">
                    <button className="flex bg-donor text-white rounded-md py-2 px-5">
                      Selanjutnya
                      <img src={panah} alt="" className="w-[25px] ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsiFormulir;
