import React from "react";
import { Outlet } from "react-router-dom";

import MainNavgation from "../components/MainNavgation";
export default function RootLayout() {
  return (
    <>
      <MainNavgation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
