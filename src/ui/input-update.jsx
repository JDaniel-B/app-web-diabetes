import { Input } from "@nextui-org/react";
import { useState, useMemo } from "react";

function InputUpdate({ change, name, label, defaultValue = "" }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <Input
      id={name}
      name={name}
      autoComplete="off"
      onChange={(e) => change(e)}
      value={value}
      onValueChange={setValue}
      label={label}
    />
  );
}

export default InputUpdate;
