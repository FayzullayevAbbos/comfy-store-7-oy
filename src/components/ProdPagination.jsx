import React from "react";
import useMyFetch from "../hooks/useMyFetch";
import { useDispatch } from "react-redux";
import { setUrl } from "../redax/appSlice";

function ProdPagination() {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-end  ">
      <div className="join pt-7 pb-20 ">
        
        <button
          onClick={() => {
            dispatch(
              setUrl(
                "https://strapi-store-server.onrender.com/api/products"
              )
            );
          }}
          className="join-item btn active  dark:bg-[#272935] dark:text-[#F8F8F2] dark:border-none dark:active-me"
        >
          1
        </button>
        <button
          onClick={() => {
            dispatch(
              setUrl(
                "https://strapi-store-server.onrender.com/api/products?page=2"
              )
            );
          }}
          className="join-item btn dark:bg-[#272935] dark:text-[#F8F8F2] dark:border-none"
        >
          2
        </button>
        <button
          onClick={() => {
            dispatch(
              setUrl(
                "https://strapi-store-server.onrender.com/api/products?page=3"
              )
            );
          }}
          className="join-item btn  dark:bg-[#272935] dark:text-[#F8F8F2] dark:border-none"
        >
          3
        </button>
        
      </div>
    </div>
  );
}

export default ProdPagination;
