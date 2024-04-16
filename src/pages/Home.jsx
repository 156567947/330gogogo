import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p>home</p>

      <p>
        <Link to={"/products"}>go products</Link>
      </p>
    </>
  );
}
