```mermaid
sequenceDiagram
    participant browser
    participant server

    
    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server->>browser: HTML DOCUMENT
    deactivate server

    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server->>browser: CSS file main.css
    deactivate server

    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server->>browser: JS file spa.js
    deactivate server

    browser->>server: GET  https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server->>browser: JSON data
    deactivate server
    note right of browser: The browser renders the JSON data

```