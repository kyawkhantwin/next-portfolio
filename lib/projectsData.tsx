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
      description: `
       Using MongoDB, Express, React, and Node.js, this book store project supports user authentication for login, registration, and logout. 
       It includes full CRUD functionality, allowing only the creator to edit or delete their own books. 
       The user interface features card and table layouts for a clear and organized browsing experience.`,
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
      description:`This e-commerce project offers user authentication for both admins and users, an Admin Dashboard, and functionalities such as a shopping cart and order management. 
      It allows searching by category or product name and offers both light and dark themes.
       The platform also includes customizable settings for a personalized experience. 
       It provides a complete solution for efficiently managing an online store.
      `

,
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
        "Review",
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
      description: `
      This React Restaurants POS system is built with MongoDB, Express, React, and Node.js. It manages menus and allows dish selection before order confirmation, along with processing orders and transactions. The system supports both admin and user authentication. An Admin Dashboard is provided for efficient management.`,
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
      description:` 
      Just like social media, this application includes functions such as adding friends, canceling friend requests, unfriending, messaging, and user login/logout.
     With the help of Socket.IO, I was able to build a real-time application that provides instant updates and interactions.
     In this app, messaging is restricted to friends only, ensuring a secure and private communication environment.
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
      description: `
      This project uses Laravel, MySQL, Apache, and Bootstrap.
      It includes user authentication, an Admin Dashboard, and tools for managing carts, orders, transactions, and categories.
      Users can search for products by name and able to use pagination.
      It also provides a review system for products enhances user feedback.`,
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
      description: ` Lightcode is a YouTube tutorial project where I learned Tailwind CSS. 
      It features a beautiful single-page UI with a toggle pricing card and blog`,
      stacks: ["Tailwind", "JavaScript"],
      features: ["Toggle Pricing Card"],
    },
  };

  return data[slug] || {};
};
