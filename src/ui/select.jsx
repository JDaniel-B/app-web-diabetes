import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

function SelectOption({ change, options = [], label, name }) {
  return (
    <Select
      autoComplete="off"
      id={name}
      name={name}
      onChange={(e) => change(e)}
      label={label}
    >
      {options.map((option) => (
        <SelectItem key={option.id} value={option.id}>
          {option.nombre}
        </SelectItem>
      ))}
    </Select>
  );
}

export default SelectOption;
