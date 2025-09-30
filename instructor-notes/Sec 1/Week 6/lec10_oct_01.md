---
marp: true
paginate: true
style: |
    :root {
      --background:rgb(25, 27, 32);
      --background-light:rgb(93, 102, 121);
      --foreground: #ffffff;
      --light-background: #ffffff;
      --accent: #ffcc00;
      --sedondary:rgb(76, 22, 114);
    }
    section { background-color: var(--background); color: var(--foreground); }
    h1,h2,h3,h4,h5 {color:var(--foreground);}
    section.boxes ul { display: flex; list-style: none; padding: 0; width: 100%; }
    section.boxes li { background-color:var(--foreground); color:var(--background); padding: 40px; margin: 10px; border-radius: 10px; flex: 1; text-align: center; }
    blockquote { color: white; }
    strong { color: var(--accent); }
    header, footer {width:100%; margin:0 auto; color:var(--background-light)}
    section.activity { background: var(--accent); color:var(--background)}
    section.activity h1,section.activity h2, section.activity h3, section.activity h4, section.activity h5 { color: var(--background) }
    section.activity footer { display: none; }
    section.activity blockquote {display:inline-block; border: 4px solid black; color: white; border-radius: 10px; 
    background-color:var(--background)}
    section.activity a {
        color: var(--background);
        text-decoration: underline;
        font-weight: bold;
    }
    a { color:var(--accent) }
    section.demo { background: var(--sedondary); color:var(--foreground)}
    section.demo h1,section.demo h2, section.demo h3, section.demo h4, section.demo h5 { color: var(--foreground) }
    section.demo footer, section.footer-none footer { display: none; }
    section.demo blockquote {display:inline-block; color: var(--sedondary); border-radius: 10px; background-color: var(--foreground)}
    section.light { background-color: var(--light-background); color: var(--background); }
    section.light h1, section.light h2, section.light h3, section.light h4, section.light h5 { color: var(--background); }
    section.grraph pre {
        background-color: #ffffff;
        color: var(--background);
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
    }
    table {
        background: transparent !important;
        background-color: transparent !important;
        border-collapse: collapse;
        margin: 0 auto;
        text-align: center;
    }
    table, table * {
        background: transparent !important;
        background-color: transparent !important;
    }
    table th, table td {
        background: transparent !important;
        background-color: transparent !important;
        border: 1px solid var(--foreground);
        padding: 8px;
    }
    table th {
        background: transparent !important;
        background-color: transparent !important;
        font-weight: bold;
    }
    /* Override Marp default table styles */
    section table {
        background: transparent !important;
        background-color: transparent !important;
        margin: 0 auto;
        text-align: center;
    }
    section table th,
    section table td {
        background: transparent !important;
        background-color: transparent !important;
    }
    section.center {text-align:center}
    section.big-code pre {font-size:2rem}
    pre {font-size:0.8rem}
footer: 'SWE 363 | 251 | Sec 01 | KFUPM'
---


Web Engineering & Development (SWE 363) 
# Interactive Front-End Development
### Hasan Al-kaf
---
# Vite + React & JSX — Quick Guide

This page gives you a fast start with **React using Vite**, explains **JSX**, and compares **Vite vs Create React App (CRA)**.

---

## 🚀 Start a React project with Vite

```bash
# create a project
npm create vite@latest my-app

# go inside project
cd my-app

# install dependencies
npm install

# run dev server
npm run dev
```

> The dev server starts in milliseconds. Open the printed local URL in your browser.

---

## 🟦 What is JSX?
**JSX** stands for **JavaScript XML**.

- It’s a **syntax extension** for JavaScript used in **React**.
- It allows you to write **HTML-like code** inside JavaScript.
- React (via Babel / Vite) **compiles JSX to plain JavaScript**.

### Why do we use JSX?
1. **Looks like HTML** → easy to describe UI.
2. **Powerful** → embed JavaScript expressions inside `{ }`.
3. **Faster development** → more readable and maintainable.
4. **Closer to the UI** → build components in a single file.

---

## 📝 Examples

### Without JSX (pure JavaScript)
```js
import React from "react";

function Hello() {
  return React.createElement("h1", null, "Hello, World!");
}

export default Hello;
```
---
### With JSX (cleaner)
```jsx
import React from "react";

function Hello() {
  return <h1>Hello, World!</h1>;
}
export default Hello;
```

> Both snippets produce the same UI; JSX is easier to read and write.

---

## ⚡ Embedding JS in JSX
```jsx
const name = "Hasan";
const age = 25;

function Student() {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```
Here, `{name}` and `{age}` are **JavaScript expressions** inside JSX.

---

## 🔥 Vite vs CRA

| Feature | **Vite** | **Create React App (CRA)** |
|--------|----------|-----------------------------|
| **Speed (Dev server start)** | ⚡ Very fast (milliseconds, thanks to ES Modules) | 🐌 Slow (can take 20–30s for large apps) |
| **Hot Reload (HMR)** | Instant updates, keeps component state | Slower reloads, sometimes refreshes the whole page |
| **Project size** | Lightweight, fewer dependencies | Heavier, installs many dependencies |
| **Production Build** | Smaller, optimized with tree-shaking | Larger, less optimized by default |
| **Ease of Setup** | Simple, modern setup with `npm create vite` | Easy, but older approach with `npx create-react-app` |
| **Plugins/Extensibility** | Rich plugin ecosystem (e.g., Tailwind, PWA, etc.) | Limited compared to Vite |
| **Community** | Growing fast, becoming the new standard | Older, many tutorials but less active updates |
| **TypeScript support** | Built-in, no extra setup needed | Needs extra configuration |

---

## ✅ Quick Tips
- Use **`npm run dev`** for development, **`npm run build`** for production, and **`npm run preview`** to test the build locally.
- Add Tailwind, ESLint, and Prettier easily via Vite plugins or templates.

---

## 📁 Suggested Repo Structure
```
my-app/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  └─ StudentCard.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ README.md  ← (this file)
└─ vite.config.js
```

---

## 👀 Example `StudentCard.jsx`
```jsx
function StudentCard({ name, id, department }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "250px",
      margin: "10px auto",
      textAlign: "center",
      boxShadow: "2px 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h3>Name: {name}</h3>
      <p>ID: {id}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default StudentCard;
```

### Use it in `App.jsx`
```jsx
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div>
      <h1>Student Info</h1>
      <StudentCard name="Hasan Alkaf" id="12345" department="Computer Science" />
      <StudentCard name="Sara Ali" id="67890" department="Information Technology" />
    </div>
  );
}

export default App;
```
---

## 📚 Notes
- JSX requires a **single parent element** to be returned from a component.
- Use `className` instead of `class` in JSX.
- Expressions inside JSX go in `{ }`.

---
