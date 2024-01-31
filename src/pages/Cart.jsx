import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setCount } from "../redax/appSlice";

function Cart() {
  const dark = useSelector((state) => state.dark);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id, attributes } = cart;
  console.log(cart);
  return (
    <div className={`h-full ${dark ? "dark" : ""}`}>
      <div className=" lg:h-full h-auto  dark:bg-[#414558]">
        <Navbar />
        <section className="align-element py-20 max-w-[1088px] mx-auto px-4">
          <div className="border-b border-base-300 pb-5">
            <h2 className="text-3xl font-medium tracking-wider capitalize  dark:text-[#F8F8F2]">
              {cart.id ? "Shopping Cart" : "empty"}
            </h2>
          </div>
          {cart.id ? (
            <div className="mt-8 grid gap-8 g lg:grid-cols-12">
              <div className="lg:col-span-8">
                <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
                  <img
                    src={attributes?.image}
                    alt="Lounge Chair"
                    className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
                  />
                  <div className="sm:ml-16 sm:w-48">
                    <h3 className="capitalize font-medium  dark:text-[#F8F8F2]">
                      {attributes.title}
                    </h3>
                    <h4 className="mt-2 capitalize text-sm text-neutral-content">
                      {attributes.company}
                    </h4>
                    <p className="mt-4 text-sm capitalize flex items-center gap-x-2  dark:text-[#F8F8F2]">
                      color :
                      <span
                        className="badge badge-sm"
                        style={{ backgroundColor: "rgb(255, 87, 51)" }}
                      ></span>
                    </p>
                  </div>
                  <div className="sm:ml-12">
                    <div className="form-control max-w-xs">
                      <label htmlFor="amount" class="label p-0">
                        <span className="label-text  dark:text-[#F8F8F2]">
                          Amount
                        </span>
                      </label>
                      <select
                        onChange={(e) => {
                          dispatch(setCount(e.target.value));
                        }}
                        name="amount"
                        id="amount"
                        className="mt-2 select select-base select-bordered select-xs  dark:bg-[#383a48] dark:text-[#F8F8F2]"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                    <button
                      onClick={() => {
                        dispatch(setCart([]));
                        dispatch(setCount(0))
                      }}
                      class="mt-2 link link-primary link-hover text-sm text-secondary"
                    >
                      remove
                    </button>
                  </div>
                  <p className="font-medium sm:ml-auto  dark:text-[#F8F8F2]">
                    ${attributes.price}
                  </p>
                </article>
              </div>

              <div className="lg:col-span-4 lg:pl-4">
                <div className="card bg-base-200  dark:bg-[#181920]  dark:text-[#F8F8F2]">
                  <div className="card-body">
                    <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                      <span>Subtotal</span>
                      <span className="font-medium">${attributes.price}</span>
                    </p>
                    <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                      <span>Shipping</span>
                      <span className="font-medium">$5.00</span>
                    </p>
                    <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                      <span>Tax</span>
                      <span className="font-medium">$26.00</span>
                    </p>
                    <p className="flex justify-between text-sm mt-4 pb-2">
                      <span>Order Total</span>
                      <span className="font-medium">
                        ${+attributes.price + 5000 + 26000}
                      </span>
                    </p>
                  </div>
                </div>
                <Link
                  className="btn btn-primary btn-block mt-8 dark:btn-secondary uppercase dark:text-[#181920]"
                  to={"/login"}
                >
                  please login
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
    </div>
  );
}

export default Cart;
