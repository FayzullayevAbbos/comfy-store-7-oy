import React from "react";

function InputText({inp , setInp}) {
 function onChange(e){
  setInp(e.target.value )
 }
  return (
    <div className="form-control">
      <label htmlFor="search" className="label">
        <span className="label-text capitalize dark:text-[#F0F6FF]">search product</span>
      </label>
      <input

        type="search"
        name="search"
        className="input input-bordered input-sm dark:active dark:bg-[#272935] dark:text-[#272935]"
        value={inp}
        onChange={onChange}
      />
    </div>
  );
}

export default InputText;
