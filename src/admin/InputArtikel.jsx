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
import imguplod from "../component/user/image-fill.png";

const InputArtikel = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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
                  Dr.fadel Muhammad
                </span>
              </div>
              <div className="mt-[-5px]">
                <span className="text-[13px]">Ahli tht</span>
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
        <div className="bg-white w-52 h-[400px] flex  rounded-md">
          <nav className="text-border w-full cursor-pointer  ">
            <ul className=" flex flex-col text-[14px] ">
              <Link to="/DasboardAdmin">
                <li className=" p-[25px] pt-[10px] mt-[10px] hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300 h-10 flex">
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
              <Link to="/DaftarArtikel" className="">
                <li className=" p-[25px] pt-[10px] h-10 bg-donor text-white flex rounded-md">
                  <img
                    src={pen}
                    alt="frame"
                    className="w-[20px] h-[20px] mr-[10px] "
                  />{" "}
                  Artikel
                </li>
              </Link>
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

        {/* SECTION HALAMAN */}
        <div className="bg-white ml-3 rounded-md h-[700px] w-[850px]">
          <div className="">
            <div className="">
              <div className="m-6 ml-8  p-auto h-[450px]">
                <span className="text-pdg font-bold text-[20px]">
                  INPUT POSTINGAN
                </span>{" "}
                <span className="text-donor font-bold text-[20px]">
                  ARTIKEL KESEHATAN
                </span>
                <form action="" className="mt-5">
                  <div className="flex flex-col border-[1px] border-black items-center justify-center w-[300px] h-[200px] rounded-md p-4 bg-bgimage">
                    <img src={imguplod} className="pt-5" alt="" />
                    <label
                      htmlFor="file-upload"
                      className=" text-[16px] text-textimg  cursor-pointer"
                    >
                      Unggah Foto
                    </label>
                    <div className="text-center text-[12px] text-textimg">
                      Maks 5 MB*
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleChange}
                    />

                    <div className="text-center mt-4">
                      {selectedFile && (
                        <span className="text-gray-500">
                          File yang dipilih: {selectedFile.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <p>
                    <input
                      type="text"
                      placeholder="Penulis"
                      className="border-border border-2 rounded-md w-full h-10 p-4 mt-4"
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      placeholder="Judul"
                      className="border-border border-2 rounded-md w-full h-10 p-4 mt-4"
                    />
                  </p>
                  <p>
                    <textarea
                      name="textarea"
                      id=""
                      cols="40"
                      rows="10"
                      placeholder="Ketik disini..."
                      className="border-border border-2 w-full p-4 mb-8 mt-4"
                    ></textarea>
                  </p>
                  <button className="w-[120px] h-[42px] bg-donor p-auto text-white text-[18px] rounded-md">
                    Simpan
                  </button>
                  <button className="w-[90px] h-[42px]  border-solid border-[3px] border-donor p-auto ml-5 text-donor text-[18px] rounded-md">
                    Batal
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputArtikel;
