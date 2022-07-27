import React from "react";
import "./styles.scss";

export const InputCustom = (props) => {
  const { title, type, watch, register, name, placeholder } = props;
  return (
    <div className="flex justify-between mb-5 input-container">
      <label
        className={watch(name)?.length ? "input-label-active" : "input-label"}
      >
        {title}
      </label>
      <input {...register(name)} className="input-machine" type={type} placeholder={placeholder}></input>
    </div>
  )
};