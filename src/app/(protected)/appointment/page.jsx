"use client";
import { ModalBase } from "@/components/modal-base";
import TableAppointment from "@/components/tables/appointment";
import { useAuthContext } from "@/providers/auth-provider";
import { findByUser, find } from "@/services/appointment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function PageAppointment() {
  const { push } = useRouter();
  const { user } = useAuthContext();
  const [appointments, setAppointments] = useState();
  const [openModal, setOpenModal] = useState(false);

  const loadAppointments = async () => {
    if (user?.rol == "Doctor") {
      const result = await findByUser(user?.id_usuario);
      setAppointments(result);
    } else {
      const result = await find();
      setAppointments(result);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div className="flex h-screen flex-col justify-center items-center gap-3 sm:gap-12 p-3">
      <h1 className="text-base sm:text-3xl">LISTADO DE CITAS</h1>
      <div className="px-0 sm:px-8 w-full">
        <TableAppointment
          data={appointments}
          add={() => push("/appointment/create")}
          changeStatus={() => console.log("object")}
          update={() => console.log("object")}
        />
      </div>
      <ModalBase
        isOpen={openModal}
        close={() => {
          setOpenModal(false);
          loadAppointments();
        }}
        tittle={"Actualizar Cita"}
      >
        {/* <UpdateRecordForm data={file} /> */}
      </ModalBase>
    </div>
  );
}

export default PageAppointment;
