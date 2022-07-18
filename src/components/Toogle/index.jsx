import React, { useState } from "react";
import './styles.css'

export const ToggleCustom = (props) =>{
  const [checked, setChecked] = useState(true);
  const {
    title,
    size = "default",
    enabled,
    disabled,
    offstyle = "btn-danger",
    onstyle = "btn-success",
  } = props;
  const handleChange = (e) => {
    setChecked((prev) => !prev);
  };

  let displayStyle = checked ? onstyle : offstyle;
  return (
    <label className="flex flex-col">
      <span className="switch-label">{title}</span>
      <span className={`${size} switch-wrapper`}>
        <input
          type="checkbox"
          checked={checked}
          enabled={enabled}
          disabled={disabled}
          onChange={(e) => handleChange(e)}
        />
        <span className={`${displayStyle} switch`}>
          <span className="switch-handle" />
        </span>
      </span>
    </label>
  );
}
