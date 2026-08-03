# Personal Portfolio

A modern and responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. This portfolio showcases my profile, technical skills, featured projects, professional experience, certificates, and contact information.

## Live Preview

https://aditya-ammar.vercel.app/

---

## About

This portfolio was created to present my background, skills, and projects as an Informatics Management student with a strong interest in Web Development.

It serves as a central place where recruiters, collaborators, and fellow developers can explore my work and get in touch.

---

## Features

- Responsive design for Desktop, Tablet, and Mobile
- Smooth scrolling navigation
- Animated sections using Framer Motion
- Featured Projects section
- Individual Project Detail pages
- Experience timeline
- Certificates section
- Contact Information
- Download CV (English & Indonesian)
- GitHub repository links
- Modern Glassmorphism UI

---

## Built With

### Frontend

- React 19
- Vite
- Tailwind CSS 4
- React Router DOM
- React Scroll
- Framer Motion
- React Icons
- Lucide React

---

## Project Structure

```
├── public
│   ├── CV_AdityaAmmar_EN.pdf
│   ├── CV_AdityaAmmar_ID.pdf
│   ├── favicon.png
│   ├── icons.svg
│   ├── Portfolio_AdityaAmmar.pdf
│   └── Resume_AdityaAmmar.pdf
├── src
│   ├── assets
│   │   ├── hero.png
│   │   ├── ProfilePhoto.jpg
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components
│   │   ├── common
│   │   │   ├── AnimatedSection.jsx
│   │   │   ├── BackgroundDecor.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── index.js
│   │   │   └── Navbar.jsx
│   │   ├── home
│   │   │   ├── About.jsx
│   │   │   ├── Certificate.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── index.js
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   ├── SkillItem.jsx
│   │   │   └── Skills.jsx
│   │   ├── project
│   │   │   ├── index.js
│   │   │   ├── ProjectArchitecture.jsx
│   │   │   ├── ProjectFeatures.jsx
│   │   │   ├── ProjectHero.jsx
│   │   │   ├── ProjectLinks.jsx
│   │   │   ├── ProjectOverview.jsx
│   │   │   └── ProjectTechStack.jsx
│   │   └── index.js
│   ├── data
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks
│   │   └── useScrollDirection.js
│   ├── layouts
│   │   └── MainLayout.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── index.js
│   │   └── ProjectDetail.jsx
│   ├── router
│   │   └── index.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

## Installation

Clone this repository

```bash
git clone https://github.com/Adityammar65/PersonalPortfolio.git
```

Go to project directory

```bash
cd PersonalPortfolio
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

## License

This project is open-source and available under the MIT License.

---

## Support

If you like this project, consider giving it a star on GitHub.

Thank you for visiting my portfolio!
