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

### Reference: 
- Zybook: 4.1 to 4.7

---

# Announcements 📣
- Project Assignment #1 is due This Thursday at 11:59 PM

---

### Examples:

# 📘 JavaScript Basics – Simple Examples

```javascript
<!-- 1. Variables -->

let name = "Ali";        // string
let age = 20;            // number
let isStudent = true;    // boolean
console.log(name, age, isStudent);

```
```javascript
<!-- 2. Functions ------------------------------------>

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Ali"));
```
---
```javascript

<!-- 3. Objects ------------------------------------>
let student = {
  name: "Ali",
  age: 20,
  isStudent: true
};
console.log(student.name); // outputs "Ali"
```
```javascript
<!-- 4. Arrays ------------------------------------>
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);     // "Apple"
console.log(fruits.length); // 3
```
---
```html
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
```
```html
<!-- 6. Events -------------------------------------->
<!DOCTYPE html>
<html>
<body>
<button onclick="showMessage()">Click Me</button>
<p id="output"></p>
<script>
function showMessage() {
  document.getElementById("output").innerHTML = "Button was clicked!";}
</script>
</body>
</html>
```

---

### functions in JavaScript:

```javascript
function Greeting(){
    console.log("Helllo");
    alert("Alert me")
}
Greeting();
```
```javascript

const greet=function(){
    alert("Alert me")
}
greet();
```
```javascript
 const greet=()=>{
    alert("Alert me");
}
greet(); 
```
---

```javascript
 document.getElementById("btn").onclick = function() {
    alert("Alert me");
}; 
```
```javascript
 class Car {
  start() {
    alert("Alert me");
  }
}
const myCar = new Car();
myCar.start(); // Trigger method 
```
```javascript
  function sayHi() {
        alert("Alert me");  } 
```
```javascript

 (function(){
        alert("Alert me");
})();
```
---
```javascript

function Person(name) {
  this.name = name;
  this.sayHello = function() {
        alert("Alert me");
  };
}

const p1 = new Person("Hasan");
p1.sayHello(); // Triggered on object

```
```javascript

 document.getElementById("btn").addEventListener("click",()=>{
        alert("Alert me");

}); 

```
---
## Let and Var keywords
---
![ center](./img/VarLet.jpg)

---
<!-- _class: demo -->

>45m
# Demo
Starter code at: web-engineering-kfupm-classroom-4-1-js-fundamentals/

---

# Next Class

- Js Part 2 