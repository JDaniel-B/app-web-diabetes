import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React from "react";

function CardCites({ data }) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex">
        <div className="flex justify-center items-center gap-3">
          <p className="text-md">Hora de cita</p>
          <p className="text-small text-default-500">{data?.horario}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="p-3">
        <div className="flex flex-col">
          <p className="text-md">Datos del paciente</p>
          <p className="text-small text-default-500">
            <span className="font-medium">NOMBRE:</span> {data?.paciente}
          </p>
          <p className="text-small text-default-500">
            <span className="font-medium">TELEFONO:</span> +502 {data?.telefono}
          </p>
          <p className="text-small text-default-500">
            <span className="font-medium">DIRECCION:</span> {data?.direccion}
          </p>
          <p className="text-small text-default-500">
            <span className="font-medium">DIABETES:</span> {data?.diabetes}
          </p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="gap-3">
        <Button variant="light" color="primary" size="sm">
          Ver Expediente
        </Button>
        <Button variant="light" color="danger" size="sm">
          Posponer Cita
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardCites;
