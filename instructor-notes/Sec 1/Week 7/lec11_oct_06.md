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
---
# React: `useState` and `.map` — two tiny examples

Below are two bite-sized examples you can drop into a project.  
Each example has a quick summary, a short explanation, and the minimal files you need.

---

## Example 1 — Counter (parent state with `useState`, child calls back via prop)

**Summary**  
The parent (`App`) holds the counter state with `useState`. It passes a function (`increment`) to the child (`Counter`). When the child’s button is clicked, it calls `onAction(step)` to update the parent’s state.

**Explanation**
- State (`count`) lives in the parent.
- The parent passes a handler to the child: `\<<Counter onAction={increment} step={5} />\>`.
- The child triggers the parent’s handler: `onAction(step)`.
- React re-renders with the new `count`.
---
```jsx
// src/component/Counter.jsx
function Counter({ label, step, onAction, count }) {
  return (
    <button onClick={() => onAction(step)}>
      {count}
    </button>
  );
}
export default Counter;
```
---
```jsx
// src/App.jsx
import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";

function App() {
  const [count, setCount] = useState(0);

  function increment(step) {
    setCount((c) => c + step);
  }
  return (
    <>
      {count}
      <Counter label="Add 5" count={count} step={5} onAction={increment} />
    </>
  );
}
export default App;
```
---
# Example 2 — Render a List with `.map`

**Summary**  
Map over an array of tasks and render one `<Tasks />` component per item.

**Explanation**  
- `.map((item, index) => …)` returns a new array of elements for React to render.  
- Use a `key` prop to help React track items (index is OK for simple, static demos).

---

## Files

### `src/App.jsx`
```jsx
import "./App.css";
import Tasks from "./component/Tasks";

export default function App() {
  const tasks = ["a", "b", "c", "d"];

  return (
    <>
      {tasks.map((v, k) => (
        <Tasks key={k} idx={k} value={v} />
      ))}
    </>
  );
}
```
---
src/component/Tasks.jsx
```jsx
export default function Tasks({ idx, value }) {
  return <p>{idx}-{value}</p>;
}

---
Lab Exercise 5-3
https://classroom.github.com/a/wiJZiwXu
