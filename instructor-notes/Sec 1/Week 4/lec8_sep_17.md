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
### Dr. Omar Hammad 
### Hasan Al-kaf

---

# In today's lecture:

- Objects
- Maps 
- String
- Date
- Math
- Exception Handling
- Regular Expressions

### Reference: 
- Zybook: 4.9 to 4.15

---
# Announcements 📣
- Project Phase #2 is due This Thursday at 11:59 PM
- Quiz next class 

---
### object Examples
``` javascript
const fruits = { "f1": "apple", "f2": "grape", "f3": "banana", "f4": "peach" };
const keys = Object.keys(fruits);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], "=", fruits[keys[i]]);
}
```
``` javascript

const fruits = { "f1": "apple", "f2": "grape", "f3": "banana", "f4": "peach" };
let i = 0;
while (i < keys.length) {
  console.log(keys[i], "=", fruits[keys[i]]);
  i++;
}
```
---
``` javascript
const fruits = { "f1": "apple", "f2": "grape", "f3": "banana", "f4": "peach" };
const keys = Object.keys(fruits);
let j = 0;
do {
  console.log(keys[j], "=", fruits[keys[j]]);
  j++;
} while (j < keys.length);
```
``` javascript
for (let k in fruits) {
  console.log(k, "=", fruits[k]);
}
```
---
``` javascript
const fruits = { "f1": "apple", "f2": "grape", "f3": "banana", "f4": "peach" };
for (let k in fruits) {
  console.log(k, "=", fruits[k]);
}
```
``` javascript
const fruits = { "f1": "apple", "f2": "grape", "f3": "banana", "f4": "peach" };
for (let [key, value] of Object.entries(fruits)) {
  console.log(key, "=", value);
}
```
---
### Modern alternative methods and properties
``` javascript
// Create a new Map
let myMap = new Map();

// 1️⃣ set(key, value) → add or update a key-value pair
myMap.set("name", "Ali");
myMap.set("age", 21);
console.log(myMap); // Map { 'name' => 'Ali', 'age' => 21 }

// 2️⃣ get(key) → retrieve the value by key
console.log(myMap.get("name")); // Ali

// 3️⃣ has(key) → check if a key exists
console.log(myMap.has("age")); // true
console.log(myMap.has("grade")); // false

// 4️⃣ delete(key) → remove a key-value pair
myMap.delete("age");
console.log(myMap); // Map { 'name' => 'Ali' }

// 5️⃣ size → number of elements in the map
console.log(myMap.size); // 1
```
---
### Regular Expressions – Quick Reference with `.test()`

| Pattern    | Meaning                        | Example Code                        | Output  |
|------------|--------------------------------|-------------------------------------|---------|
| `/abc/`    | Matches the exact sequence "abc" | `/abc/.test("abc123");` <br> `/abc/.test("xyz");` | `true` <br> `false` |
| `/^abc/`   | Matches "abc" **at the start**   | `/^abc/.test("abcdef");` <br> `/^abc/.test("zabc");` | `true` <br> `false` |
| `/abc$/`   | Matches "abc" **at the end**     | `/abc$/.test("123abc");` <br> `/abc$/.test("abc123");` | `true` <br> `false` |
| `/a.c/`    | `.` matches **any one char**     | `/a.c/.test("abc");` <br> `/a.c/.test("ac");` | `true` <br> `false` |
| `/a*/`     | `*` matches **0 or more a’s**    | `/a*/.test("aaab");` <br> `/a*/.test("bbb");` | `true` <br> `true` (matches 0 times) |
| `/a+/`     | `+` matches **1 or more a’s**    | `/a+/.test("caaaab");` <br> `/a+/.test("xyz");` | `true` <br> `false` |
| `/ba?/`    | `?` matches **0 or 1 a**         | `/ba?/.test("ba");` <br> `/ba?/.test("b");` | `true` <br> `true` |
| `/[aeiou]/` | Matches any **vowel**           | `/[aeiou]/.test("test");` <br> `/[aeiou]/.test("sky");` | `true` <br> `false` |
| `/[^0-9]/` | Not a digit                     | `/[^0-9]/.test("abc123");` <br> `/[^0-9]/.test("123");` | `true` <br> `false` |
| `/[0-9]{3}/` | Exactly **3 digits**           | `/[0-9]{3}/.test("My code 1234");` <br> `/[0-9]{3}/.test("12");` | `true` <br> `false` |
| `/\d/`     | Matches any **digit**            | `/\d/.test("a1b2");` <br> `/\d/.test("abc");` | `true` <br> `false` |
| `/\D/`     | Matches any **non-digit**        | `/\D/.test("a1b2");` <br> `/\D/.test("123");` | `true` <br> `false` |
| `/\w/`     | Matches **word char**            | `/\w/.test("hi!");` <br> `/\w/.test("!!!");` | `true` <br> `false` |
| `/\W/`     | Matches **non-word char**        | `/\W/.test("hi!");` <br> `/\W/.test("abc");` | `true` <br> `false` |
| `/\s/`     | Matches whitespace               | `/\s/.test("a b");` <br> `/\s/.test("abc");` | `true` <br> `false` |
| `/\S/`     | Matches non-whitespace           | `/\S/.test("a b");` <br> `/\S/.test("   ");` | `true` <br> `false` |
| `/\bword\b/` | Matches whole word boundary    | `/\bword\b/.test("a word here");` <br> `/\bword\b/.test("swordfish");` | `true` <br> `false` |
---

<!-- _class: demo -->

>45m
# Demo
Starter code at: web-engineering-kfupm-classroom-4-1-js-advanced/

---

# Next Class

- Quiz