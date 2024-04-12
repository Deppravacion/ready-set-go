import { appUser } from "../../types/AuthTypes";
export const getUsersFromDB = ({ email }: { email: string }) =>
  fetch("https://localhost:3000/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      return response.json();
    })
    .then((users) => users.find((user: appUser) => user.email === email))
    .then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    });
