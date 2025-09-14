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
    section.center {text-align:center}
    section.big-code pre {font-size:2rem}
footer: 'SWE 363 | 251 | Sec 1 | KFUPM'
---
<!-- 

Todays goals: 

 - JS as a language 

 How:

 - Build in front of them 

 -->


Web Engineering & Development (SWE 363) 
# 4.1 JavaScript Fundamentals
### Hasan Al-kaf

---

# In today's lecture:

- JS Variables 
- JS Functions 
- JS Objects 
- JS Arrays 
- JS DOM 
- JS Events 

---

### Examples:

# 📘 JavaScript Basics – Simple Examples

```html
<!-- 1. Variables -->
<script>
let name = "Ali";        // string
let age = 20;            // number
let isStudent = true;    // boolean

console.log(name, age, isStudent);
</script>

<!-- 2. Functions ------------------------------------>
<script>
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Ali"));
</script>

<!-- 3. Objects ------------------------------------>
<script>
let student = {
  name: "Ali",
  age: 20,
  isStudent: true
};

console.log(student.name); // outputs "Ali"
</script>

<!-- 4. Arrays ------------------------------------>
<script>
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);     // "Apple"
console.log(fruits.length); // 3
</script>

<!-- 5. DOM ------------------------------------>
<!DOCTYPE html>
<html>
<body>
<p id="demo">Hello</p>

<script>
document.getElementById("demo").innerHTML = "Hello, JavaScript!";
</script>
</body>
</html>

<!-- 6. Events -------------------------------------->
<!DOCTYPE html>
<html>
<body>
<button onclick="showMessage()">Click Me</button>
<p id="output"></p>

<script>
function showMessage() {
  document.getElementById("output").innerHTML = "Button was clicked!";
}
</script>
</body>
</html>

```

---
### Reference: 
- Zybook: 4.1 to 4.7


---

# Announcements 📣
- Project Assignment #1 is due This Thursday at 11:59 PM

---

<!-- _class: demo -->

>45m
# Demo
Starter code at: web-engineering-kfupm-classroom-4-1-js-fundamentals/

---

# Next Class

- Js Part 2 