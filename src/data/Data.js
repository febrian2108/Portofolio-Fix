// Data for skills and projects

import { Torus } from "lucide-react";

export const skills = [
  // Frontend Development
  {
    id: 1,
    name: "HTML5",
    category: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    description: "Markup language for creating web pages"
  },
  {
    id: 2,
    name: "CSS3",
    category: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    description: "Style sheet language for web design"
  },
  {
    id: 3,
    name: "JavaScript",
    category: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Dynamic programming language for web development"
  },
  {
    id: 4,
    name: "Bootstrap",
    category: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    description: "CSS framework for building responsive web applications"
  },
  {
    id: 5,
    name: "React",
    category: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "A JavaScript library for building user interfaces"
  },
  {
    id: 6,
    name: "Tailwind CSS",
    category: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    description: "Utility-first CSS framework"
  },
  {
    id: 7,
    name: "TypeScript",
    category: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Typed superset of JavaScript"
  },
  {
    id: 8,
    name: "Next.js",
    category: "Frontend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "React framework for building server-side rendered applications"
  },

  // Backend Development
  {
    id: 9,
    name: "Node.js",
    category: "Backend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "JavaScript runtime for server-side development"
  },
  {
    id: 10,
    name: "Express.js",
    category: "Backend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Fast, unopinionated web framework for Node.js"
  },
  {
    id: 11,
    name: "PHP",
    category: "Backend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    description: "PHP (Hypertext Preprocessor)",
  },
  {
    id: 12,
    name: "Laravel",
    category: "Backend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    description: "PHP web application framework"
  },
  {
    id: 13,
    name: "Python",
    category: "Backend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Readable and versatile backend language"
  },
  {
    id: 14,
    name: "Flask",
    category: "Backend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    description: "Lightweight Python web framework"
  },
  {
    id: 15,
    name: "Golang",
    category: "Backend Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    description: "Statically typed, compiled programming language designed for simplicity and efficiency"
  },

  // Database
  {
    id: 16,
    name: "MySQL",
    category: "Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Open-source relational database management system"
  },
  {
    id: 17,
    name: "PostgreSQL",
    category: "Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Advanced open-source relational database"
  },
  {
    id: 18,
    name: "MongoDB",
    category: "Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "NoSQL document database"
  },
  {
    id: 19,
    name: "Supabase",
    category: "Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    description: "Open-source Firebase alternative"
  },
  {
    id: 20,
    name: "Firebase",
    category: "Database",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    description: "Realtime database for web and mobile apps"
  },

  // Tools
  {
    id: 21,
    name: "Git",
    category: "Tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Distributed version control system"
  },
  {
    id: 22,
    name: "Docker",
    category: "Tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Platform for developing, shipping, and running applications"
  },
  {
    id: 23,
    name: "ESLint",
    category: "Tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    description: "Linter for JavaScript and TypeScript"
  },
  {
    id: 24,
    name: "Figma",
    category: "Tools",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description: "UI/UX design tool"
  },

  // Mobile Development
  {
    id: 25,
    name: "Flutter",
    category: "Mobile Development",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    description: "UI toolkit for building natively compiled applications"
  },
];

