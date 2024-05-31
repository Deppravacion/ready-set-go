import { writeFileSync } from "fs";

const db = {
  users: [
    {
      id: "01",
      name: "Robert Paulson",
      email: "bobby.paulson@readysetgo.com",
      password: "password123",
    },
    {
      id: "02",
      name: "Tester",
      email: "test@test.com",
      password: "pass",
    },
  ],
  stores: [
    {
      id: "01",
      name: "garageFridge",
      userId: "01",
    },
    {
      id: "02",
      name: "lx470",
      userId: "01",
    },
  ],
  items: [
    {
      id: "01",
      name: "shovel",
      image:
        "https://plus.unsplash.com/premium_photo-1680658496041-f7575066cec2?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "short shovel",
      quantity: "1",
      minQuantity: "1",
      storeId: "02",
    },
    {
      id: "02",
      name: "recoveryGear",
      image:
        "https://media.istockphoto.com/id/2101625741/photo/fastenings-for-transporting-goods-straps-steel-shackles-and-ratchet-locks.webp?b=1&s=170667a&w=0&k=20&c=w2DTHxBsWkUjQWtUivHmuNzDgtmPAqQBIhuY5vZFdm0=",
      description: "straps, shackles, etc",
      quantity: "1",
      minQuantity: "1",
      storeId: "02",
    },
    {
      id: "03",
      name: "babyMilk    ",
      image: "babyMilk.jpg",
      description: "frozen breast milk",
      quantity: "99",
      minQuantity: "18",
      storeId: "01",
    },
  ],
  favorites: [
    {
      itemId: "01",
      userId: "01",
      storeId: "02",
      id: "28ab",
    },
    {
      itemId: "02",
      userId: "01",
      storeId: "02",
      id: "a0b5",
    },
    {
      userId: "01",
      itemId: "03",
      storeId: "01",
      id: "6d93",
    },
  ],
};

writeFileSync("db.json", JSON.stringify(db, null, 2), { encoding: "utf-8" });
console.log("db.json created");
