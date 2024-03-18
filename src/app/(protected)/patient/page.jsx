"use client";
import CreatePatientForm from "@/components/forms/create-patient";
import UpdatePatientForm from "@/components/forms/update-patient";
import { ModalBase } from "@/components/modal-base";
import TablePatient from "@/components/tables/patient";
import { changeStatus, find } from "@/services/patient";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function PagePatient() {
  const [patiets, setPatiets] = useState();
  const [patient, setPatient] = useState();
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const loadPatients = async () => {
    const result = await find();
    setPatiets(result);
  };

  const updateStatus = async (data) => {
    const { isValid, message } = await changeStatus(data, data.id_paciente);
    if (isValid) {
      toast.success(message);
      return loadPatients();
    }
    toast.error(message);
  };

  useEffect(() => {
    loadPatients();
  }, []);

  return (
    <div className="flex h-screen flex-col justify-center items-center gap-3 sm:gap-12 p-3">
      <h1 className="text-base sm:text-3xl">LISTADO DE PACIENTES</h1>
      <div className="px-0 sm:px-8 w-full">
        <TablePatient
          add={() => setOpenModalCreate(true)}
          changeStatus={(data) => updateStatus(data)}
          update={(data) => {
            setPatient(data);
            setOpenModalUpdate(true);
          }}
          data={patiets}
        />
      </div>
      <ModalBase
        isOpen={openModalCreate}
        close={() => {
          setOpenModalCreate(false);
          loadPatients();
        }}
        tittle={"Agregar Paciente"}
      >
        <CreatePatientForm />
      </ModalBase>
      <ModalBase
        isOpen={openModalUpdate}
        close={() => {
          setOpenModalUpdate(false);
          loadPatients();
        }}
        tittle={"Actualizar Paciente"}
      >
        <UpdatePatientForm
          onClose={() => setOpenModalUpdate(false)}
          data={patient}
        />
      </ModalBase>
    </div>
  );
}

export default PagePatient;
