import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginAdmin from "./admin/LoginAdmin";
import InputArtikel from "./admin/InputArtikel";
import DaftarArtikel from "./admin/DaftarArtikel";
import LoginUser from "./user/LoginUser";
import RegisterUser from "./user/RegisterUser";

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
    path: "/",
    element: <LoginUser />,
  },
  {
    path: "/RegisterUser",
    element: <RegisterUser />,
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
