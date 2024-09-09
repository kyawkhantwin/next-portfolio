type ProjectData = {
  name: string;
  images: string[];
  stacks: string[];
  features: string[];
  description: string;
};

type ProjectSlug =
  | "chat"
  | "ecommerce-native"
  | "bookstore"
  | "restaurant"
  | "mallmax"
  | "lightcode";

type Data = {
  [key in ProjectSlug]: ProjectData;
};

export const getDataBaseOnRoute = (slug: ProjectSlug) => {
  const data: Data = {
    bookstore: {
      name: "Book Store",
      images: [
        "/project/bookstore1.png",
        "/project/bookstore2.png",
        "/project/bookstore3.png",
      ],
      description: ``,
      stacks: ["Mongo", "Express", "React", "Node.JS"],
      features: [
        "Create, Read, Update, Delete",
        " User Authentication (Login, Register, Logout)",
      ],
    },
    "ecommerce-native": {
      name: "React Native Ecommerce",
      images: [
        "/project/ecommerce-phone1.jpg",
        "/project/ecommerce-phone2.jpg",
        "/project/ecommerce-phone3.jpg",
      ],
      description: ``,
      stacks: [
        "Expo React Native",
        "GlueStack Ui",
        "Redux",
        "Nest.js",
        "Postgres",
        "Prisma",
      ],
      features: [
        "Users Authentication (Admin & User)",
        "AdminDashboard",
        "Cart",
        "Order",
        "Transaction",
        "Category",
        "Product",
        "Settings",
        "Search (With Category or Product Name)",
        "Light & Dark Theme",
      ],
    },
    restaurant: {
      name: "React Restaurants POS",
      images: [
        "/project/restaurant1.png",
        "/project/restaurant2.png",
        "/project/restaurant3.png",
      ],
      description: ``,
      stacks: ["Mongo", "Express", "React", "Node.JS"],

      features: [
        "Menu",
        "Select Dished (Before Order Confirm)",
        "Order",
        "Transaction",
        "User Authentication (Admin & User)",
        "Admin DashBoard",
      ],
    },
    chat: {
      name: "Chat (Real Time Chat Feature)",
      images: [
        "/project/chat1.jpg",

        "/project/chat2.jpg",
        "/project/chat3.jpg",
      ],
      description: `
      `,
      stacks: [
        "Socket.io",
        "Mongo",
        "Express",
        "Expo (React Native)",
        "Node.JS",
      ],
      features: [
        " User Authentication (Login, Register, Logout)",
        "Add Friend",
        "UnFriend",
        "Accept Friend",
        "Chat (Real Time)",
        "Theme(Dark & Light)",
      ],
    },

    mallmax: {
      name: "MallMax(ecommerce)",
      images: [
        "/project/mallmax.png",
        "/project/mallmax2.png",
        "/project/mallmax3.png",
      ],
      description: ``,
      stacks: ["Laravel", "MySql", "Apache", "Bootstrap"],
      features: [
        "Users Authentication (Admin & User)",
        "AdminDashboard",
        "Cart",
        "Order",
        "Transaction",
        "Category",
        "Product",
        "Pagination",
        "Search (Product Name)",
      ],
    },
    lightcode: {
      name: "lightcode",
      images: [
        "/project/lightcode1.png",
        "/project/lightcode2.png",
        "/project/lightcode3.png",
      ],
      description: ``,
      stacks: ["Tailwind", "JavaScript"],
      features: ["Toggle Pricing Card"],
    },
  };

  return data[slug] || {};
};
