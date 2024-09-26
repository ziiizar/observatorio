import {users} from "@/mocks/users.json";

export const getFakeAuth = async (position) => {
  if (position < 0 || position >= users.length) {
    throw new Error("Invalid position");
  }

  // Devuelve el usuario en la posición especificada
  return users[position];
};
