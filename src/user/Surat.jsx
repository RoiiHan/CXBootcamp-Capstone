import React from 'react'
import "../index.css";
import Profil from "../component/user/gg_profile2.png";
import home from "../component/user/iconamoon_home-bold.png";
import bloodplus from "../component/user/mdi_blood-plus-outline.png";
import jadwal from "../component/user/Jadwal.png";
import booking from "../component/user/streamline_blood-bag-donation.png";
import data from "../component/user/icon-park-outline_data-all.png";
import butuh from "../component/user/butuh.png";
import syarat from "../component/user/syaarat.png";
import isi from "../component/user/isiformulir.png";
import input from "../component/user/eos-icons_modified-date-outlined.png";
import surat from "../component/user/Vector (2).png";
import { Link } from "react-router-dom";
import Langkah from "../component/user/Penggaris1.png";
import image5 from "../component/user/A4 - 1.png";
import image4 from "../component/user/image 10.png";
import btn from "../component/user/carbon_next-outline.png";
import panah from "../component/user/panah.png";
import kembali from "../component/user/pajamas_go-back.png";
const Surat = () => {
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
            <Link to="/Beranda">
              <li className=" p-[15px] pt-[10px] mt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                <img
                  src={home}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />
                Beranda
              </li>
            </Link>
            <Link to="/Persyaratan">
              <li className=" p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                <img
                  src={bloodplus}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />
                Donor Darah
              </li>
            </Link>
            <Link to="/JadwalDonor">
              <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 flex">
                <img
                  src={jadwal}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />
                Jadwal Donor
              </li>
            </Link>
            <Link to="/BookingDarah">
              <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                <img
                  src={booking}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />{" "}
                Boking Darah
              </li>
            </Link>
            <Link to="/DataDonor">
              <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                <img
                  src={data}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />{" "}
                Data Donor
              </li>
            </Link>
            <Link to="/ButuhDarah">
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
              <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                <img
                  src={isi}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />{" "}
                Isi Formulir
              </li>
            </Link>
            <Link to="/Jadwal">
              <li className="p-[15px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                <img
                  src={input}
                  alt="frame"
                  className="w-[20px] h-[20px] mr-[10px]"
                />{" "}
                Input Jadwal{" "}
              </li>
            </Link>
            <Link to="/Surat">
              <li className="p-[15px] pt-[10px] h-10  bg-donor text-white rounded-md flex">
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
                SURAT RUJUKAN
              </span>{" "}
              <span className="text-donor font-bold text-[20px]">
                DONOR DARAH
              </span>

              <div className='flex justify-center p-10px  mt-[20px] mr-[250px]'>
                  <img src={image5} alt="" className="w-[450px] justify-center p-10px" />
                </div>

                <div>
                 
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
     
      <div className="flex justify-between mt-[80px] mr-[-150px]">
                  <Link className="" to="/Persyaratan">
                    <button className="mr-[350px] flex border-[1px] border-textuserabu text-textuserabu rounded-md  py-2 px-5">
                      <img
                        src={kembali}
                        alt=""
                        className="w-[25px] mt-[-3px] mr-3"
                      />
                      Kembali
                    </button>
                    </Link>
                  <Link className="">
                    <button className=" mr-[350px] flex bg-donor text-white rounded-md py-2 px-5">
                      Selanjutnya
                      <img src={panah} alt="" className="w-[25px] ml-2" />
                    </button>
                  </Link>
                </div>     
             
            
         
              </div>
            
  )
}

export default Surat