# AI-Powered Poetry Generator

AI-Powered Poetry Generator is a React-based web app that creates original poems using Google’s Gemini API. Users can enter the name of a poet to generate verses inspired by their style, while the interface dynamically shifts colors and fonts every few minutes for a fresh, immersive reading experience. This project showcases my ability to combine front-end development with real-world API integration to deliver interactive and creative applications.

## 🚀 Live Demo
Try it here: [AI-Powered Poetry Generator](https://ai-powered-poetry-generator-git-master-fcrainicorns-projects.vercel.app)  

## ✨ Key Features
- 🧠 **Natural Language Processing**: Integrates with the Google Gemini API to generate creative and contextually relevant poetry.  
- 🎨 **Rotating Styles**: The design dynamically changes every two minutes with different fonts and colors.  
- 🔄 **Dynamic Content**: Each request generates a fresh, unique poem.  
- 💻 **Interactive UI**: Clean, user-friendly interface built with React.  

## 🛠 Tech Stack
- **Frontend**: React, Vite, HTML, CSS, JavaScript  
- **Backend**: Google Gemini API  

## 📖 How to Use
1. **Enter a Poet’s Name**: Type the name of a poet, writer, or artist.  
2. **Press Enter**: Generate a poem instantly.  
3. **Enjoy**: The poem will appear shortly.  

## 🏗 Getting Started

### 🔑 Environment Variables
This project uses environment variables for API access.  

1. In the root directory of the project, create a file named `.env`.
   
2. Add the following line to it:  
VITE_API_KEY=your_api_key_here


3. A `.env.example` file is included for reference. Rename it:


```bash

cp .env.example .env
```
4. Obtain your API key from [Google AI Studio](https://aistudio.google.com/)
.

### ▶️ Run Locally

```bash

git clone https://github.com/Fcrainicorn/AI-Powered-Poetry-Generator.git

cd AI-Powered-Poetry-Generator

npm install

npm run dev
```







