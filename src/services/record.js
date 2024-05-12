import axios from "axios";
import { toast } from "sonner";
import { options } from "./options";

export const find = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/record/find`,
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

export const findActive = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/record/findActive`,
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

export const findByUser = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/record/findByUser/${id}`,
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

export const findOne = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/record/findOne/${id}`,
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
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/record/create`,
      datos,
      options
    );
    if (data?.error) {
      return location.reload();
    }
    return {
      isValid: data.isValid,
      message: data.message,
      isExist: data?.isExist,
    };
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const replace = async (datos) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/record/replace`,
      datos,
      options
    );
    if (data?.error) {
      return location.reload();
    }
    return {
      isValid: data.isValid,
      message: data.message,
      isExist: data?.isExist,
    };
  } catch (error) {
    toast.error("Error interno del servidor");
  }
};

export const update = async (datos, id) => {
  try {
    const { data } = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/record/update/${id}`,
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
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/record/change-status/${id}`,
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

export const getDiabetes = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/web/record/get-diabetes`,
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
