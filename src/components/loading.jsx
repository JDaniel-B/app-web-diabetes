import { Spinner } from "@nextui-org/react";
export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spinner label="Cargando..." size="lg" />
    </div>
  );
}
