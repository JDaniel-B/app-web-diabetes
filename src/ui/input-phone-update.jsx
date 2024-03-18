import { Input } from "@nextui-org/react";
import { useState, useMemo } from "react";

function InputPhoneUpdate({ change, defaultValue = "" }) {
  const [value, setValue] = useState(defaultValue);

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
      labelPlacement="inside"
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">+502</span>
        </div>
      }
    />
  );
}

export default InputPhoneUpdate;
