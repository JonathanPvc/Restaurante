import React, { useState } from "react";
import Toggle from "./Toggle.component";

export const ToggleCustom = ({title = '', disabled = false}) => {
  const [state, setState] = useState({
    checked: true,
    size: "default",
    enabled: true
  })

  const handleChange = e => {
    setState((prev) => ({ ...prev, checked: e.target.checked }));
  };

  const setSize = (e) => {
    setState(prevState => ({
      ...prevState,
      size: prevState.size === "default" ? "large" : "default"
    }));
  }

    return (
      <form>
        <Toggle
          checked={state.checked}
          text={title}
          size={state.size}
          enabled={state.enabled}
          disabled={disabled}
          onChange={handleChange}
          offstyle="btn-danger"
          onstyle="btn-success"
        />
      </form>
    );

}
