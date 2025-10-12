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
# React event handling and Usestate
### Hasan Al-kaf
# Lists, Forms, and Routes

## 1. React Lists

React uses **lists** to render multiple elements dynamically from arrays using the **`.map()`** method.

### Example
```jsx
function StudentList() {
  const students = ['Ahmed', 'Hasan', 'Turki'];

  return (
    <ul>
      {students.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
```

### Rules
- Always give each list item a **unique `key`** prop.
- Keys help React **identify which items changed** for efficient re-rendering.

### Wrong vs Correct
❌ **Wrong:**
```jsx
{students.map(name => <li>{name}</li>)}   // Missing key
```

✅ **Correct:**
```jsx
{students.map((name, i) => <li key={i}>{name}</li>)}
```

> Prefer **unique IDs** from your data instead of `index` as key when possible.

---

## 2. React Forms

Forms in React use **controlled components** — form inputs are linked to React state.

### Example
```jsx
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Rules
- Always use `value` and `onChange` to control input data.
- Prevent default form submission using `e.preventDefault()`.
- Keep form data in **state** (e.g., with `useState`).

### Wrong vs Correct
❌ **Wrong (uncontrolled input):**
```jsx
<input type="text" placeholder="Name" />
```

✅ **Correct (controlled input):**
```jsx
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

> Controlled forms make validation and dynamic updates easier.

---

## 3. React Routes (React Router)

React Router lets you create **multiple pages (routes)** in a single-page React app.

### Installation
```bash
npm install react-router-dom
```

### Example
```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Rules
- Wrap everything inside `<BrowserRouter>`.
- Use `<Routes>` (not `<Switch>`) for React Router v6+.
- Use `element={<Component />}` instead of `component={Component}`.
- Use `<Link>` instead of `<a>` to avoid full page reload.

### Wrong vs Correct
❌ **Wrong (old syntax):**
```jsx
<Route path="/about" component={About} />
<a href="/about">About</a>
```

✅ **Correct (v6 syntax):**
```jsx
<Route path="/about" element={<About />} />
<Link to="/about">About</Link>
```
---