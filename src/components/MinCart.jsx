import { Link } from "react-router-dom";
import useMyFetch from "../hooks/useMyFetch";
import { useDispatch } from "react-redux";
import { setChat } from "../redax/appSlice";

function MinCart({ data, setAddPro, datas }) {
  const dispatch = useDispatch()
  const newData = [];
  function getOneProduct(e) {
     dispatch(setChat(data))
    console.log(data);
  }


  return (
    <div
      onClick={() => getOneProduct(data.id)}
      className="px-4 rounded-[16px]  bg-white  shadow-xl  pt-4 hover:shadow-2xl dark:bg-[#272935]  "
    >
      <Link className="" key={data.id} to={"/addToBag"}>
        <div className="h-[192px] overflow-hidden text-center relative   rounded-[16px] rounded-r-[16px] flex items-center justify-center">
          <img className="  " src={data.attributes.image} alt="img" />
        </div>
        <p className="text-[20px] text-[#394E6A] dark:text-[#F8F8F2] text-center mt-8">
          {data.attributes.title}
        </p>
        <p className="  text-[15px]  text-[#394E6A] dark:text-[#F8F8F2] text-center pb-8 ">
          ${data.attributes.price}
        </p>
      </Link>
    </div>
  );
}

export default MinCart;
