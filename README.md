# Varun Chaudhary's Portfolio

[![Vercel Status](https://img.shields.io/badge/Vercel-Deployed-success)](https://varun-portfolio.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

A modern, animated personal portfolio website showcasing my skills, projects, and experience. Built with React and deployed on Vercel.

![Portfolio Preview](https://i.imgur.com/placeholder-image.png)

## ✨ Features

- **Interactive UI**: Modern interface with smooth animations and transitions
- **Dark/Light Theme**: Toggle between themes with persistent settings
- **Scroll Animations**: GSAP-powered animations triggered on scroll
- **3D Project Cards**: Interactive flip cards showcasing my projects
- **Click Spark Effects**: Interactive elements with engaging visual feedback
- **Contact Form**: Easy way for visitors to reach out
- **Responsive Design**: Mobile-first approach using Tailwind CSS

## 🛠️ Tech Stack

- **React 18** - Modern UI library with hooks for efficient state management
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Three.js** - 3D graphics library for interactive elements
- **GSAP** - Animation library with ScrollTrigger for smooth scroll animations
- **Lucide React** - Lightweight icon library for clean UI elements
- **EmailJS** - Client-side email sending for the contact form
- **Vercel** - Deployment platform with CI/CD integration

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ivarunchaudhary/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **View in browser**: Open [http://localhost:3000](http://localhost:3000)

### Deployment

This portfolio is deployed on Vercel. To deploy your own fork:

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Import your repository** from GitHub

3. **Configure your project** with default settings

4. **Deploy** and get your own version running in minutes

## 📁 Project Structure

```
src/
├── components/
│   ├── About.jsx          # About section with skills
│   ├── CanvasScene.jsx    # Three.js 3D scene
│   ├── Contact.jsx        # Contact form
│   ├── Footer.jsx         # Footer component
│   ├── Hero.jsx           # Hero section with 3D background
│   ├── Projects.jsx       # Projects grid with flip cards
│   └── ThemeToggle.jsx    # Dark/light mode toggle
├── utils/
│   └── theme.js           # Theme management utilities
├── App.jsx                # Main app component
├── index.js               # React entry point
└── index.css              # Global styles with Tailwind
```

## 🎨 Customization

- **Theme**: Modify the color scheme in `tailwind.config.js`
- **Projects**: Update project data in `src/components/Projects.jsx`
- **Text Colors**: Project cards use white text with drop shadow for optimal visibility
- **Animation**: Adjust GSAP animations in each component file
- **Content**: Edit personal information in the respective component files
- **Social Links**: Update your social media links in `src/components/SocialLinks.jsx`

## ✨ Live Demo

**[Visit the live portfolio](https://varun-portfolio.vercel.app)**

## 📱 Key Features

- **Responsive Design**: Optimized for all screen sizes
- **Accessibility**: Designed with accessibility in mind
- **Performance**: Optimized loading and rendering
- **SEO**: Meta tags and structured data for better search results

## 📝 Project Highlights

- **Online Chatting Platform**: A communication platform for college students
- **Routine Planner**: A daily summary app with modern UI
- **Stack-it**: A modern clone of Stack Overflow with enhanced features

## 👨‍💻 About Me

I'm Varun Chaudhary, a passionate web developer focused on creating intuitive, beautiful, and functional web experiences. This portfolio showcases my skills, projects, and professional journey.

## 📬 Contact

Feel free to reach out to me through the contact form on my portfolio website or connect with me on social media.
