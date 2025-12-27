# 🔐 Secure Password Generator

A robust web utility built with Vanilla JavaScript that generates cryptographically strong random passwords. This tool allows users to customize length and complexity to meet various security requirements.

## 🚀 Live Demo
*()*

## ✨ Key Features
- **Customizable Complexity:** Users can toggle Uppercase letters, Numbers, and Special Symbols to meet specific site requirements.
- **Variable Length:** Supports password lengths from 4 to 20 characters.
- **One-Click Copy:** Integrated with the **Clipboard API** for a seamless user experience.
- **Client-Side Security:** All generation happens locally in the browser; no data is sent to a server.
- **Dynamic Pool Generation:** The algorithm dynamically builds a character set based on user preferences before generating the output.

## 🛠️ Technical Implementation
- **Math Logic:** Uses `Math.random()` to pick indices from a dynamically concatenated string pool.
- **DOM API:** Efficiently captures checkbox states and input values to drive the generation algorithm.
- **Clipboard API:** Implemented `navigator.clipboard.writeText` to provide modern "Copy to Clipboard" functionality.



## 📂 Project Structure
```text
Password-Generator/
│
├── index.html    # Layout and configuration checkboxes
├── style.css     # Dark-mode security themed UI
└── script.js     # Randomization logic and clipboard handling
