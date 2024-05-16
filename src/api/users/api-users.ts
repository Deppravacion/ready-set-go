import { toast } from "react-toastify";
import { UserType } from "../../types/AuthTypes";

export const getUsersFromDB = async () => {
  const response = await fetch("http://localhost:3004/users");
  if (!response.ok) {
    toast.error("Error fetching users");
    return false;
  }
  const users = await response.json();
  return users;
};

export const getUserByEmail = async (email: string) => {
  const users = await getUsersFromDB();
  if (!users) {
    return false;
  }
  const user = users.find((user: any) => user.email === email);
  return user;
};

export const createUser = async (user: UserType) => {
  const response = await fetch("http://localhost:3004/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    toast.error("Error creating user");
    return false;
  }
  return true;
};
