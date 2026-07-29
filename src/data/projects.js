import {
  FaCode,
  FaDatabase,
  FaFolderTree,
  FaRoute,
  FaServer,
  FaTerminal,
} from "react-icons/fa6";

export const projects = [
  {
    id: 1,

    slug: "interminal",

    title: "InTerminal",

    tagline: "Interactive Web-Based Terminal Simulator",

    description:
      "InTerminal is a web-based terminal simulator built with React and Vite that recreates a realistic command-line experience for Windows, Linux, and macOS. It helps users learn and practice terminal commands through an interactive and educational environment.",

    role: "Frontend Developer",

    duration: "2026",

    status: "In Development",

    github: "https://github.com/Adityammar65/InTerminal",

    demo: "https://interminal.vercel.app/",

    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],

    features: [
      "Virtual File System",
      "Command Parser",
      "Windows Terminal Simulation",
      "Linux Terminal Simulation (Coming Soon)",
      "macOS Terminal Simulation (Coming Soon)",
      "Sandbox Mode",
      "Challenge Mode (Coming Soon)",
      "Command History",
      "Responsive Interface",
    ],

    architecture: [
      {
        title: "Frontend",
        description:
          "Built with React and Tailwind CSS using reusable components for a modern and responsive user interface.",
      },
      {
        title: "Routing",
        description:
          "React Router manages client-side navigation between the landing page and project pages.",
      },
      {
        title: "Command Engine",
        description:
          "Processes user input, parses commands, and executes command handlers to simulate a real terminal environment.",
      },
      {
        title: "Virtual File System",
        description:
          "Implements an in-memory directory structure that supports common file and folder operations.",
      },
      {
        title: "State Management",
        description:
          "React Hooks manage terminal history, current directory, cursor position, and command output throughout the application.",
      },
    ],
  },

  {
    id: 2,

    slug: "garage64",

    title: "Garage64",

    tagline: "Modern Diecast E-Commerce Platform",

    description:
      "Garage64 is a modern e-commerce platform for diecast collectors built with Laravel. The application provides product management, secure authentication, shopping cart, Midtrans payment integration, order management, and sales reporting through an intuitive dashboard.",

    role: "Full Stack Developer",

    duration: "2026",

    status: "Completed",

    github: "https://github.com/Adityammar65/Garage64",

    demo: null,

    tech: ["Laravel", "Tailwind CSS", "MySQL", "Midtrans", "AJAX"],

    features: [
      "Authentication",
      "Role-Based Access",
      "Product Management",
      "Shopping Cart",
      "Checkout",
      "Midtrans Payment Gateway",
      "Sales Report",
      "Dashboard",
      "AJAX Product Search",
    ],

    architecture: [
      {
        title: "Frontend",
        description:
          "Responsive interface built with Blade templates and Tailwind CSS.",
      },
      {
        title: "Backend",
        description:
          "Laravel MVC architecture handles routing, business logic, and request validation.",
      },
      {
        title: "Database",
        description:
          "MySQL database managed using Laravel Migration, Seeder, and Eloquent ORM.",
      },
      {
        title: "Payment",
        description:
          "Integrated with Midtrans Snap API for secure online payments and callback handling.",
      },
    ],
  },

  {
    id: 3,

    slug: "findsrv",

    title: "FindSrv",

    tagline: "Digital Service Marketplace",

    description:
      "FindSrv is a web-based marketplace that connects customers with service providers through a clean, responsive, and user-friendly interface.",

    role: "Full Stack Developer",

    duration: "2025",

    status: "Completed",

    github: "https://github.com/Adityammar65/FindSrv",

    demo: null,

    tech: ["CodeIgniter 4", "Bootstrap", "MySQL"],

    features: [
      "User Authentication",
      "Service Listings",
      "Provider Profiles",
      "Category Filtering",
      "Search Functionality",
      "Responsive Design",
    ],

    architecture: [
      {
        title: "Frontend",
        description:
          "Bootstrap provides a responsive and consistent user interface.",
      },
      {
        title: "Backend",
        description:
          "CodeIgniter 4 MVC architecture separates presentation, logic, and data layers.",
      },
      {
        title: "Database",
        description:
          "MySQL stores users, services, categories, and marketplace transactions.",
      },
      {
        title: "Application Flow",
        description:
          "Users browse services, search by category, and interact with registered providers.",
      },
    ],
  },

  {
    id: 4,

    slug: "filmku",

    title: "FilmKu",

    tagline: "Movie Recommendation Application",

    description:
      "FilmKu is a movie recommendation application built with Streamlit and Supabase, allowing users to discover, browse, and manage their favorite movies through a simple web interface.",

    role: "Frontend Developer",

    duration: "2025",

    status: "Completed",

    github: "https://github.com/Adityammar65/FilmKu",

    demo: null,

    tech: ["Python", "Streamlit", "Supabase"],

    features: [
      "Movie Recommendation",
      "Movie Search",
      "Favorites",
      "Supabase Integration",
      "Responsive Dashboard",
    ],

    architecture: [
      {
        title: "Frontend",
        description:
          "Built with Streamlit for rapid development of interactive web applications.",
      },
      {
        title: "Backend",
        description:
          "Supabase provides authentication, database services, and cloud storage.",
      },
      {
        title: "Recommendation",
        description:
          "Movie recommendations are generated based on predefined datasets and user interactions.",
      },
      {
        title: "Database",
        description:
          "Supabase PostgreSQL stores movie information and user preferences.",
      },
    ],
  },
];
