import React from "react";
import { Link } from "react-router-dom";
import healt from "../component/user/health (4) 1.png";
import download from "../component/user/material-symbols_download.png";
import image from "../component/user/image 3.png";
import image2 from "../component/user/image 4.png";
import image3 from "../component/user/nurse 1.png";
import image4 from "../component/user/image 9.png";
import btn from "../component/user/carbon_next-outline.png";
import image5 from "../component/user/image 5.png";
import image6 from "../component/user/chat 1.png";
import image7 from "../component/user/image 1.png";
import image8 from "../component/user/image 2.png";
import twiter from "../component/user/ri_twitter-line.png";
import fb from "../component/user/circum_facebook.png";
import ig from "../component/user/Vector (1).png";
import yt from "../component/user/ri_youtube-line.png";
import tt from "../component/user/ic_baseline-tiktok.png";

const BerandaAwal = () => {
  return (
    <div className="font-poppins bg-white">
      {/* Navbar */}
      <div className=" p-5 flex flex-row justify-between sticky top-0 z-10 bg-donor  h-[80px]">
        <span className=" text-white font-bold text-[24px]">
          Donor.<span className="text-textuserred">Pdg</span>
        </span>
        <ul className="flex flex-rows text-white p-2 pr-4 gap-[30px] cursor-pointer">
          <Link>
            <li>Jadwal Donor</li>
          </Link>
          <Link>
            <li>Booking Darah</li>
          </Link>
          <Link>
            <li>Stok Darah</li>
          </Link>
          <Link>
            <li>Informasi</li>
          </Link>
          <Link>
            <li>Kontak</li>
          </Link>
          <li className="mt-[-8px]">
            <Link to="/LoginUser" className="">
              <button className=" ml-2 rounded-md h-[40px] text-[12px] text-white flex flex-rows bg-donorburam">
                <span className="p-[20px] pt-3">Login</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main1 */}
      <div className="flex ">
        <div className="">
          <img src={healt} alt="" className="w-[400px] h-[300px]" />
        </div>
        <div className="p-[50px]">
          <div className="mb-2 text-donor font-semibold text-[29px]">
            Donor Darah: Tindakan Kecil, Dampak Besar
          </div>

          <div className="font-bold text-textuserabu text-[18px]">
            Ayo donor darah dan hidup sehat sekarang dengan aplikasi Ayo Donor
          </div>
          <div className="mt-[28px] flex">
            <Link className="">
              <button className=" rounded-md  w-[160px] h-[40px] text-[12px] text-white flex flex-rows bg-donor">
                <img
                  src={download}
                  alt=""
                  className="m-[10px] ml-3 w-[20px] h-[20px]"
                />{" "}
                <span className="ml-[-2px] pt-3">Unduh Sekarang</span>
              </button>
            </Link>
            <Link className="">
              <button className=" ml-7 rounded-md  hover:bg-white hover:border-[1px] hover:border-solid hover:border-black hover:text-textuserabu transition-500 w-[160px] h-[40px] text-[12px] text-white flex flex-rows bg-donorburam">
                <span className="ml-[25px] pt-3 pb-3 hover:pt-3 ">
                  Login dengan Web
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* main2 */}
      <div className="mt-[80px]">
        <div>
          <span className="text-textuserabu flex justify-center text-[28px] font-semibold">
            Kenapa donor darah dengan aplikasi Donor.Pdg?
          </span>
        </div>
        <div className="mt-[10px] flex justify-center text-center  ">
          <span className="text-bguser font-medium ">
            Untuk memberikan platform yang efektif bagi pendonor darah dan
            penerima darah <br /> untuk terhubung dan berinteraksi
          </span>
        </div>
        <div className="mt-[60px] flex justify-center cursor-pointer">
          <div className=" grid grid-cols-3 gap-[60px]">
            <div className="rounded-md w-[300px] text-center text-textuserabu font-semibold text-[14px] h-[320px] bg-donorburam">
              <img src={image} alt="" className="p-5" />
              <div className="border-solid border-donor border-2 rounded-md m-3 mt-[-10px]"></div>
              <div className="ml-[20px] mt-5 w-[250px] h-[100px]">
                Ayo, bersama-sama kita jadi bagian dari solusi. Mari donorkan
                darah untuk membantu mereka yang membutuhkan
              </div>
            </div>
            <div className="rounded-md w-[300px] text-center text-textuserabu font-semibold text-[14px] h-[320px] bg-donorburam">
              <img src={image2} alt="" className="p-5" />
              <div className="border-solid border-donor border-2 rounded-md m-3 mt-[-10px]"></div>
              <div className="ml-[20px] mt-5 w-[250px] h-[100px]">
                Ayo, bersama-sama kita jadi bagian dari solusi. Mari donorkan
                darah untuk membantu mereka yang membutuhkan
              </div>
            </div>
            <div className="rounded-md w-[300px] text-center text-textuserabu font-semibold text-[14px] h-[320px] bg-donorburam">
              <img src={image3} alt="" className="w-[300px] h-[200px]" />
              <div className="ml-[20px] mt-3 w-[250px] h-[100px]">
                Ayo, bersama-sama kita jadi bagian dari solusi. Mari donorkan
                darah untuk membantu mereka yang membutuhkan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artikel Terbaru */}
      <div className="mt-10">
        <div className="flex justify-between cursor-pointer p-8">
          <span className="font-bold text-textuserabu text-[20px]">
            Artikel Terbaru
          </span>
          <span className="text-donor font-medium">Lihat Semua</span>
        </div>
        <div className=" cursor-pointer flex justify-center ">
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-donorburam shadow-xl w-[500px] rounded-md ">
              <img src={image4} alt="" />
              <div className="p-4">
                <div className="text-[12px] text-donor">12 Februari 2024</div>
                <div className="mt-4 text-[26px] text-textuserabu font-bold">
                  Mitos dan Fakta tentang Donor Darah
                </div>
                <div className="flex justify-between mt-2">
                  <div className="w-[330px] text-[10px] text-white">
                    Memecahkan kesalahpahaman yang mungkin menghalangi orang
                    untuk menjadi pendonor darah
                  </div>
                  <Link>
                    <img
                      src={btn}
                      alt=""
                      className="w-[50px] h-[50px] mt-[-10px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-donorburam shadow-xl w-[500px] rounded-md ">
              <img src={image4} alt="" />
              <div className="p-4">
                <div className="text-[12px] text-donor">12 Februari 2024</div>
                <div className="mt-4 text-[26px] text-textuserabu font-bold">
                  Mitos dan Fakta tentang Donor Darah
                </div>
                <div className="flex justify-between mt-2">
                  <div className="w-[330px] text-[10px] text-white">
                    Memecahkan kesalahpahaman yang mungkin menghalangi orang
                    untuk menjadi pendonor darah
                  </div>
                  <Link>
                    <img
                      src={btn}
                      alt=""
                      className="w-[50px] h-[50px] mt-[-10px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" bg-donorburam w-[500px] shadow-xl  rounded-md  ">
              <div className="flex">
                <div>
                  <div className="p-3">
                    <div className="text-[12px] text-donor">
                      6 Februari 2024
                    </div>
                    <div className="w-[300px] mt-3 text-[16px] text-textuserabu font-bold">
                      Pemeriksaan Ginjal Harga Rp 51.000 Khusus Pejuang Donor
                    </div>
                    <div className="w-[300px] mt-3 text-[10px] text-white">
                      Donor.Pdg bekerjasama dengan Labpintar dan Hotel 88 Embong
                      Malang mengadakan program medical check-up bersubsidi +
                      breakfast all you can eat dari Hotel 88 Embong Malang
                      dengan...
                    </div>
                  </div>
                </div>

                <div>
                  <img src={image5} alt="" className="" />
                </div>
              </div>
            </div>
            <div className=" bg-donorburam w-[500px] shadow-xl  rounded-md  ">
              <div className="flex">
                <div>
                  <div className="p-3">
                    <div className="text-[12px] text-donor">
                      2 Februari 2024
                    </div>
                    <div className="w-[300px] mt-3 text-[16px] text-textuserabu font-bold">
                      Pemeriksaan Ginjal Harga Rp 51.000 Khusus Pejuang Donor
                    </div>
                    <div className="w-[300px] mt-3 text-[10px] text-white">
                      Kebiasaan kurang minum air mineral dapat menyebabkan
                      penurunan kesehatan ginjal. Gejala penurunan kesehatan
                      ginjal dapat berupa rasa pegal di pinggang. Jika
                      diteruskan dan tidak...
                    </div>
                  </div>
                </div>

                <div>
                  <img src={image5} alt="" className="" />
                </div>
              </div>
            </div>
            <div className=" bg-donorburam w-[500px] shadow-xl  rounded-md  ">
              <div className="flex">
                <div>
                  <div className="p-3">
                    <div className="text-[12px] text-donor">
                      28 Januari 2024
                    </div>
                    <div className="w-[300px] mt-3 text-[16px] text-textuserabu font-bold">
                      Syarat Donor Darah
                    </div>
                    <div className="w-[300px] mt-3 text-[10px] text-white">
                      Apa saja syarat untuk mendonorkan darah? Sehat jasmani dan
                      rohani, Usia 17 sampai dengan 65 tahun, Berat badan
                      minimal 46 kg, Kadar haemoglobin 12,5g% s/d 17,0g% ...
                    </div>
                  </div>
                </div>

                <div>
                  <img src={image5} alt="" className="" />
                </div>
              </div>
            </div>
            <div className=" bg-donorburam w-[500px] shadow-xl  rounded-md  ">
              <div className="flex">
                <div>
                  <div className="p-3">
                    <div className="text-[12px] text-donor">
                      18 Januari 2024
                    </div>
                    <div className="w-[300px] mt-3 text-[16px] text-textuserabu font-bold">
                      Cek Gula Darah, Kolesterol, Asam Urat Khusus Pendonor
                      Darah
                    </div>
                    <div className="w-[300px] mt-3 text-[10px] text-white">
                      Poliklinik PMI Kota Surabaya bekerjasama dengan Reblood
                      mengadakan cek kesehatan untuk asam urat, gula darah dan
                      kolesterol dengan jadwal ...
                    </div>
                  </div>
                </div>

                <div>
                  <img src={image5} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <div>
          <span className="text-textuserabu flex justify-center text-[26px] font-semibold">
            Apakah kamu sedang membutuhkan bantuan terkait donor darah?
          </span>
        </div>
        <div className="mt-[10px] flex justify-center text-center  ">
          <span className="text-bguser font-medium ">
            Kami ada di sini untuk Anda. Jika Anda membutuhkan bantuan medis
            atau konsultasi <br />
            dengan dokter, jangan ragu untuk menghubungi nomor telepon dan email
            ini.
          </span>
        </div>
      </div>

      {/* Alamat */}

      <div className="text-[12px] mt-[20px] flex ">
        <div className="text-[12px] mt-[100px] flex">
          <div className="mt-[-30px]">
            <img src={image6} alt="" className="" />
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            <div>
              <div className="font-bold text-[16px] text-textuserabu">
                Semen Padang Hospital
              </div>
              <div className="w-[300px] pt-3">
                Jl. Contoh No. 123, Kota Contoh, Kode Pos 12345Telepon: (021)
                1234-5678 / (021) 9876-5432 Email: info@rumahsakitcontoh.com{" "}
                <br />
                <div className="pt-4">
                  <Link className="">
                    <button className=" bg-donor text-white rounded-3xl p-3">
                      Hubungi
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <div className="font-bold text-[16px] text-textuserabu">
                Semen Padang Hospital
              </div>
              <div className="w-[300px] pt-3">
                Jl. Contoh No. 123, Kota Contoh, Kode Pos 12345Telepon: (021)
                1234-5678 / (021) 9876-5432 Email: info@rumahsakitcontoh.com{" "}
                <br />
                <div className="pt-4">
                  <Link className="">
                    <button className=" bg-donor text-white rounded-3xl p-3">
                      Hubungi
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-[-50px]">
              <div className="font-bold text-[16px] text-textuserabu">
                Semen Padang Hospital
              </div>
              <div className="w-[300px] pt-3">
                Jl. Contoh No. 123, Kota Contoh, Kode Pos 12345Telepon: (021)
                1234-5678 / (021) 9876-5432 Email: info@rumahsakitcontoh.com{" "}
                <br />
                <div className="pt-4">
                  <Link className="">
                    <button className=" bg-donor text-white rounded-3xl p-3">
                      Hubungi
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-[-50px]">
              <div className="font-bold text-[16px] text-textuserabu">
                Semen Padang Hospital
              </div>
              <div className="w-[300px] pt-3">
                Jl. Contoh No. 123, Kota Contoh, Kode Pos 12345Telepon: (021)
                1234-5678 / (021) 9876-5432 Email: info@rumahsakitcontoh.com{" "}
                <br />
                <div className="pt-4">
                  <Link className="">
                    <button className=" bg-donor text-white rounded-3xl p-3">
                      Hubungi
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}

      <div className="bg-donor text-[10px] text-white p-[50px] ">
        <div className="flex justify-center  gap-[100px]">
          <div className="justify-center">
            <ul className="list-none">
              <li className="font-bold text-[30px] pb-7">
                Donor.<span className="text-donorburam">Pdg</span>
              </li>
              <li className="pb-[15px] text-[12px] ">Download Aplikasi di</li>
              <li className="pb-[15px]">
                <img src={image7} alt="" className="w-[100px] h-[30px]" />
              </li>
              <li className="pb-[15px] ">
                <img src={image8} alt="" className="w-[100px] h-[30px]" />
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-none pt-[30px]">
              <li className="font-medium pb-7 text-[12px]">Informasi</li>
              <li className="pb-[15px]">Tentang Kami </li>
              <li className="pb-[15px]">Publikasi</li>
              <li className="pb-[15px]">Informasi Publik</li>
            </ul>
          </div>
          <div>
            <ul className="list-none pt-[30px]">
              <li className="font-medium pb-10"></li>
              <li className="pb-[15px]">Blog </li>
              <li className="pb-[15px]">Perlindungan</li>
              <li className="pb-[15px]">Hubungan Inverstor</li>
            </ul>
          </div>
          <div>
            <ul className="list-none pt-[30px]">
              <li className="font-medium pb-7 text-[12px]">Telusuri</li>
              <li className="pb-[15px]">Stok Darah</li>
              <li className="pb-[15px]">Lokasi</li>
              <li className="pb-[15px]">Kontak</li>
            </ul>
          </div>
          <div>
            <ul className="list-none pt-[30px]">
              <li className="font-medium pb-10"></li>
              <li className="pb-[15px]">Rumah Sakit</li>
              <li className="pb-[15px]">Jadwal Cek Darah</li>
            </ul>
          </div>
          <div className="">
            <ul className="list-none pt-[30px]">
              <li className="font-medium pb-7 text-[12px]">Follow Kami di</li>
              <div className="grid grid-cols-2 ">
                <li className=" pb-[15px] flex ">
                  <img
                    src={twiter}
                    alt=""
                    className="mr-[5px] w-[25px] h-[25px]"
                  />
                  <span className="pt-[4px]">Twiter</span>
                </li>
                <li className="pb-[15px] flex">
                  <img
                    src={ig}
                    alt=""
                    className="ml-3 mr-[5px] w-[25px] h-[25px]"
                  />
                  <span className="pt-[4px]"> Instagram</span>
                </li>
                <li className="pb-[15px] flex">
                  <img
                    src={fb}
                    alt=""
                    className=" ml-[-5px] mt-[-5px] mr-[5px] w-[30px] h-[30px]"
                  />
                  <span className=" pt-[4px]"> Facebook</span>
                </li>
                <li className="pb-[15px] flex">
                  <img
                    src={tt}
                    alt=""
                    className="ml-3 mr-[5px] w-[25px] h-[25px]"
                  />
                  <span className="pt-[4px]">Tiktok</span>
                </li>
                <li className="pb-[15px] flex">
                  <img
                    src={yt}
                    alt=""
                    className=" mr-[5px] w-[25px] h-[25px]"
                  />
                  <span className="pt-[4px]">Youtube</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* footer end */}
    </div>
  );
};

export default BerandaAwal;
