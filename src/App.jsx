import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginAdmin from "./admin/LoginAdmin";
import InputArtikel from "./admin/InputArtikel";
import DaftarArtikel from "./admin/DaftarArtikel";
import LoginUser from "./user/LoginUser";
import RegisterUser from "./user/RegisterUser";
import Beranda from "./user/Beranda";
import BerandaAwal from "./user/BerandaAwal";
import Persyaratan from "./user/Persyaratan";
import IsiFormulir from "./user/IsiFormulir";
import DashboardAdmin from "./admin/DashboardAdmin";
import InputGolDarah from "./admin/InputGolDarah";
import DaftarPersyaratan from "./admin/DaftarPersyaratan";
import BookingDarah from "./user/BookingDarah";
import DaftarBooking from "./user/DaftarBooking";
import Postingan from "./user/Postingan";
import InputPostingan from "./user/InputPostingan";

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
    path: "/DaftarArtikel",
    element: <DaftarArtikel />,
  },
  {
    path: "/LoginUser",
    element: <LoginUser />,
  },
  {
    path: "/RegisterUser",
    element: <RegisterUser />,
  },
  {
    path: "/",
    element: <BerandaAwal />,
  },
  {
    path: "/Beranda",
    element: <Beranda />,
  },
  {
    path: "/Persyaratan",
    element: <Persyaratan />,
  },
  {
    path: "/IsiFormulir",
    element: <IsiFormulir />,
  },
  {
    path: "/DasboardAdmin",
    element: <DashboardAdmin />,
  },
  {
    path: "/InputGolDarah",
    element: <InputGolDarah />,
  },
  {
    path: "/DaftarPersyaratan",
    element: <DaftarPersyaratan />,
  },
  {
    path: "/BookingDarah",
    element: <BookingDarah />,
  },
  {
    path: "/DaftarBooking",
    element: <DaftarBooking />,
  },
  {
    path: "/Postingan",
    element: <Postingan />,
  },
  {
    path: "/InputPostingan",
    element: <InputPostingan />,
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
