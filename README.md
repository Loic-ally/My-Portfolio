# Enzo's Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, theme switching, and multilingual support.

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Theming**: Toggle between Blue/Rose and Green/Black themes
- **Animations**: Smooth page transitions and scroll animations
- **Multilingual**: Support for English and French languages
- **Modern Stack**: Built with React, Vite, Framer Motion, and more

## 🛠️ Tech Stack

- **React**: Frontend library
- **Vite**: Build tool
- **React Router**: Navigation
- **Framer Motion**: Animations
- **React i18n**: Internationalization
- **AOS**: Animate on scroll
- **React Icons**: Icon library

## 🏃‍♂️ Getting Started

1. Clone the repository
2. Run the setup script:
   ```
   ./setup_and_start.sh
   ```
3. The script will:
   - Check for Node.js installation
   - Create the project structure (if not already created)
   - Install all dependencies
   - Start the development server

The portfolio will be available at http://localhost:5173

## 🔧 Manual Setup

If you prefer to set up manually:

1. Ensure Node.js is installed
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## 🏗️ Project Structure

```
portfolio/
├── public/              # Static files
├── src/                 # Source code
│   ├── assets/          # Images and assets
│   ├── components/      # React components
│   │   ├── layout/      # Layout components
│   │   └── sections/    # Page sections
│   ├── context/         # React context providers
│   ├── locales/         # i18n translation files
│   ├── pages/           # Page components
│   ├── styles/          # CSS styles
│   │   └── themes/      # Theme stylesheets
│   └── utils/           # Utility functions
├── index.html           # HTML entry
└── setup_and_start.sh   # Setup script
```

## 🔨 Building for Production

```
npm run build
```

## 📝 Customizing Content

- Update project information in the Projects.jsx file
- Modify personal information in the About.jsx component
- Adjust skills and tech in Skills.jsx
- Translation files are in src/locales/
- Theme styles can be found in src/styles/themes/

## 🧑‍💻 Created by

Loïc Philippe - [GitHub](https://github.com/Loic-ally) | [LinkedIn](https://www.linkedin.com/in/loic-philippe/)
