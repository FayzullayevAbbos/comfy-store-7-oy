
import Navbar from "../layouts/Navbar";

import FilterProd from "../components/FilterProd";
import ProdContainer from "../components/ProdContainer";
import ProdPagination from "../components/ProdPagination";
import useMyFetch from "../hooks/useMyFetch";
import { useSelector } from "react-redux";


function Products() {
  const {data ,setData} = useMyFetch()
  const dark = useSelector(state => state.dark)

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className=" h-full  dark:bg-[#414558] ">
        <Navbar />
        <section className="align-element py-20 max-w-[1088px] mx-auto  px-4  h-full ">
          <FilterProd />

          <div className=" max-w-[1088px] mx-auto flex justify-between mt-8 pb-4">
            <span className=" dark:text-[#F8F8F2]" >22 products</span>
            <span className=" dark:text-[#F8F8F2]">Actions</span>
          </div>
          <hr />
          <ProdContainer />
          <ProdPagination />
        </section>
      </div>
    </div>
  );
}

export default Products;
