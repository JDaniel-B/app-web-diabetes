"use client";
import CreateRecordForm from "@/components/forms/create-record";
import { ModalBase } from "@/components/modal-base";
import TableSelect from "@/components/tables/select";
import { patientSelect } from "@/data/patient-columns";
import { userSelect } from "@/data/user-columns";
import { selectPatient } from "@/services/patient";
import { selectUser } from "@/services/user";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function PageCreateRecord() {
  const { push } = useRouter();
  const [modalUser, setModalUser] = useState(false);
  const [modalPatient, setModalPatient] = useState(false);
  const [users, setUsers] = useState();
  const [patients, setPatients] = useState();
  const [user, setUser] = useState();
  const [patient, setPatient] = useState();

  const loadData = async () => {
    const users = await selectPatient();
    setPatients(users);

    const patients = await selectUser();
    setUsers(patients);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="flex h-screen w-full px-12 gap-10 flex-col justify-center items-center">
      <div className="flex flex-wrap justify-between items-center gap-5">
        <Button variant="ghost" onClick={() => setModalPatient(true)}>
          Seleccionar Paciente
        </Button>
        <Button variant="ghost" onClick={() => setModalUser(true)}>
          Seleccionar Usuario
        </Button>
      </div>
      <h1 className="text-base sm:text-3xl">AGREGAR EXPEDIENTE</h1>
      <CreateRecordForm user={user} patient={patient} />
      <ModalBase
        close={() => setModalUser(false)}
        isOpen={modalUser}
        tittle={"Seleccionar Usuario"}
      >
        <TableSelect
          columns={userSelect}
          select={(data) => {
            setUser(data);
            setModalUser(false);
          }}
          add={() => push("/dashboard")}
          data={users}
        />
      </ModalBase>
      <ModalBase
        close={() => setModalPatient(false)}
        isOpen={modalPatient}
        tittle={"Seleccionar Paciente"}
      >
        <TableSelect
          columns={patientSelect}
          select={(data) => {
            setPatient(data);
            setModalPatient(false);
          }}
          add={() => push("/dashboard")}
          data={patients}
        />
      </ModalBase>
    </div>
  );
}

export default PageCreateRecord;
