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
      description: `This app is built at the start of 2024 as a warm-up after taking a break.
         It is  a simple app where you need to log in to store books.
         Users can add books to their collection, but only the person who added a book can update or delete it.
          Others would not be able to make changes to books they did not add.`,
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
      description: `After writting the react-native chat application , I learned redux and nest.js to updated my stack.
    I put everything together in this eCommerce project.
     There are two version web and application,similar to the chat application.
     It just needs a bit more UI update to be ready for real-world use.`,
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
      description: `Built after writing React Book Store.
      At that time, I was learning Tailwind CSS and Express, so I used pure Tailwind without any UI framework.
      On top of that, my focus was on backend development, which is why this app is not suitable for production. However, I gained knowledge about Express and MongoDB.
      <br/>
      <br/>
      In this app, you can view the status of each table — whether it is empty, active, or reserved.
      You can also place an order based on the table number.
      When the customer has finished eating, click the "Done Order" button. It will
       will direct you to the transaction page and you can print the transaction sheet if you want`,
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
      description: `After the Restaurant POS project, 
      I built this React Native chat app . In this project,
      you can add, unfriend, and accept friends, just like on social media. 
      Both users have to be friends to be able to talk.
      It can also use in Web`,
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
      description: `This app is built in mid 2023 with LAMP stack.After taking the React + Laravel course from MM-Coder and completing it, I tried my own project.`,
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
      description: `I learned tailwind css through this project.As I was new to tailwind css, 
      I followed a tutorial on YouTube to build it.<br/> Note: This is Tutorial project`,
      stacks: ["Tailwind", "JavaScript"],
      features: ["Toggle Pricing Card"],
    },
  };

  return data[slug] || {};
};
