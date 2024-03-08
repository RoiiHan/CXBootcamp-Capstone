import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginAdmin from "./admin/LoginAdmin";
import InputArtikel from "./admin/InputArtikel";
import DaftarArtikel from "./admin/DaftarArtikel";
import Pendonor from "./admin/Pendonor";
import DataPendonor from "./admin/DataPendonor";
import ButuhDarah from "./admin/ButuhDarah";
import DaftarPostingan from "./admin/DaftarPostingan";
import BookingDarah from "./admin/BookingDarah";
import DataBooking from "./admin/DataBooking";
import LoginUser from "./user/LoginUser";
import RegisterUser from "./user/RegisterUser";
import Beranda from "./user/Beranda";
import Jadwal from "./user/Jadwal";
import Surat from "./user/Surat";
import StokDarah from "./user/StokDarah";
import JadwalDonor from "./user/JadwalDonor";



const router = createBrowserRouter([
  {
    path: "/LoginAdmin",
    element: <LoginAdmin />,
  },
  {
    path: "/InputArtikel",
    element: <InputArtikel />,
  },
  {
    path: "/DaftarArtikel",
    element: <DaftarArtikel />,
  },
  {
    path: "/Pendonor",
    element: <Pendonor />,
  },
  {
    path: "/DataPendonor",
    element: <DataPendonor />,
  },
  {
    path: "/ButuhDarah",
    element: <ButuhDarah />,
  },
  {
    path: "/DaftarPostingan",
    element: <DaftarPostingan />,
  },
  {
    path: "/BookingDarah",
    element: <BookingDarah />,
  },
  {
    path: "/DataBooking",
    element: <DataBooking />,
  },
  {
    path: "/",
    element: <LoginUser />,
  },
  {
    path: "/RegisterUser",
    element: <RegisterUser />,
  },
  {
    path: "/Beranda",
    element: <Beranda />,
  },
  {
    path: "/Jadwal",
    element: <Jadwal />,
  },
  {
    path: "/Surat",
    element: <Surat />,
  },
  {
    path: "/StokDarah",
    element: <StokDarah />,
  },
  {
    path: "/JadwalDonor",
    element: <JadwalDonor />,
  },
 
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
