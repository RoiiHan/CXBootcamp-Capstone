import React from 'react'
import "../index.css";
import Profil from '../image/profil1.jpeg';
import frame from "../component/Frame.png";
import droplet from "../component/droplet-fill.png";
import fileearmark from "../component/file-earmark-fill.png";
import pen from "../component/pen-fill.png";
import people from "../component/people-fill.png";
import peoplemin from "../component/person-dash-fill.png";
import peopleplush from "../component/person-plus-fill.png";
import plush from "../component/eye-fill.png";
import rectangle148 from "../component/Rectangle 148.png";
import rectangle149 from "../component/Rectangle 149.png";
import rectangle150 from "../component/Rectangle 150.png";
import silang from "../component/Vector.png";
import ceklis from "../component/x.png";
import { Link } from "react-router-dom";

const ButuhDarah = () => {
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
                Dr.Fadel Muhammad
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
    <div className="flex mt-2">
      <div className="bg-white w-[200px] h-[400px] flex  rounded-md">
        <nav className="text-border w-[200px] cursor-pointer">
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
              className="p-[25px] pt-[10px] h-10 hover:bg-donor hover:rounded-md hover:opacity-50 hover:text-white transition-300  flex"
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
            <li className="p-[25px] pt-[10px] h-10 bg-donor text-white flex rounded-md">
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
      <div className="bg-white ml-2 rounded-md w-screen  ">
        <div className="">
          <div className="m-8 ml-[50px]  p-auto">
            <span className="text-pdg font-bold text-[20px]">
              DAFTAR 
            </span>{" "}
            <span className="text-donor font-bold text-[20px]">
              PERMINTAAN POSTINGAN
            </span>
            <form action="" className="mt-3 flex">
              <input
                type="text"
                placeholder="Cari nama/no hp"
                className="outline-none placeholder-border border-border border-2 rounded-md w-[600px] h-10 p-4"
              />
              {/* <FontAwesomeIcon
                icon={faSearch}
                className="h-5 w-5 ml-[-30px] mt-[10px] text-gray-500"
              /> */}

              <Link
                to="/DaftarPostingan"
                className="flex bg-blue-700 -tambahartikel rounded-md ml-[180px] w-[180px] h-10 font-semibold text-white p-[8px] hover:bg-lime-600"
              >
                <img
                  src={plush}
                  alt="plush"
                  className="m-[2px] mr-2 w-[20px] h-[20px]"
                />{" "}
                Lihat Postingan
              </Link>
            </form>
            <br /><br />
            
              {/* tabel */}
            <div class="relative w-full flex flex-col shadow-lg mb-6">
            <table className='w-auto'>
            <thead>
              <tr className="border border-solid border-l-0 bottom-0 ">
                <th class="text-md px-6 py-3 border-b bg-stone-100">Gambar</th>
                <th class="text-md px-6 py-3 border-b  bg-stone-100">Nama </th>
                <th class="text-md px-6 py-3 border-b  bg-stone-100">Judul</th>
                <th class="text-md px-6 py-3 border-b bg-stone-100">Tanggal Permintaan</th>
                <th class="py-2 px-4 py-3 border-b   bg-stone-100">Actions</th>
              </tr>
            </thead>
            
            <thead className=' '>
              <tr className="">
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2"> <img src={rectangle148} alt="" /></td>
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2">Kevin</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">Di butuhkan Segera Gol Darah A+</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">10 Februari 2024</td>
                <td class="flex py-2 px-4 border-b ">
              <Link
                to="/ButuhDarah"
                className="flex bg-green-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={silang}
                  alt="ceklis"
                //   className="m-[-1px] mr-1 w-[1px] h-[1px]"
                />{" "}
              </Link>
              <Link
                to="/ButuhDarah"
                className="flex bg-red-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={ceklis}
                  alt="ceklis"
                  className="m-[-5px] right[-5px]"
                />{" "} 
              </Link>
                </td>
              </tr>
            </thead>

            <thead className=' '>
              <tr className="">
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2"> <img src={rectangle149 } alt="" /></td>
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2">Kevin</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">Di butuhkan Segera Gol Darah A+</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">10 Februari 2024</td>
                <td class="flex py-2 px-4 border-b ">
              <Link
                to="/ButuhDarah"
                className="flex bg-green-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={silang}
                  alt="ceklis"
                //   className="m-[-1px] mr-1 w-[1px] h-[1px]"
                />{" "}
              </Link>
              <Link
                to="/ButuhDarah"
                className="flex bg-red-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={ceklis}
                  alt="ceklis"
                  className="m-[-5px] right[-5px]"
                />{" "} 
              </Link>
                </td>
              </tr>
            </thead>

            <thead className=' '>
              <tr className="">
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2"> <img src={rectangle150} alt="" /></td>
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2">Kevin</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">Di butuhkan Segera Gol Darah A+</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">10 Februari 2024</td>
                <td class="flex py-2 px-4 border-b ">
              <Link
                to="/ButuhDarah"
                className="flex bg-green-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={silang}
                  alt="ceklis"
                //   className="m-[-1px] mr-1 w-[1px] h-[1px]"
                />{" "}
              </Link>
              <Link
                to="/ButuhDarah"
                className="flex bg-red-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={ceklis}
                  alt="ceklis"
                  className="m-[-5px] right[-5px]"
                />{" "} 
              </Link>
                </td>
              </tr>
            </thead>

            <thead className=' '>
              <tr className="">
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2"> <img src={rectangle149 } alt="" /></td>
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2">Kevin</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">Di butuhkan Segera Gol Darah A+</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">10 Februari 2024</td>
                <td class="flex py-2 px-4 border-b ">
              <Link
                to="/ButuhDarah"
                className="flex bg-green-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={silang}
                  alt="ceklis"
                //   className="m-[-1px] mr-1 w-[1px] h-[1px]"
                />{" "}
              </Link>
              <Link
                to="/ButuhDarah"
                className="flex bg-red-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={ceklis}
                  alt="ceklis"
                  className="m-[-5px] right[-5px]"
                />{" "} 
              </Link>
                </td>
              </tr>
            </thead>

            <thead className=' '>
              <tr className="">
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2"> <img src={rectangle148} alt="" /></td>
                <td class="text-md px-6 py-3 border-b border-gray-300 pb-2">Kevin</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">Di butuhkan Segera Gol Darah A+</td>
                <td class="text-md px-6 py-1 border-b border-gray-300 pb-2">10 Februari 2024</td>
                <td class="flex py-2 px-4 border-b ">
              <Link
                to="/ButuhDarah"
                className="flex bg-green-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={silang}
                  alt="ceklis"
                //   className="m-[-1px] mr-1 w-[1px] h-[1px]"
                />{" "}
              </Link>
              <Link
                to="/ButuhDarah"
                className="flex bg-red-600 -tambahartikel rounded-md ml-[25px] w-[25px] h-6 font-semibold text-white p-[5px] hover:bg-red-600"
              >
                <img
                  src={ceklis}
                  alt="ceklis"
                  className="m-[-5px] right[-5px]"
                />{" "} 
              </Link>
                </td>
              </tr>
            </thead>
            </table>
            </div>

            {/* <div className="grid grid-cols-3  gap-8 ">
              <div className="w-[300px] mt-[60px] bg-white rounded-xl shadow-lg ">
                <img src={rectangle148} alt="" />
                <div className="">
                  <h5 className="font-semibold p-2">
                    Manfaat Pendonoran Darah untuk Kesehatan
                  </h5>
                  <div className="flex">
                    <p className="text-[11px] p-2 pt-0 pb-3">
                      Oleh <span className="font-semibold">Fadel M</span>
                    </p>
                    <p className="text-[11px] pl-[95px]">25 Desember 2024</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-[300px]  mt-[60px] bg-white rounded-xl shadow-lg">
                <img src={rectangle150} alt="" />
                <div className="">
                  <h5 className="font-semibold p-2">
                    Hal yang perlu diperhatikan Setelah Donor Darah
                  </h5>
                  <div className="flex">
                    <p className="text-[11px] p-2 pt-0 pb-3">
                      Oleh <span className="font-semibold">Fadel M</span>
                    </p>
                    <p className="text-[11px] pl-[95px]">25 Desember 2024</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-[300px] mt-[60px] bg-white rounded-xl shadow-lg">
                <img src={rectangle149} alt="" />
                <div className="">
                  <h5 className="font-semibold p-2">
                    Manfaat Pendonoran Darah untuk Kesehatan
                  </h5>
                  <div className="flex">
                    <p className="text-[11px] p-2 pt-0 pb-3">
                      Oleh <span className="font-semibold">Fadel M</span>
                    </p>
                    <p className="text-[11px] pl-[95px]">25 Desember 2024</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-[300px]   bg-white rounded-xl  shadow-lg">
                <img src={rectangle150} alt="" />
                <div className="">
                  <h5 className="font-semibold p-2">
                    Hal yang perlu diperhatikan Setelah Donor Darah
                  </h5>
                  <div className="flex">
                    <p className="text-[11px] p-2 pt-0 pb-3">
                      Oleh <span className="font-semibold">Fadel M</span>
                    </p>
                    <p className="text-[11px] pl-[95px]">25 Desember 2024</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-[300px]   bg-white rounded-xl  shadow-lg">
                <img src={rectangle148} alt="" />
                <div className="">
                  <h5 className="font-semibold p-2">
                    Manfaat Pendonoran Darah untuk Kesehatan
                  </h5>
                  <div className="flex">
                    <p className="text-[11px] p-2 pt-0 pb-3">
                      Oleh <span className="font-semibold">Fadel M</span>
                    </p>
                    <p className="text-[11px] pl-[95px]">25 Desember 2024</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-[300px]   bg-white rounded-xl  shadow-lg">
                <img src={rectangle149} alt="" />
                <div className="">
                  <h5 className="font-semibold p-2">
                    Manfaat Pendonoran Darah untuk Kesehatan
                  </h5>
                  <div className="flex">
                    <p className="text-[11px] p-2 pt-0 pb-3">
                      Oleh <span className="font-semibold">Fadel M</span>
                    </p>
                    <p className="text-[11px] pl-[95px]">25 Desember 2024</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-[300px]   bg-white rounded-xl  shadow-lg">
                <img src={rectangle149} alt="" />
                <div className="">
                  <h5 className="font-semibold p-2">
                    Manfaat Pendonoran Darah untuk Kesehatan
                  </h5>
                  <div className="flex">
                    <p className="text-[11px] p-2 pt-0 pb-3">
                      Oleh <span className="font-semibold">Fadel M</span>
                    </p>
                    <p className="text-[11px] pl-[95px]">25 Desember 2024</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-[300px]   bg-white rounded-xl  shadow-lg">
                <img src={rectangle148} alt="" />
                <div className="">
                  <h5 className="font-semibold p-2">
                    Manfaat Pendonoran Darah untuk Kesehatan
                  </h5>
                  <div className="flex">
                    <p className="text-[11px] p-2 pt-0 pb-3">
                      Oleh <span className="font-semibold">Fadel M</span>
                    </p>
                    <p className="text-[11px] pl-[95px]">25 Desember 2024</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="w-[300px]   bg-white rounded-xl  shadow-lg">
                <img src={rectangle150} alt="" />
                <div className="">
                  <h5 className="font-semibold p-2">
                    Hal yang perlu diperhatikan Setelah Donor Darah
                  </h5>
                  <div className="flex">
                    <p className="text-[11px] p-2 pt-0 pb-3">
                      Oleh <span className="font-semibold">Fadel M</span>
                    </p>
                    <p className="text-[11px] pl-[95px]">25 Desember 2024</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default ButuhDarah