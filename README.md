# Varun Portfolio - React Version

A modern, animated personal portfolio website built with React, featuring 3D graphics, smooth animations, and a responsive design.

## ✨ Features

- **3D Hero Section**: Interactive Three.js scene with rotating icosahedron and star field
- **Dark/Light Theme**: Persistent theme toggle with smooth transitions
- **Scroll Animations**: GSAP-powered animations triggered on scroll
- **3D Project Cards**: Flip cards with hover effects showcasing projects
- **Contact Form**: Functional contact form with validation
- **Responsive Design**: Mobile-first approach using Tailwind CSS

## 🛠️ Tech Stack

- **React 18** - UI library with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **GSAP** - Animation library with ScrollTrigger
- **Lucide React** - Icon library
- **PostCSS** - CSS processing

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

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

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update Google Fonts imports in `public/index.html`
- **Content**: Edit personal information in each component
- **Projects**: Update project data in `Projects.jsx`
- **3D Scene**: Customize the Three.js scene in `CanvasScene.jsx`

## 📱 Browser Support

- Modern browsers with WebGL support
- Mobile responsive design
- Optimized for performance

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

