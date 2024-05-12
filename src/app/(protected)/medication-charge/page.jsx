"use client";
import { ModalBase } from "@/components/modal-base";
import TableMedicaments from "@/components/tables/medicament";
import { find } from "@/services/medication";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function MedicationPage() {
  const { push } = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [charges, setCharges] = useState();

  const loadCharges = async () => {
    const result = await find();
    setCharges(result);
  };

  useEffect(() => {
    loadCharges();
  }, []);

  return (
    <div className="flex h-screen flex-col justify-center items-center gap-3 sm:gap-12 p-3">
      <h1 className="text-base sm:text-3xl">LISTADO CARGOS DE MEDICAMENTO</h1>
      <div className="px-0 sm:px-8 w-full">
        <TableMedicaments
          data={charges}
          add={() => push("/medication-charge/create")}
          changeStatus={() => console.log("object")}
          update={() => console.log("object")}
        />
      </div>
      <ModalBase
        isOpe
        n={openModal}
        close={() => {
          setOpenModal(false);
          loadAppointments();
        }}
        tittle={"Actualizar Cargo"}
      >
        {/* <UpdateRecordForm data={file} /> */}
      </ModalBase>
    </div>
  );
}

export default MedicationPage;
