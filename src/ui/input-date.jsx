import React from "react";
import { Input } from "@nextui-org/react";

function InputDate({ value = "", change }) {
  return (
    <Input
      id="date"
      type="date"
      placeholder="Fecha"
      name="date"
      autoComplete="off"
      onChange={(e) => change(e)}
      value={value}
      label="Fecha"
    />
  );
}

export default InputDate;
