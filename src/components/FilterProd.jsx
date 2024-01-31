import React from "react";
import InputText from "./forms/InputText";
import InputCatigory from "./forms/InputCatigory";
import InputCompany from "./forms/InputCompany";
import InputSort from "./forms/InputSort";
import InputRange from "./forms/InputRange";
import InputCheck from "./forms/InputCheck";
import { Form, Link } from "react-router-dom";
import useMyFetch from "../hooks/useMyFetch";
import { useDispatch, useSelector } from "react-redux";
import { setUrl } from "../redax/appSlice";

function FilterProd() {
  const company = useSelector((state) => state.company);
  const category = useSelector((state) => state.category);
  const dataSort = useSelector((state) => state.dataSort);
  const price = useSelector((state) => state.price);
  const check = useSelector((state) => state.check);
  const dispatch = useDispatch();
  // const url = useSelector(state=>)
  const { data, inp, setInp } = useMyFetch();

  function onSubmit(e) {
    dispatch(
      setUrl(
        `https://strapi-store-server.onrender.com/api/products?search=${inp}&category=${
          category ? category : "all"
        }&company=${company ? company : "all"}&order=${
          dataSort ? dataSort : "a-z"
        }&price=${price}${check ? "&shipping=on" : ""}`
      )
    );
  }

  return (
    <Form
      
      className="bg-[#F0F6FF]  dark:bg-[#181920] container  mx-auto rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
    >
      <InputText inp={inp} setInp={setInp} />

      <InputCatigory />
      <InputCompany />
      <InputSort />
      <InputRange />
      <InputCheck />
      <button
      onClick={onSubmit}
        type="submit"
        className="btn btn-primary btn-sm dark:btn-secondary"
      >
        search
      </button>
      <Link to={"/products"} className="btn btn-accent btn-sm dark:btn-warning">
        reset
      </Link>
    </Form>
  );
}

export default FilterProd;
