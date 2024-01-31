import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setDark } from "../redax/appSlice";

function Navbar() {
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <>
      <div className="bg-[#021431] dark:bg-[#414558]">
        <div className="max-w-[1152px] flex justify-end gap-5 mx-auto container py-2 px-8 text-[14px] text-[#C7C9D1]">
          <a href="#">Sign in / Guest</a>
          <a href="#">Create Account</a>

          {/* <button className="btn btn-outline btn-info">Info</button> */}
        </div>
      </div>
      <div className="bg-[#F0F6FF]  dark:bg-[#181920]">
        <div className="max-w-[1152px]   dark:bg-[#181920] px-8 py-2 mx-auto container flex items-center justify-between bg-[#F0F6FF]">
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle dark:bg-[#181920] dark:text-[#F8F8F2]  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:bg-[#181920]"
              >
                <li className="px-4 active:bg-[#181920] text-[#394E6A] dark:text-[#F7F7F7] ">
                  <NavLink to={"/"}>Home</NavLink>
                </li>

                <li className=" px-4 text-[#394E6A] dark:text-[#F7F7F7]">
                  <NavLink to={"/about"}>About</NavLink>
                </li>

                <li className="px-4 text-[#394E6A] dark:text-[#F7F7F7]">
                  <NavLink to={"/products"}> Product </NavLink>
                </li>

                <li className="px-4 text-[#394E6A] dark:text-[#F7F7F7]">
                  {" "}
                  <NavLink to={"/cart"}>Cart</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Link to={"/"}>
            <div className=" hidden lg:flex text-white btn btn-info dark:btn-secondary text-center pb-1 dark:text-[#301C27] text-[30px] px-4">
              C
            </div>
          </Link>

          <ul class="menu menu-horizontal hidden lg:flex">
            <li>
              <NavLink className="capitalize dark:text-[#F7F7F7] " to={"/"} aria-current="page">
                home
              </NavLink>
            </li>
            <li>
              <NavLink className="capitalize dark:text-[#F7F7F7]" to={"/about"}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink className="capitalize dark:text-[#F7F7F7]" to={"/products"}>
                Product
              </NavLink>
            </li>
            <li>
              <NavLink className="capitalize dark:text-[#F7F7F7]" to={"/cart"}>
                Cart
              </NavLink>
            </li>
            
          </ul>

          {/* <ul className="lg:flex item-center  justify-center hidden ">
            <li className="px-4 active text-[#394E6A] dark:text-[#F7F7F7] ">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li className=" px-4 text-[#394E6A] dark:text-[#F7F7F7]">
              <NavLink to={"/about"}>About</NavLink>
            </li>

            <li className="px-4 text-[#394E6A] dark:text-[#F7F7F7]">
              <NavLink to={"/products"}>  </NavLink>
            </li>

            <li className="px-4 text-[#394E6A] dark:text-[#F7F7F7]">
              {" "}
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
          </ul> */}

          <div className=" flex  gap-2 dark:text-white">
            <div
              onClick={() => {
                dispatch(setDark(!dark));
              }}
              className="flex cursor-pointer"
            >
              {dark ? (
                <svg
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                </svg>
              ) : (
                <svg
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor "
                  className=" cursor-pointer"
                >
                  <path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>
                </svg>
              )}
            </div>

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator hover:">
                <Link to={"/cart"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item dark:bg-secondary dark:text-[#272935] font-bold bg-[#009DE4] text-white  outline-none border-none">
                    {count}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
