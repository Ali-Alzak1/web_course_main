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
    section.demo { background: var(--sedondary); color:var(--foreground)}
    section.demo h1,section.demo h2, section.demo h3, section.demo h4, section.demo h5 { color: var(--foreground) }
    section.demo footer { display: none; }
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
footer: 'SWE 363 | 251 | Sec F04 | KFUPM'
---

<!-- 

# Goals 

By the end of this lecture students will:

1. Be motivated to take the course 
2. Have a clear expectations about the course 
3. Have a birdeye view of the core concepts 
4. Practiced setting up an building a fullstack web app

# Agenda (11-12:15)

- Getting to know each other (15m)
- Slides (15m): 
-- What is course about? 
-- History of the web <<NEEDS READING>>
-- HTML, CSS & JS <<NEEDS READING>>
- Demo: Building a Full stack app (15m)
- Hands-on: Building a full stack app (30m)

-->

<!-- 
Assalamu Alaykom All
Thank you for beign here today 
 -->



# Web Engineering & Development (SWE 363) 
### Dr. Khadijah Al Safwan


 ---

 <!-- 
Before we start let's get to know you ..
 -->

<!-- _class: activity -->


> Activity ~15 mins
# Knowing each other 
- Name, Major 
- What is something interesting about you? 


---

<!-- These are the course learning outcomes .. -->

# Course Learning Outcomes:
By the end of this course you will be able to :

1. Identify candidate **tools and technologies** for developing web applications.
2. Recognize the **social impact and professional** responsibility towards web applications.
3. Conceptualize and recognize **design principles** in building front-end and back-end web applications.
4. **Build and publish** cross-platform, data-driven, and dynamic web applications.
5. Incorporate best practices to boost the **sustainability, usability, and accessibility** of web applications.

---


<!-- So what is the web? or the world wide web -->

So .. 
# What is the web?
*aka World Wide Web or WWW*


---

<!-- _class: light -->

# The web 
*A vast network of interconnected documents and resources, accessible via the **internet**, that allows users to share and access information globally.*
![bg right](./img/web3.png)

---

<!-- Ok what technologies make the web possible? -->

# What technologies makes the web possible?

---

<!-- _class: boxes -->
 

# What technologies makes the web possible?
- Internet
- HTTP 
- Servers 
- Clients 
- HTML 
- URLs

<!--  

---

Internet: A global network of interconnected computers that communicate using standardized protocols.
// 
HTTP: Hypertext Transfer Protocol, the foundation of data communication on the web, used for transmitting web pages.
// 
Servers: Computers or systems that provide resources, data, services, or programs to other computers, known as clients, over a network.
// 
Clients: Devices or programs that request and use resources or services from a server.
// 
HTML: Hypertext Markup Language, the standard language for creating and designing web pages and web applications.
// 
URLs: Uniform Resource Locators, the addresses used to access resources on the internet. 

---

-->

---

<!-- This is a simple architecture of the web -->

# What makes a web application?
A web application is a software application that runs on a **web server** and is accessed through a **web client**. 

---

### Architecture of a simple web app
<!-- _class: graph -->
<!-- footer: | -->

```
┌─────────────────┐    HTTP Request     ┌─────────────────┐
│                 │ ──────────────────► │                 │
│    CLIENT       │                     │    SERVER       │
│   (Browser)     │                     │   (Python/      │
│                 │                     │    Node.js/     │
│ ┌─────────────┐ │                     │    etc.)        │
│ │   HTML      │ │                     │                 │
│ │   CSS       │ │                     │ ┌─────────────┐ │
│ │ JavaScript  │ │                     │ │   Routes    │ │
│ └─────────────┘ │                     │ │   Logic     │ │
│                 │                     │ │   Database  │ │
│ ┌─────────────┐ │                     │ └─────────────┘ │
│ │ User Input  │ │                     │                 │
│ │ Interactions│ │                     │ ┌─────────────┐ │
│ └─────────────┘ │                     │ │   API       │ │
│                 │    HTTP Response    │ │ Endpoints   │ │
│                 │ ◄────────────────── │ └─────────────┘ │
└─────────────────┘                     └─────────────────┘
```


---

<!-- _class: activity -->

> Activty ~10m

## github.com/Web-Engineering-KFUPM/web_course_main
- visit the link
- Star the repository
- Explore the repository 
- Read the syllabus 
- Ask questions 

---

<!-- _class: demo -->

> Demo ~30m
# Building a real web app
- Go to our repo (also found in BB)
- Clone the project 
- Run the starter 
- Complete the code 
- Push to Github 


---

# Next Class 

- History of the web 
- HTML, CSS & JS 
- Infrastructure of the web



