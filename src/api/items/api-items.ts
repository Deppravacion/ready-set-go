import { toast } from "react-toastify";
import { ItemsType } from "../../types/AppTypes";

export const getItemsFromDB = async () => {
  const response = await fetch(`http://localhost:3004/items`);
  if (!response.ok) {
    toast.error("Error fetching items");
    return false;
  }
  const items = await response.json();
  return items;
};

export const getItemsByStoreId = async (storeId: string) => {
  const items = await getItemsFromDB();
  const storeItems = items.filter(
    (item: ItemsType) => item.storeId === storeId
  );

  if (!storeItems) {
    return false;
  }
  return storeItems;
};

export const createItem = async (item: ItemsType) => {
  const response = await fetch("http://localhost:3004/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    toast.error("Error creating item");
    return false;
  }
  return true;
};

export const deleteItem = async (id: string) => {
  const response = await fetch(`http://localhost:3004/items/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    toast.error("Error deleting item");
    return false;
  }
  return true;
};
