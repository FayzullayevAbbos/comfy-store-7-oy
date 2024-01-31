import { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../redax/appSlice";

function InputRange() {
  const dispatch = useDispatch()
  const price =useSelector(state=> state.price)
  function onChange(e){
     dispatch(setPrice(e.target.value))
     
  }
  return (
    <div className="form-control">
      <label htmlFor="price" className="label cursor-pointer  dark:text-[#F0F6FF]">
        <span className="label-text capitalize  dark:text-[#F0F6FF]">select price</span>
        <span>${price}</span>
      </label>
      <input
        onChange={onChange}
        type="range"
        name="price"
        min="0"
        max="1000000"
        className="range range-primary range-sm dark:range-secondary"
        step="1000"
        value={price}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md  dark:text-[#F0F6FF]">0</span>
        <span className="font-bold text-md  dark:text-[#F0F6FF]">Max : $1,000.00</span>
      </div>
    </div>
  );
}

export default InputRange;
