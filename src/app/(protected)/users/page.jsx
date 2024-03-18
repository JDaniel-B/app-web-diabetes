"use client";
import UpdateUserForm from "@/components/forms/update-user";
import { ModalBase } from "@/components/modal-base";
import TableUsers from "@/components/tables/users";
import { changeStatus, getUsers } from "@/services/user";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function UserPage() {
  const { push } = useRouter();
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
  const [modalUpdate, setModalUpdate] = useState(false);

  const loadUsers = async () => {
    const result = await getUsers();
    setUsers(result);
  };

  const updateStatus = async (data) => {
    const { isValid, message } = await changeStatus(data, data.id_usuario);
    if (isValid) {
      toast.success(message);
      return loadUsers();
    }
    return toast.error(message);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="flex h-screen flex-col justify-center items-center gap-3 sm:gap-12 p-3">
      <h1 className="text-base sm:text-3xl">LISTADO DE USUARIOS</h1>
      <div className="px-0 sm:px-8 w-full">
        <TableUsers
          add={() => push("/users/create")}
          changeStatus={(data) => updateStatus(data)}
          update={(data) => {
            setUser(data);
            setModalUpdate(true);
          }}
          data={users}
        />
      </div>
      <ModalBase
        isOpen={modalUpdate}
        close={() => {
          setModalUpdate(false);
          loadUsers();
        }}
        tittle={"Actualizar Usuario"}
      >
        <UpdateUserForm data={user} />
      </ModalBase>
    </div>
  );
}

export default UserPage;
