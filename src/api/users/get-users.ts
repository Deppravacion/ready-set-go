import { toast } from "react-toastify";
import { appUser } from "../../types/AuthTypes";
export const getUsersFromDB = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) =>
  fetch("http://localhost:3004/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      console.log("positive response:");
      return response.json();
    })
    .then((users) =>
      users.find(
        (user: appUser) => user.email === email && user.password === password
      )
    )
    .then((user) => {
      if (!user) {
        toast.error("User not found");
        console.log("User not found");
        throw new Error("User not found");
      }
      sessionStorage.setItem("user", JSON.stringify(user.name));
      return user;
    });
