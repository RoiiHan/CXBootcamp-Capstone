import React from "react";
import Profil from "../component/user/gg_profile2.png";
import home from "../component/user/iconamoon_home-bold.png";
import bloodplus from "../component/user/mdi_blood-plus-outline.png";
import jadwal from "../component/user/Vector.png";
import booking from "../component/user/streamline_blood-bag-donation.png";
import data from "../component/user/icon-park-outline_data-all.png";
import butuh from "../component/user/Butuh.png";
import isi from "../component/user/clarity_form-line.png";
import syarat from "../component/user/Persyaratan.png";
import input from "../component/user/eos-icons_modified-date-outlined.png";
import surat from "../component/user/Vector (2).png";
import Langkah from "../component/user/Group 8781.png";
import panah from "../component/user/panah.png";

import { Link } from "react-router-dom";

const Persyaratan = () => {
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
              <Link to="/Persyaratan">
                <li className="p-[15px] pt-[10px] text-[12px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex">
                  Input Data
                </li>
                <li className="p-[15px] pt-[10px] h-10 bg-donor text-white rounded-md  flex">
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
        <div className="bg-white ml-3 text-[15px] rounded-md h-[750px] w-[850px]">
          <div className="flex justify-center">
            <img src={Langkah} alt="" className="w-[600px]" />
          </div>
          <div className="">
            <div className="">
              <div className="m-6 ml-8  p-auto h-[450px]">
                <span className="text-pdg font-bold text-[20px]">
                  PERSYARATAN
                </span>{" "}
                <span className="text-donor font-bold text-[20px]">
                  PENDONOR DARAH
                </span>
                <div className="w-[700px] pl-3 mt-7">
                  1. Berusia 17–60 tahun bagi yang baru pertama kali mendonorkan
                  darah. <br />
                  2. Sedang dalam kondisi sehat, baik jasmani maupun rohani.
                  <br />
                  3.Pendonor yang berusia 60 tahun atau lebih dari 65 tahun
                  perlu mendapatkan perhatian khusus.
                  <br />
                  4.Tekanan darah normal, yakni 100/70–150/80 mmHg. <br />
                  5.Suhu tubuh berkisar antara 36,6–37,5 derajat Celcius. <br />
                  6. Denyut nadi berkisar antara 50–100 kali per menit. <br />
                  7.Berat badan minimal 45 kg. <br />
                  8. Kadar hemoglobin normal, sekitar 12,5–17 g/dL dan tidak
                  lebih dari 20 g/dL. <br />
                  9.Bersedia mendonorkan darah secara sukarela, dibuktikan
                  dengan mengisi formulir persetujuan. <br />
                  10.Jarak waktu dari donor terakhir minimal 3 bulan.
                </div>
                <div className="pl-3 mt-7 w-[850px]">
                  <div className="flex">
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="w-[20px] mt-1 mr-3 h-[20px]"
                      />
                    </div>
                    <div>
                      <span>
                        Dengan ini menyatakan bahwa saya telah{" "}
                        <span className="text-donor">membaca </span>dan
                        <span className="text-donor"> memahami </span>
                        informasi yang diberikan kepada saya terkait dengan
                        proses <span className="text-donor">donor darah</span>.
                        Saya memberikan persetujuan sukarela untuk menyumbangkan
                        darah saya untuk keperluan transfusi darah dan
                        penyelamatan nyawa orang lain.
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-5">
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="w-[20px] mr-3 mt-1 h-[20px]"
                      />
                    </div>
                    <div>
                      Dengan ini, saya menyatakan bahwa saya memberikan
                      <span className="text-donor"> persetujuan </span>
                      sepenuhnya untuk
                      <span className="text-donor"> mendonor darah </span>
                      dan saya bertanggung jawab atas keputusan ini.
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-[80px] mr-[-150px]">
                  <Link className="" to="/IsiFormulir">
                    <button className="flex bg-donor text-white rounded-md py-3 px-5">
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

export default Persyaratan;
