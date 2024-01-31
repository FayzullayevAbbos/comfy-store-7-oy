import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { setCart, setCount } from "../redax/appSlice";

function AddToBag() {
  const chat = useSelector((state) => state.chats);
  const count = useSelector((state) => state.count);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const { id, attributes } = chat;
  const dark = useSelector((state) => state.dark);
  const newArr = chat;
  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="dark: dark:bg-[#272935]">
        <Navbar />
        <div className="text-md breadcrumbs max-w-[1088px] px-4 mx-auto">
          <ul className="dark:text-[#F8F8F2]">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
          </ul>
        </div>
        <div className="mt-6 px-4 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 dark: max-w-[1088px] mx-auto">
          <img
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
            src={attributes.image}
            alt=""
          />
          <div>
            <h1 className="capitalize text-3xl font-bold dark:text-[#F8F8F2]">
              {attributes.category}
            </h1>
            <h4 className="text-xl text-neutral-content font-bold mt-2">
              {attributes.company}
            </h4>
            <p className="mt-3 text-xl dark:text-[#F8F8F2]">${attributes.price}</p>
            <p className="mt-6 leading-8 dark:text-[#F8F8F2]">{attributes.description}</p>
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize dark:text-[#F8F8F2]">
                colors
              </h4>
              <div className="mt-2">
                {attributes.colors.map((color) => {
                  return (
                    <button
                      type="button"
                      className="badge w-6 h-6 mr-2 false"
                      style={{ backgroundColor: `${color}` }}
                    ></button>
                  );
                })}
              </div>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize dark:text-[#F8F8F2]">
                  amount
                </h4>
              </label>
              <select
                onChange={(e) => {
                  dispatch2(setCount(cart + e.target.value));
                }}
                className="select select-info dark:select-secondary select-bordered select-md dark:bg-[#181920] dark:text-[#F8F8F2]  "
                id="amount"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
            </div>
            <div className="mt-10">
              <button
                onClick={() => {
                  dispatch(setCart(chat));
                  dispatch2(setCount(+count + 1));
                }}
                className="btn text-[#F8F8F2] btn-info dark:btn-secondary btn-md"
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToBag;
