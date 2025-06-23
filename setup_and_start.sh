#!/bin/bash

# ╔════════════════════════════════════════════════════════════╗
# ║                Loïc's Portfolio Setup Script               ║
# ╚════════════════════════════════════════════════════════════╝

set -euo pipefail

# ────────────────────────────────
# Formatting
# ────────────────────────────────
BOLD='\033[1m'
RESET='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[1;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'

echo -e "${RESET}${CYAN}Initializing Portfolio Development Environment...${RESET}"

# ────────────────────────────────
# Check Node.js installation
# ────────────────────────────────
check_node() {
  echo -e "${YELLOW}🔍 Checking Node.js installation...${RESET}"
  
  if ! command -v node &> /dev/null; then
    echo -e "${RED}✘ Node.js is not installed. Please install Node.js first.${RESET}"
    echo "Visit: https://nodejs.org/"
    exit 1
  fi
  
  local node_version=$(node --version)
  echo -e "${GREEN}✔ Node.js ${node_version} found.${RESET}"
  
  if ! command -v npm &> /dev/null; then
    echo -e "${RED}✘ npm is not installed.${RESET}"
    exit 1
  fi
  
  echo -e "${GREEN}✔ npm $(npm --version) found.${RESET}"
}

# ────────────────────────────────
# Create project structure
# ────────────────────────────────
create_project() {
  if [ -d "src" ]; then
    echo -e "${YELLOW}⚠️  Project already exists. Skipping creation step.${RESET}"
    return
  fi

  echo -e "${YELLOW}📂 Creating React project with Vite...${RESET}"

  # Create a new Vite React project
  npm create vite@latest . -- --template react

  # Create project directories
  mkdir -p src/components/layout
  mkdir -p src/components/sections
  mkdir -p src/assets/images
  mkdir -p src/styles/themes
  mkdir -p src/locales
  mkdir -p src/hooks
  mkdir -p src/context
  mkdir -p src/pages
  mkdir -p src/utils

  echo -e "${GREEN}✔ Project structure created.${RESET}"
}

# ────────────────────────────────
# Dependency installation
# ────────────────────────────────
install_dependencies() {
  echo -e "${YELLOW}📦 Installing portfolio dependencies...${RESET}"
  
  if [[ ! -f package.json ]]; then
    echo -e "${RED}✘ package.json not found!${RESET}"
    exit 1
  fi
  
  # Install dependencies with legacy peer deps to avoid conflicts
  npm install --legacy-peer-deps
  
  echo -e "${GREEN}✔ Dependencies installed successfully.${RESET}"
}

# ────────────────────────────────
# Configure project files
# ────────────────────────────────
configure_project() {
  echo -e "${YELLOW}🔧 Setting up configuration files...${RESET}"

  # Create i18n setup (English and French)
  echo '{
  "nav": {
    "home": "Home",
    "about": "About Me",
    "skills": "Skills",
    "projects": "Projects",
    "connect": "Connect"
  },
  "hero": {
    "greeting": "Hi, I'm Loïc👋",
    "roles": ["Student.", "Dev.", "Game Enthusiast."]
  },
  "about": {
    "title": "About Me",
    "description": "I'm a student at Epitech Mulhouse, passionate about programming and game development. Currently learning new programming languages and exploring DevOps."
  },
  "skills": {
    "title": "Skills",
    "categories": {
      "programming": "Programming Languages",
      "gamedev": "Game Development",
      "tools": "Tools and Platforms"
    }
  },
  "projects": {
    "title": "Projects",
    "viewCode": "View Code",
    "liveDemo": "Live Demo"
  },
  "connect": {
    "title": "Connect with Me",
    "email": "Email",
    "linkedin": "LinkedIn",
    "instagram": "Instagram"
  }
}' > src/locales/en.json

  echo '{
  "nav": {
    "home": "Accueil",
    "about": "À Propos",
    "skills": "Compétences",
    "projects": "Projets",
    "connect": "Contact"
  },
  "hero": {
    "greeting": "Salut, je suis Loïc 👋",
    "roles": ["Étudiant.", "Développeur.", "Passionné de jeux."]
  },
  "about": {
    "title": "À Propos de Moi",
    "description": "Je suis étudiant à Epitech Mulhouse, passionné par la programmation et le développement de jeux. Actuellement, j'apprends de nouveaux langages de programmation et j'explore le DevOps."
  },
  "skills": {
    "title": "Compétences",
    "categories": {
      "programming": "Langages de programmation",
      "gamedev": "Développement de jeux",
      "tools": "Outils et plateformes"
    }
  },
  "projects": {
    "title": "Projets",
    "viewCode": "Voir le Code",
    "liveDemo": "Démo"
  },
  "connect": {
    "title": "Me Contacter",
    "email": "Email",
    "linkedin": "LinkedIn",
    "instagram": "Instagram"
  }
}' > src/locales/fr.json
  
  echo -e "${GREEN}✔ Configuration files created.${RESET}"
}

# ────────────────────────────────
# Development server startup
# ────────────────────────────────
start_server() {
  echo -e "${YELLOW}🚀 Starting development server...${RESET}"
  
  echo -e "${GREEN}✔ Portfolio development server starting!${RESET}"
  echo -e "${CYAN}→ Portfolio: ${BOLD}http://localhost:5173${RESET}"
  echo -e "${CYAN}→ Press Ctrl+C to stop the server${RESET}"
  
  trap 'echo -e "\n${RED}✘ Shutting down development server...${RESET}"; exit' INT
  
  npm run dev
}

# ────────────────────────────────
# Main Execution Flow
# ────────────────────────────────
main() {
  check_node
  create_project
  install_dependencies
  configure_project

  echo -e "${GREEN}✅ Setup complete. Starting portfolio...${RESET}"
  start_server
}

main
