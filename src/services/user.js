import axios from "axios";
import { toast } from "sonner";
import { options } from "./options";

export const getMe = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/user/findOne`,
      options
    );
    return { error: data?.error, userData: data };
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/user/find`,
      options
    );
    if (data?.error) {
      return location.reload();
    }
    return data;
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const selectUser = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/user/select`,
      options
    );
    if (data?.error) {
      return location.reload();
    }
    return data;
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const getRoles = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/user/getRoles`,
      options
    );
    if (data?.error) {
      return location.reload();
    }
    return data;
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const create = async (datos) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/user/create`,
      datos,
      options
    );
    if (data?.error) {
      return location.reload();
    }
    return { isValid: data.isValid, message: data.message };
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const update = async (datos, id) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/user/update/${id}`,
      datos,
      options
    );
    if (data?.error) {
      return location.reload();
    }
    return { isValid: data.isValid, message: data.message };
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const changeStatus = async (datos, id) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/user/change-status/${id}`,
      datos,
      options
    );
    if (data?.error) {
      return location.reload();
    }
    return { isValid: data.isValid, message: data.message };
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};
