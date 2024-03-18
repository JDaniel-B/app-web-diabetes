import React from "react";
import { Input } from "@nextui-org/react";

export default function InputDisabled({ label, value = "" }) {
  return (
    <Input
      isReadOnly
      label={label}
      value={value}
    />
  );
}
