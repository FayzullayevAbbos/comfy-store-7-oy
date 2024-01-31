import React, { useState } from "react";
import { Link } from "react-router-dom";
import MinCart from "./MinCart";
import useMyFetch from "../hooks/useMyFetch";

function ProdContainer() {
  const {data , setData } = useMyFetch()
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
      { data.data ? data.data.map((n) => (
       
          <MinCart   data={n} />
      )) : ""}
    </div>
  );
}

export default ProdContainer;