export const projects = [
  {
    id: 1,
    title: "RecMovies",
    description: "The Movie Recommendation System project aims to help users find movies that match their preferences and moods through a relevant and personalized recommendation system. By analyzing user responses, interaction data, and movie metadata, the system is designed to reduce search time and improve the viewing experience. While there are risks such as data quality and privacy issues, the project is carried out with careful data management to ensure accuracy and safety.",
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "Node.js", "Hapi.js", "Python", "Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "Surprise", "Vite", "ESLint", "Vercel"],
    github_url: "https://github.com/febrian2108/Capstone-Project-RecMovies.git",
    Link_url: "https://frontendd-rose.vercel.app/",
    featured: true,
    image1: "/project-image/recmovies/Project-Recmovies.png",
    image2: "/project-image/recmovies/Project-Recmovies1.png",
    image3: "/project-image/recmovies/Project-Recmovies2.png",
    image4: "/project-image/recmovies/Project-Recmovies3.png",
    image5: "/project-image/recmovies/Project-Recmovies4.png",
    image6: "/project-image/recmovies/Project-Recmovies5.png",
    status: "Completed",
    created_at: "Jun 13, 2025"
  },
  {
    id: 2,
    title: "Project Bansos",
    description: "Decision Support System for Providing Social Assistance to Underprivileged Communities Using the Simple Additive Weighting (SAW) Method.",
    category: "Web Development",
    technologies: ["JavaScript", "PHP", "HTML5", "CSS3", "MySQL", "Apache"],
    github_url: "https://github.com/febrian2108/Project-Bansos.git",
    featured: false,
    image1: "/project-image/bansos/Home.png",
    image2: "/project-image/bansos/Login.png",
    image3: "/project-image/bansos/Calon-penerima.png",
    image4: "/project-image/bansos/Kriteria.png",
    image5: "/project-image/bansos/Nilai-kriteria.png",
    image6: "/project-image/bansos/Klasifikasi.png",
    image7: "/project-image/bansos/Analisis.png",
    status: "Completed",
    created_at: "Apr 23, 2024"
  },
  {
    id: 3,
    title: "WawBeans",
    description: "Online coffee ordering application that makes it easy for you to order your favorite coffee quikly and conveniently, directly from your smartphone.",
    category: "Mobile Development",
    technologies: ["Dart", "Flutter", "MySQL"],
    github_url: "https://github.com/febrian2108/project_WawBeans.git",
    Link_url: null,
    featured: false,
    image1: "/project-image/wawbeans/WawBeans-1-1.jpg",
    image2: "/project-image/wawbeans/WawBeans-1-2.jpg",
    status: "Completed",
    created_at: "May 11, 2024"
  },
  {
    id: 4,
    title: "Pahawang-Adventures",
    description: "Project to manage tourism on Pahawang Island, grouping packages provided by the expedition party.",
    category: "Web Development",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    github_url: null,
    Link_url: null,
    featured: false,
    image1: "/project-image/pahawang/Pahawang-Dashboard.png",
    image2: "/project-image/pahawang/Pahawang-Login.png",
    image3: "/project-image/pahawang/Pahawang-Paket.png",
    image4: "/project-image/pahawang/Pahawang-FormPendaftaran.png",
    image5: "/project-image/pahawang/Pahawang-DaftarPesanan.png",
    status: "In Progress",
    created_at: "May 24, 2024"
  },
  {
    id: 5,
    title: "Virtual Voice Assistence",
    description: `Artificial Intelligence Final Project Assignment 
    This program uses Python with the keywords 'search', 'open', 'close', 'recommendation', 'message', 'location', 'promo'.
    This program also uses the RNN (Recurrent Neural Network) algorithm.`,
    category: "AI/ML",
    technologies: ["Python", "Tensorflow", "NumPy"],
    github_url: "https://github.com/febrian2108/Project-KecerdasanBuatan-Delampoengcoffee.git",
    Link_url: null,
    featured: false,
    image1: "/project-image/virtualvoice/Virtual-Voice-Assistence.png",
    status: "Completed",
    created_at: "Apr 30, 2024"
  },
  {
    id: 6,
    title: "Bike Sharing Dashboard Analysis",
    description: `This project was created to complete the "Getting Started Programming with Python" course on the Dicoding platform.
    The dataset used was obtained from the following link: 
    \n https://www.kaggle.com/datasets/lakshmi25npathi/bike-sharing-dataset/discussion?sort=undefined`,
    category: "AI/ML",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Streamlit"],
    github_url: "https://github.com/febrian2108/Analisis-Data-Peminjaman-Sepeda-MachineLearning.git",
    Link_url: "https://pinjamsepeda.streamlit.app/",
    featured: true,
    image1: "/project-image/bikesharing/Bike-Sharing1.png",
    image2: "/project-image/bikesharing/Bike-Sharing2.png",
    image3: "/project-image/bikesharing/Bike-Sharing3.png",
    status: "Completed",
    created_at: "Nov 13, 2024"
  },
  {
    id: 7,
    title: "Classification of Heart and Kidney Diseases using Machine Learning Algorithms",
    description: "This application implements heart and kidney disease classification using several popular machine learning algorithms. Users can select a dataset (heart or kidney disease), choose a classification algorithm (K-Nearest Neighbors, Support Vector Machine, or Random Forest), and view accuracy results and classification reports to compare the performance of these algorithms.",
    category: "AI/ML",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Scikit-learn", "Streamlit"],
    github_url: "https://github.com/febrian2108/Klasifikasi-data-penyakit-jantung-dan-ginjal.git",
    Link_url: "https://klasifikasi-data-penyakit-jantung-dan-ginjal-dengan-algoritma.streamlit.app/",
    featured: true,
    image1: "/project-image/klasifikasipenyakit/Klasifikasi-Penyakit1.png",
    image2: "/project-image/klasifikasipenyakit/Klasifikasi-Penyakit2.png",
    image3: "/project-image/klasifikasipenyakit/Klasifikasi-Penyakit3.png",
    status: "Completed",
    created_at: "Dec 3, 2024"
  },
  {
    id: 8,
    title: "Financial statements",
    description: "This project was created using Laravel Filament Technology to help simplify and speed up the processing time and this project was created as material for me to learn about CRUD in Laravel. This project is still 90% complete and still at the development stage.",
    category: "Web Development",
    technologies: ["PHP", "Laravel", "JavaScript"],
    github_url: "https://github.com/febrian2108/laporan-keuangan.git",
    Link_url: null,
    featured: true,
    image1: "/project-image/laporankeuangan/Laporan-Keuangan1.png",
    image2: "/project-image/laporankeuangan/Laporan-Keuangan1.jpeg",
    image3: "/project-image/laporankeuangan/Laporan-Keuangan2.png",
    image4: "/project-image/laporankeuangan/Laporan-Keuangan3.png",
    image5: "/project-image/laporankeuangan/Laporan-Keuangan4.png",
    status: "Completed",
    created_at: "Aug 22, 2024"
  },
  {
    id: 9,
    title: "Buku Listrik",
    description: "an application or digital recording system used to record, calculate, and manage information related to postpaid electricity usage.",
    category: "Web Development",
    technologies: ["Golang", "React", "Vite", "Tailwind CSS", "ESLint", "MySQL", "Docker"],
    github_url: null,
    Link_url: null,
    featured: true,
    image1: "/project-image/bukulistrik/Buku-Listrik1.png",
    image2: "/project-image/bukulistrik/Buku-Listrik2.png",
    image3: "/project-image/bukulistrik/Buku-Listrik3.png",
    image4: "/project-image/bukulistrik/Buku-Listrik4.png",
    image5: "/project-image/bukulistrik/Buku-Listrik5.png",
    image6: "/project-image/bukulistrik/Buku-Listrik6.png",
    image7: "/project-image/bukulistrik/Buku-Listrik7.png",
    image8: "/project-image/bukulistrik/Buku-Listrik8.png",
    status: "Completed",
    created_at: "Dec 12, 2024"
  }
];

// Helper functions to simulate API calls
export const getSkills = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: skills, error: null });
    }, 500); // Simulate network delay
  });
};

export const getProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: projects, error: null });
    }, 500); // Simulate network delay
  });
};

// Function to add new skill (for future use)
export const addSkill = (skillData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newSkill = {
        id: skills.length + 1,
        ...skillData
      };
      skills.push(newSkill);
      resolve({ data: newSkill, error: null });
    }, 300);
  });
};

// Function to add new project (for future use)
export const addProject = (projectData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newProject = {
        id: projects.length + 1,
        created_at: new Date().toISOString().split('T')[0],
        ...projectData
      };
      projects.push(newProject);
      resolve({ data: newProject, error: null });
    }, 300);
  });
};

