import { Button } from "@nextui-org/react";
import React from "react";

function ButtonSubmit({ tittle }) {
  return (
    <Button
      color="primary"
      type="submit"
      size="lg"
      variant="light"
    >
      {tittle}
    </Button>
  );
}

export default ButtonSubmit;
