import { toast } from "react-toastify";
import { appUser } from "../../types/AuthTypes";
export const getUsersFromDB = ({ email }: { email: string }) =>
  fetch("https://localhost:5173/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      console.log("positive response");

      return response.json();
    })
    .then((users) => users.find((user: appUser) => user.email === email))
    .then((user) => {
      if (!user) {
        toast.error("User not found");
        console.log("User not found");

        throw new Error("User not found");
      }
      return user;
    });
