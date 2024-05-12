"use client";
import CreateMedicationForm from "@/components/forms/create-medication";
import { ModalBase } from "@/components/modal-base";
import TableSelect from "@/components/tables/select";
import { recordSelect } from "@/data/record-columns";
import { findActive } from "@/services/record";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function MedicationCreatePage() {
  const { push } = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [record, setRecord] = useState();
  const [files, setFiles] = useState();

  useEffect(() => {
    (async () => {
      const result = await findActive();
      setFiles(result);
    })();
  }, []);

  return (
    <div className="flex h-screen w-full px-12 gap-10 flex-col justify-center items-center">
      <div className="flex flex-wrap justify-between items-center gap-5">
        <Button variant="ghost" onClick={() => setOpenModal(true)}>
          Seleccionar Expediente
        </Button>
      </div>
      <h1 className="text-base sm:text-3xl">AGREGAR CARGO MEDICAMENTO</h1>
      <CreateMedicationForm record={record} />
      <ModalBase
        close={() => setOpenModal(false)}
        isOpen={openModal}
        tittle={"Seleccionar Expediente"}
      >
        <TableSelect
          columns={recordSelect}
          select={(data) => {
            setRecord(data);
            setOpenModal(false);
          }}
          add={() => push("/record/create")}
          data={files}
        />
      </ModalBase>
    </div>
  );
}

export default MedicationCreatePage;
