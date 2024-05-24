import { toast } from "react-toastify";
import { FavoritesType } from "../../types/AppTypes";

export const getFavoritesFromDB = async () => {
  const response = await fetch(`http://localhost:3004/favorites`);
  if (!response.ok) {
    toast.error("Error fetching favorites");
    return false;
  }
  const favorites = await response.json();
  return favorites;
};

export const getFavoritesByItemId = async (itemId: string) => {
  const favorites = await getFavoritesFromDB();
  const itemFavorites = favorites.filter(
    (favorite: FavoritesType) => favorite.itemId === itemId
  );

  if (!itemFavorites) {
    return false;
  }
  return itemFavorites;
};

export const createFavorite = async (favorite: FavoritesType) => {
  const response = await fetch("http://localhost:3004/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(favorite),
  });
  if (!response.ok) {
    toast.error("Error creating favorite");
    return false;
  }
  return true;
};

export const deleteFavoriteById = async (id: string) => {
  const response = await fetch(`http://localhost:3004/favorites/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    toast.error("Error deleting favorite");
    return false;
  }
  return true;
};
