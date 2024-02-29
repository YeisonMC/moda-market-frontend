import React, { useState } from "react";

const Checked = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <span
      id="category"
      className={isChecked ? "pruebas-box checked" : "pruebas-box"}
      onClick={handleClick}
    />
  );
};

export default Checked;
