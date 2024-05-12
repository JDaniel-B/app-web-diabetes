"use client";
import UpdateRecordForm from "@/components/forms/update-record";
import { ModalBase } from "@/components/modal-base";
import TableRecord from "@/components/tables/record";
import { useAuthContext } from "@/providers/auth-provider";
import { find, findByUser } from "@/services/record";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function PageRecord() {
  const { push } = useRouter();
  const { user } = useAuthContext();
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState();
  const [file, setFile] = useState();

  const getFiles = async () => {
    if (user.rol == "Doctor") {
      const result = await findByUser(user?.id_usuario);
      setFiles(result);
    } else {
      const result = await find();
      setFiles(result);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div className="flex h-screen flex-col justify-center items-center gap-3 sm:gap-12 p-3">
      <h1 className="text-base sm:text-3xl">LISTADO DE EXPEDIENTES</h1>
      <div className="px-0 sm:px-8 w-full">
        <TableRecord
          add={() => push("/record/create")}
          changeStatus={(data) => console.log(data)}
          update={(data) => {
            setFile(data);
            setOpenModal(true);
          }}
          data={files}
        />
      </div>
      <ModalBase
        isOpen={openModal}
        close={() => {
          setOpenModal(false);
          getFiles();
        }}
        tittle={"Actualizar Expediente"}
      >
        <UpdateRecordForm data={file} />
      </ModalBase>
    </div>
  );
}

export default PageRecord;
