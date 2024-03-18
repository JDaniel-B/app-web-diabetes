"use client";
import CreateUserForm from "@/components/forms/create-user";
import React from "react";

function CreateUserPage() {
  return (
    <div className="flex h-screen w-full px-12 gap-10 flex-col justify-center items-center">
      <h1 className="text-base sm:text-3xl">Crear Usuario</h1>
      <CreateUserForm />
    </div>
  );
}

export default CreateUserPage;
