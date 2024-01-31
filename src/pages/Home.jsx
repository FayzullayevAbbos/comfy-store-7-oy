import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Carusel from "../components/Carusel";
import MinCart from "../components/MinCart";
import useMyFetch from "../hooks/useMyFetch";
import { useSelector } from "react-redux";

function Home({setAddPro}) {
  const { data, setData  } = useMyFetch();
  const dark = useSelector(state => state.dark)
  console.log(data);
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className=" dark:bg-[#272935] pb-[180px]  dark:text-[#F8F8F2]  ">
        <Navbar />

        <div className="max-w-[1152px] container px-8  py-20 mx-auto flex justify-between items-center  dark:bg-[#272935]">
          <div>
            <h1 className="max-w-[500px] text-[60px] font-bold leading-[70px] text-[#394E6A]  dark:text-[#F8F8F2] ">
              We are changing the way people shop
            </h1>
            <p className="mt-8 max-w-[500px] text-[18px] text-[#394E6A] dark:text-[#F8F8F2]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <Link to={"/products"}>
              <button className="btn btn-info text-white mt-10 dark:text-[#394E6A] dark:btn-secondary">
                OUR PRODUCTS
              </button>
            </Link>
          </div>
          <Carusel />
        </div>
        <div className="max-w-[1152px] px-8 mx-auto container ">
          <div className="text-[30px] text-[#394E6A] dark:text-[#F8F8F2] font-semibold pb-5">
            Featured Products
          </div>
          <hr />
          <div className=" w-full pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {data.data
              ? data.data.map((d, i) => {
                  if (i < 3) {
                    return (
                      <div className="w-full">
                        <MinCart  setAddPro={setAddPro} data={d} />
                      </div>
                    );
                  }
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
