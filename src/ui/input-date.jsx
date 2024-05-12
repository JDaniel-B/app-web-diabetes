import React from "react";
import { Input } from "@nextui-org/react";

function InputDate({ change }) {
  return (
    <Input
      id="date"
      type="datetime-local"
      placeholder="Fecha"
      name="date"
      autoComplete="off"
      onChange={(e) => change(e)}
      label="Fecha"
    />
  );
}

export default InputDate;
