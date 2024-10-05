import { axiosInstance } from "@/lib/utils";

export const fetchAllUsers = async ({ currentPage, limit }) => {
  const offset = (currentPage - 1) * limit;

  const users = await axiosInstance.get(
    `users?limit=${limit}&offset=${offset}`
  );
  return users.data;
};

export const fetchUsersTotalPages = async ({ limit }) => {
  const totalPages = await axiosInstance.get(
    `users/total-pages?limit=${limit}`
  );
  return totalPages.data;
};
