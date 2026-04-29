# Youness EL FADIL — Portfolio

Cyber-Minimalism personal portfolio built with React + Vite + Tailwind CSS + Framer Motion + Three.js.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── main.jsx
├── App.jsx
├── index.css
└── components/
    ├── ThreeBackground.jsx   # Three.js particle canvas
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── ProfileFrame.jsx      # SVG animated identity frame
    ├── LangBar.jsx           # Language proficiency bars
    ├── Education.jsx         # Bento grid education
    ├── Projects.jsx          # Bento grid projects
    ├── Footer.jsx
    ├── BentoCard.jsx         # Tilt + glow card
    ├── TechTag.jsx           # Neon glow tags
    └── SectionHead.jsx       # Section headers
```

## 🎨 To Add Your Photo

In `src/components/ProfileFrame.jsx`, replace the initials block with:
```jsx
<img src="/your-photo.jpg" alt="Profile" className="w-full h-full object-cover" />
```
Place your photo in the `public/` folder.
