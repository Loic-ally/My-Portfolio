#!/bin/bash

# ╔════════════════════════════════════════════════════════════════════════════╗
# ║                         ⣿⣿ LOÏC PHILIPPE – PORTFOLIO ⣿⣿                        ║
# ║                  Dev Fullstack | Game Dev | Étudiant EPITECH                  ║
# ╚════════════════════════════════════════════════════════════════════════════╝

set -euo pipefail

# Colors
BOLD='\033[1m'
RESET='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'

echo -e "${CYAN}🔧 Initialisation de l’environnement de développement...${RESET}"

# Vérification de Node.js
if ! command -v node &> /dev/null; then
  echo -e "${RED}✘ Node.js n’est pas installé.${RESET}"
  echo "→ Installe-le sur https://nodejs.org/"
  exit 1
fi

echo -e "${GREEN}✔ Node.js $(node -v) détecté.${RESET}"

if ! command -v npm &> /dev/null; then
  echo -e "${RED}✘ npm n’est pas installé.${RESET}"
  exit 1
fi

echo -e "${GREEN}✔ npm $(npm -v) détecté.${RESET}"

# Vérification de package.json
if [[ ! -f package.json ]]; then
  echo -e "${RED}✘ Aucun fichier package.json trouvé dans le dossier courant.${RESET}"
  echo "→ Place-toi dans le dossier racine du projet avant d’exécuter ce script."
  exit 1
fi

# Installation des dépendances
echo -e "${YELLOW}📦 Installation des dépendances npm...${RESET}"
npm install
echo -e "${GREEN}✔ Dépendances installées.${RESET}"

# Lancement du serveur
echo -e "${CYAN}🚀 Lancement du serveur local sur http://localhost:5173 ...${RESET}"
echo -e "${CYAN}⌨️  Ctrl + C pour arrêter.${RESET}"
npm run dev
