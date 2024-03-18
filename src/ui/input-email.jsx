import { Input } from "@nextui-org/react";
import { useState, useMemo } from "react";

function InputEmail({ change }) {
  const [value, setValue] = useState("");

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <Input
      size="lg"
      name="email"
      autoComplete="false"
      aria-autocomplete="none"
      onChange={(e) => change(e)}
      value={value}
      onValueChange={setValue}
      type="email"
      variant="underlined"
      label="Email"
      placeholder="ejemplo@gmail.com"
      color={isInvalid ? "danger" : "default"}
      errorMessage={isInvalid && "Ingrese un correo electronico valido"}
      isInvalid={isInvalid}
    />
  );
}

export default InputEmail;
