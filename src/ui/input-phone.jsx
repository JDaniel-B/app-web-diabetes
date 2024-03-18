import { Input } from "@nextui-org/react";
import { useState, useMemo } from "react";

function InputPhone({ change, defaultValue = "" }) {
  const [value, setValue] = useState("");

  const validate = (value) => value.match(/^[0-9]{8}$/);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validate(value) ? false : true;
  }, [value]);
  return (
    <Input
      value={value}
      name="phone"
      id="phone"
      autoComplete="off"
      onValueChange={setValue}
      onChange={(e) => change(e)}
      type="number"
      label="Teléfono"
      placeholder="12345678"
      color={isInvalid ? "danger" : "default"}
      errorMessage={isInvalid && "Ingrese un numero telefonico valido"}
      labelPlacement="inside"
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">+502</span>
        </div>
      }
    />
  );
}

export default InputPhone;
