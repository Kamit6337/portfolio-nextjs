import CustomImages from "@/assets/images";
import ReactIcons from "@/assets/icons";
import Image from "next/image";

const ProjectsData = [
  {
    title: "VwFlex",
    category: "Video Streaming Application",
    tech: "Next JS, Tailwind-CSS, Next-Auth, MongoDB, Mongoose, JsonWebToken",
    image: CustomImages.vwflex,
    github: "https://github.com/Kamit6337/vwflex",
    preview: "https://vwflex.vercel.app",
    details: [
      "It is like Netflix, Amazon Prime, Hotstar where a list of different categories/genres of movies/tv shows are provided",
      "watch whichever you like, whenever you have free time",
      "provide latest movies and tv shows and also the trending movies and tv shows in the app",
      "search famous personality of entertainment industry around the world, you will get their biography and movies and tv shows collection",
      "login with email or password or login with much more trustworthy, Google OAuth2.0",
      "gives recommendation based on movie/tv shows which you are currently watching",
      "create your own watchlist of movie and tv shows to watch later",
      "get access after paying subscription fee for a year, cancel anytime",
    ],
    icons: [
      {
        icon: ReactIcons.nextjs,
        name: "Next JS",
      },
      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: (
          <Image width={40} height={40} alt="image" src={CustomImages.axios} />
        ),
        name: "Axios",
      },
      {
        icon: (
          <Image
            alt="image"
            width={30}
            height={30}
            src={CustomImages.reactQuery}
          />
        ),
        name: "React-Query",
      },
      {
        icon: (
          <Image
            alt="image"
            width={25}
            height={25}
            src={CustomImages.nextAuth}
          />
        ),
        name: "Next-Auth",
      },
      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <Image
            src={CustomImages.mongoose}
            alt="mongoose"
            width={50}
            height={50}
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },
    ],
  },
  {
    title: "Notable",
    category: "CRUD based Application",
    tech: "React JS,React-Quill, Socket.io, React-Query, Tailwind-CSS, Node JS, Express JS, MongoDB, Mongoose, Passport.js, JsonWebToken",
    image: CustomImages.notable,
    github: "https://github.com/Kamit6337/notable-client",
    preview: "https://notable-client.vercel.app",
    details: [
      "here you can write your memories, study material, diaries and many more things",
      "login with email or password or login with much more trustworthy, Google OAuth2.0",
      "create notebook for each of the of category to segregate the topic",
      "you can attach tag to each notes which help in filtering of notes",
      "enabling text-editor to highlight or cutomise your text to make your notes much more readable and understandable to you",
    ],
    icons: [
      {
        icon: ReactIcons.reactjs,
        name: "React JS",
      },
      {
        icon: (
          <Image
            alt="image"
            width={30}
            height={30}
            src={CustomImages.reactQuery}
          />
        ),
        name: "React-Query",
      },

      {
        icon: ReactIcons.redux,
        name: "Redux",
      },

      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: ReactIcons.nodejs,
        name: "Node JS",
      },
      {
        icon: ReactIcons.express,
        name: "Express JS",
      },
      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <Image
            width={50}
            height={50}
            src={CustomImages.mongoose}
            alt="mongoose"
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },
    ],
  },
  {
    title: "Commercify",
    category: "E-Commerce Application",
    tech: "React JS, React-Query, Tailwind-CSS, Redux, Node JS, Express JS, Passport.js, JsonWebToken, Stripe API, MongoDB, Mongoose, JsonWebToken",
    image: CustomImages.addtocart,
    github: "https://github.com/Kamit6337/commercify-client",
    preview: "https://commercify-client.onrender.com/",
    details: [
      "like Amazon, Flipkart or any other E-Commerce platform, see a collections of products of different categories",
      "login using mobile OTP which is gaining popularity now a days",
      "filter products based on categories, pricing",
      "sort product list based on price",
      "payment mechanism using Stripe API which accept payment through Debit and Credit card in local currency",
      "create wishlist of products to buy them later",
      "cancel the product before it gets delivered",
      "return the product after it was delivered",
      "rate the delivered product out of 5 stars along with title and comment",
    ],
    icons: [
      {
        icon: ReactIcons.reactjs,
        name: "React JS",
      },
      {
        icon: (
          <Image
            width={30}
            height={30}
            alt="image"
            src={CustomImages.reactQuery}
          />
        ),
        name: "React-Query",
      },
      {
        icon: ReactIcons.redux,
        name: "Redux",
      },

      {
        icon: ReactIcons.tailwind,
        name: "Tailwind CSS",
      },
      {
        icon: ReactIcons.nodejs,
        name: "Node JS",
      },
      {
        icon: ReactIcons.express,
        name: "Express JS",
      },
      {
        icon: ReactIcons.stripe,
        name: "Stripe API",
      },

      {
        icon: ReactIcons.mongodb,
        name: "MongoDB",
      },
      {
        icon: (
          <Image
            width={50}
            height={50}
            src={CustomImages.mongoose}
            alt="mongoose"
          />
        ),
        name: "Mongoose",
      },
      {
        icon: ReactIcons.jsonwebtoken,
        name: "JWT",
      },

      {
        icon: (
          <Image alt="image" width={40} height={40} src={CustomImages.axios} />
        ),
        name: "Axios",
      },
    ],
  },
];

export default ProjectsData;
