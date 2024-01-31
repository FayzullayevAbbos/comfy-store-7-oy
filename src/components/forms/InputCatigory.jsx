import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redax/appSlice";
function InputCatigory() {
  const dispatch = useDispatch()
  const category = useSelector(state => state.category)
  const options = ["all", "Tables", "Chairs", "Kids", "Sofas", "Beds"];
  function onChange(e){
    dispatch(setCategory(e.target.value))
  }
  
  return (
    <div className="form-control">
      <label htmlFor="category" className="label">
        <span className="label-text capitalize  dark:text-[#F0F6FF]">
          select category
        </span>
      </label>
      <select
      onChange={onChange}
        name="category"
        id="category"
        className="select select-bordered select-sm dark:bg-[#272935]  dark:text-[#F0F6FF]"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default InputCatigory;
