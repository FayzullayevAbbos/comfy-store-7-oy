import { useDispatch, useSelector } from "react-redux";

function InputCheck() {
  const dispatch = useDispatch()
  const check = useSelector(state => state.check)

  function onChange(e){
    
    dispatch(setCheck(e.target.checked))
  }
  return (
    <div className="form-control items-center">
      <label htmlFor="shipping" className="label cursor-pointer">
        <span className="label-text capitalize  dark:text-[#F0F6FF]">free shipping</span>
      </label>
      <input
      onChange={onChange}
        type="checkbox"
        name="shipping"
        className="checkbox checkbox-primary dark:checkbox-secondary checkbox-sm"
      />
    </div>
  );
}

export default InputCheck;
