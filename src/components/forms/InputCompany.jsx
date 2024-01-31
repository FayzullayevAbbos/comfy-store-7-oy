import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompany } from "../../redax/appSlice";

function InputCompany() {
  const dispatch = useDispatch()
  const campany = useSelector( state => state.campany)
  const options = [
    "all",
    "Modenza",
    "Luxora",
    "Artifex",
    "Comfora",
    "Homestead",
  ];
  function onClick(e) {
    dispatch(setCompany(e.target.value));
  }

  return (
    <div className="form-control">
      <label htmlFor="company" className="label">
        <span className="label-text capitalize  dark:text-[#F0F6FF]">
          select company
        </span>
      </label>
      <select
        onChange={onClick}
        name="company"
        id="company"
        className="select select-bordered select-sm  dark:text-[#F0F6FF] dark:bg-[#272935]"
      >
        {options.map((option ,i) => (
          <option key={i} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default InputCompany;
