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

Web Engineering & Development (SWE 363) 
# Introduction to Web Development  
### Created by: Dr. Omar Hammad

---

<!-- 

Goal: Give introduction to some important concepts.
- Ip addresses
- DNS
- URLs
- HTTP
- HTML, CSS & JS 

How: Give them the whole journey from a request until a response 

Practical: Let them investigate the request <> response journey themselves 

Subgoals: Join Slack, Notice BB, Start looking for groups.  
 
-->

# Announcements 📣

- Join Slack
- Join the Common section 
- Start looking for a project team 


---

# Today's plan: 

We will explore the journey of an HTTP request. In particular: 

- HTTP Requests
- HTTP Responses
- IP addresses
- DNS (Domain names system)
- URLs (Uniform Resource Locator)
- intro to HTML, CSS & JS


---

<!-- _class: activity -->

>~10m
# Explore it yourself 
- Go to google.com
- Right click > inspect 
- Search for any keyword (e.g. KFUPM)
- Notice: # requets, requests latecny, type of resource requested, size of response)
![bg right](./img/google.png)


---

# What happens when we Google "KFUPM"? 
- Where does our request be **directed**?
- How does it know the **path**?
- How does it ask for specific **results**?
- How are the results **displayed**?
---

<!-- NEEDS VIZ -->

# The Journey of a Web Request 🌐

1. User types **URL**
2. **DNS** Lookup
3. **IP Address** Found
5. HTTP **Request** Sent
7. HTTP **Response**
8. Browser **Renders** Page

---

<!-- Explain each part  -->

# 1. User types a URL 
## https://www.google.com/search?q=kfupm

- Shceme
- Hostname
- Path
- Query string


---

# 2. DNS Lookup

• **Browser** checks its **cache** first  
• If not found, check **OS cache**  
• If not found, check **router cache**  
• If not found, ask **ISP DNS server**  
• **ISP** asks **Root DNS servers**  
• **Root** points to **TLD servers** (.com)  
• **TLD** points to **authoritative server**  
• **Authoritative server** returns **IP address**  
• **Result** is **cached** at all levels  


---

# 3. IP Address found 

Google.com -> 172.217.18.36

- A unique number that **identifies** each computer using the Internet Protocol to communicate over the internet


---

# 4. HTTP Request Sent 
```
┌─────────────────────────────────────────────────────────────┐
│                    HTTP REQUEST                             │
├─────────────────────────────────────────────────────────────┤
│ GET /search?q=KFUPM HTTP/1.1                                │
│ Host: google.com                                            │
│ User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)       │
│ Accept: text/html,application/xhtml+xml,application/xml     │
│ Accept-Language: en-US,en;q=0.9                             │
│                                                             │
│ [Empty body for GET request]                                │
└─────────────────────────────────────────────────────────────┘
```

---

# 5. HTTP Response Recieved


```
┌─────────────────────────────────────────────────────────────┐
│                    HTTP RESPONSE                            │
├─────────────────────────────────────────────────────────────┤
│ HTTP/1.1 200 OK                                             │
│ Date: Mon, 26 Aug 2024 12:34:56 GMT                         │
│ Content-Type: text/html; charset=UTF-8                      │
│ Content-Length: 10240                                       │
│ Connection: keep-alive                                      │
│                                                             │
│ <!DOCTYPE html>                                             │
│ <html>                                                      │
│   <head><title>Search results for KFUPM</title></head>      │
│   <body>... (HTML content) ...</body>                       │
│ </html>                                                     │
└─────────────────────────────────────────────────────────────┘
```


---

# 6. Browser Renders Page

Response is returned in HTML, CSS and JS

---

# A Simple HTML Page
```html
<!doctype html>
<html>
  <head>
    <style>
      body { background-color: lightblue; }
    </style>
  </head>
  <body>
    Hello, world!
    <script>
      console.log('Hello from JavaScript!');
    </script>
  </body>
</html>
```
---

<!-- _class: demo -->
>30 mins
# Build a simple HTML page 
- Pull the latest changes from the Repo
- Go to demo 1.2 hello html
- Read the instrutions in the README.md file

---

# Thank you
Next class:
- HTML Document
- Basic HTML Tags
- HTML Lists
- HTML Tables 
- HTML Images

