import users from "./users.json";

export type User = {
  name: string;
};

export const useUsers = () => {
  return users;
};
