export const navLinks = [
  {
    id: "about",
    text: "About",
  },
  {
    id: "gallery",
    text: "Gallery",
  },
  {
    id: "contact",
    text: "Contact",
  },
];

export const aboutDescriptions = [
  {
    title: "Renegade Template",
    description: "A custom responsive web design site template for reuse.",
    steps: []
  },
  {
    title: "Installation",
    description: "Quick guide on setup the project before development and deployment. Template can evolve in anyway to fit your needs! Text content and sections can be changed by editing a constants file",
    steps: [
      "Open command line",
      "Navigate to the project directory: `cd renegade`",
      "Install dependencies: `npm install`",
      "Start the development server: `npm run dev`",
      "Open a web browser and navigate to `http://localhost:5173",
      "Text Content can be edited in `src/constats` folder",
    ],
  },
  {
    title: "Technologies",
    description: "This project was built using the following technologies:",
    steps: [
      "Vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.",
      "React: A JavaScript library for building user interfaces.",
      "Tailwind CSS: A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    ],
  },
];
