# AI Recipe Generator

**AI Recipe Generator** is a web application that allows you to generate recipe suggestions by simply inputting a list of ingredients. It leverages AI models from both [Anthropic](https://www.anthropic.com/index/) (Claude) and [Hugging Face](https://huggingface.co/) (Mistral) to provide creative and context-aware recipes.

<p align="center">
  <img src="src/assets/chef-claude-icon.png" width="80" alt="Chef Claude Icon" />
</p>

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Deployment](#deployment)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project demonstrates how to build a simple React app with Vite for quickly generating recipes using AI. By typing in ingredients and adding them to your list, you can request a recipe suggestion from either Anthropic’s Claude or Hugging Face’s Mistral model. The returned recipe is displayed in markdown format so it can be easily rendered and read in the application.

## Project Structure

Below is a simplified overview of the project’s file structure:

```
SnazzyNivesh522-A-Recipe-Generator/
├── index.html
├── eslint.config.js
├── package.json
├── vite.config.js
├── README.md  <-- (You're reading this file)
└── src/
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   └── chef-claude-icon.png
    ├── components/
    │   ├── Form.jsx
    │   ├── Recipe.jsx
    │   ├── Ingredients.jsx
    │   ├── Header.jsx
    │   ├── Main.jsx
    │   ├── SampleRecipe.jsx
    │   └── GetRecipe.jsx
    ├── ai.js
    └── main.jsx
```

Key directories and files:

- **`index.html`**: Entry point for the application where the React root is mounted.
- **`src/App.jsx`**: Main React component that sets up the header and main content.
- **`src/components/`**: Contains all reusable UI components (Form, Recipe, Ingredients, etc.).
- **`src/ai.js`**: Contains logic to interact with Anthropic’s Claude and Hugging Face’s Mistral APIs.
- **`vite.config.js`**: Vite configuration file (including base path for GitHub Pages).
- **`package.json`**: Manages project dependencies and scripts.
- **`.eslint.config.js`**: ESLint configuration for ensuring consistent code style.

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** (npm is used in the scripts below)
- **Anthropic API Key** (for Claude - optional if you only want to use Mistral)
- **Hugging Face Access Token** (for Mistral)

### Installation

1. **Clone the repository** (or fork it first, then clone your fork):

   ```bash
   git clone https://github.com/SnazzyNivesh522/A-Recipe-Generator.git
   cd A-Recipe-Generator
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running Locally

After installing all dependencies, you can run the development server:

```bash
npm run dev
```

This command starts your Vite dev server on [http://127.0.0.1:5173](http://127.0.0.1:5173) (or a different port if 5173 is in use).

### Deployment

This app is configured for deployment to GitHub Pages via the `gh-pages` package.

1. **Build for production**:

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:

   ```bash
   npm run deploy
   ```

> **Note**: The `homepage` and `base` paths are already set up in `package.json` and `vite.config.js` to deploy under `/A-Recipe-Generator`.

---

## Usage

1. **Open the app in your browser** (at the local or deployed URL).
2. **Enter an ingredient** in the input box (e.g., “tomato” or “oregano”) and click **+ Add ingredient**.
3. **Repeat** for all the ingredients you have on hand.
4. Once you have more than three ingredients, the **Get a Recipe** button becomes available.
5. Click **Get a Recipe** to query the AI model.  
6. **Wait** for the AI to respond. A suggested recipe in markdown format will then appear below the ingredients list.

---

## Environment Variables

This project expects two environment variables for AI integration:

- `VITE_ANTHROPIC_API_KEY`  
  Your API key from [Anthropic](https://www.anthropic.com/index/) if you wish to use the Claude model.
- `VITE_HF_ACCESS_TOKEN`  
  Your Access Token from [Hugging Face](https://huggingface.co/docs/hub/security-tokens) if you wish to use the Mistral model.

Create a `.env` file at the root of the project (or use `.env.local`, etc.):

```
VITE_ANTHROPIC_API_KEY=YOUR_ANTHROPIC_KEY_HERE
VITE_HF_ACCESS_TOKEN=YOUR_HUGGINGFACE_TOKEN_HERE
```

If you do not provide an Anthropic API key, the default recipe generation call (in `Main.jsx`) can be switched to Mistral by updating the relevant function call in the code.

---

## Technologies Used

- **React** (18.x)  
  Main library for building the user interface.
- **Vite**  
  Build tool for a faster, leaner development experience.
- **Anthropic SDK**  
  Used to integrate with Claude (if Anthropic API key is set).
- **Hugging Face Inference**  
  Used to integrate with Mistral or other supported Hugging Face models.
- **React Markdown & remark-gfm**  
  For rendering the recipe text (which is returned in markdown format).

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any ideas for improvements or find any bugs.

1. Fork the repo
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add an amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request against the `main` branch of this repository.

---

## License

This project is not yet licensed. Feel free to adapt and use it for your personal or organizational needs. If you have any questions or concerns, please open an issue on GitHub.

---

**Enjoy generating recipes with AI!** Bon appétit!