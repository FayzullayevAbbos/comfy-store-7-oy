import { useDispatch, useSelector } from "react-redux";
import { setDataSort } from "../../redax/appSlice";

function  InputSort() {
  const dispatch = useDispatch()
  const dataSort = useSelector(state => state.dataSort)

  const options = [ "a-z", "z-a","high","low",]
  function onChange(e){
    dispatch(setDataSort(e.target.value))
  }

  return (
    <div className="form-control">
      <label htmlFor="order" className="label">
        <span className="label-text capitalize  dark:text-[#F0F6FF]">sort by</span>
      </label>
      <select
      onChange={onChange}
        name="order"
        id="order"
        className="select select-bordered select-sm dark:bg-[#272935]  dark:text-[#F0F6FF]"
      >
        
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}

export default InputSort;
