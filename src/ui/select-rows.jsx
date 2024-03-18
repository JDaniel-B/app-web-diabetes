import React from "react";

function SelectRows({ change }) {
  return (
    <select
      name="Filas"
      className="bg-transparent outline-none text-default-400 text-small"
      onChange={(e) => change(e)}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select>
  );
}

export default SelectRows;
