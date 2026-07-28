# Portofolio — Hirmas Qiemsa Nafi Nurhusna

A professional static portfolio website showcasing projects, skills, and experiences. Built with pure HTML, CSS, and JavaScript — no frameworks, no build step.

## 🚀 Key Features

- **Hero** — Animated typing effect with profile introduction
- **About** — Professional summary with glassmorphism card
- **Skills** — Categorized technical skills with animated bars
- **Experience** — Vertical timeline of professional experience
- **Projects** — Project showcase with tech stack tags
- **Education** — Academic background with coursework tags
- **Contact** — Direct contact links (Email, LinkedIn, WhatsApp)
- **Dark/Light Mode** — Toggle with localStorage persistence
- **Responsive** — Mobile-first, works on all screen sizes

## 🛠️ Tech Stack

- HTML5
- CSS3 (Vanilla CSS with Custom Properties)
- JavaScript (ES6+)

## 📁 Project Structure

```
portofolio-2026/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles & design system
├── js/
│   ├── data.js         # ✏️ All content data (edit this file!)
│   └── app.js          # Application logic & animations
├── assets/
│   └── images/         # Profile photo & project screenshots
├── .gitignore
└── README.md
```

## ✏️ How to Modify Content

All personal content is in **`js/data.js`**. To update:

### Add a new project:
```js
// In js/data.js → projects array, add:
{
  name: "My New Project",
  description: "What this project does...",
  techStack: ["Laravel", "MySQL"],
  image: "assets/images/project-name.png",
  github: "https://github.com/...",
  demo: "https://..."
}
```

### Add a new skill:
```js
// In js/data.js → skills array, find the right category and add:
{ name: "New Skill", level: 75 }
```

### Change theme colors:
```css
/* In css/style.css, edit the :root variables */
:root {
  --accent-primary: #06b6d4;  /* Change this */
  --accent-secondary: #0891b2; /* And this */
}
```

## 🎯 How to Use

1. Clone this repository
   ```bash
   git clone https://github.com/HirmasQiemsa/portofolio.git
   ```
2. Open `index.html` in your browser — that's it!

## 📄 License

This project is open source and available for personal use.
