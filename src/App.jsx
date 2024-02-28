import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginAdmin from "./admin/LoginAdmin";
import InputArtikel from "./admin/InputArtikel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginAdmin />,
  },
  {
    path: "/InputArtikel",
    element: <InputArtikel />,
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
