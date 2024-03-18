import { Input } from "@nextui-org/react";
import { useState, useMemo } from "react";

function InputValidator({ change, name, label, regex }) {
  const [value, setValue] = useState("");

  const validateData = (value) => value.match(regex);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateData(value) ? false : true;
  }, [value]);

  return (
    <Input
      id={name}
      name={name}
      autoComplete="off"
      onChange={(e) => change(e)}
      value={value}
      onValueChange={setValue}
      label={label}
      color={isInvalid ? "danger" : "default"}
      errorMessage={isInvalid && "Ingrese un dato valido"}
      isInvalid={isInvalid}
    />
  );
}

export default InputValidator;
