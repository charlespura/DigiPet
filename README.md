# 🐾 DigiPet · PET·VAULT QR Pet ID System

A simple **QR Code Pet Identification System** built with **HTML, TailwindCSS, and JavaScript**.

This project allows pet owners to **generate QR codes for their pets**, store important pet information, and **scan QR codes to retrieve the data instantly**.

🔗 Live Demo:  
https://charlespura.github.io/DigiPet/

🔗 Repository:  
https://github.com/charlespura/DigiPet

---

# 📸 Preview

PET·VAULT allows users to:

- Select pet type
- Choose or enter a custom breed
- Input pet and owner information
- Generate a QR code
- Download the QR code
- Scan QR codes using a built-in camera scanner

---

# ✨ Features

## 🐶 Pet Type Selector

Choose from **10 popular pets**

- Dog
- Cat
- Goldfish
- Budgie
- Hamster
- Rabbit
- Turtle
- Leopard Gecko
- Fancy Mouse
- Cockatiel

---

## 🧬 Breed Selector + Custom Breed

Users can either:

✔ Select a breed from a dropdown list  
✔ Type a **custom breed**

Example:

```
Puggle
Mixed Breed
Mutt
```

The system automatically updates:

- Breed display
- Trivia
- Care tips

---

## 📋 Pet & Owner Information Form

Required fields:

- Pet Name
- Breed / Species
- Owner Name
- Phone Number

Optional field:

- Microchip ID

---

## 🔳 QR Code Generator

The system generates a **QR code containing pet information**.

Stored data example:

```json
{
  "petType": "dog",
  "petName": "Max",
  "breed": "German Shepherd",
  "owner": "John Doe",
  "phone": "+123456789",
  "chip": "985112003456789",
  "timestamp": "Generated time"
}
```

---

## 📥 QR Code Download

Users can **download the generated QR code as PNG**.

This QR code can be:

- Attached to a pet collar
- Printed on a tag
- Stored digitally

---

## 📷 Built-in QR Scanner

The project includes a **camera scanner** using:

```
html5-qrcode
```

It can:

- Scan pet QR codes
- Display the stored information
- Work with mobile cameras

---

## 🖼 Gallery (Coming Soon)

A future feature where users can:

- View saved QR codes
- Manage pet profiles
- Store pet records

---

## ❓ Help Section

A built-in help page explains:

- How to generate QR codes
- How to scan them
- How to use custom breeds

---

# 🛠 Technologies Used

### Frontend

- HTML5
- TailwindCSS
- JavaScript

### Libraries

QR Code Generator

```
qrcodejs
```

QR Code Scanner

```
html5-qrcode
```

Icons

```
Font Awesome
```

---

# 📁 Project Structure

```
DigiPet
│
├── index.html
├── picture
│   └── logo.png
│
└── README.md
```

---

# 🚀 How to Run the Project

## Option 1 — Open Locally

1. Download or clone the repository

```
git clone https://github.com/charlespura/DigiPet.git
```

2. Open the folder

3. Open

```
index.html
```

in your browser.

---

## Option 2 — Use GitHub Pages

Open the live version:

https://charlespura.github.io/DigiPet/

---

# 📱 Use Case

This system can be used for:

- Lost pet identification
- Smart pet tags
- Pet shelter management
- Veterinary pet records
- Pet owner contact systems

---

# 💡 Future Improvements

Planned features:

- Save pet profiles
- Gallery QR history
- Database storage
- Pet profile pages
- QR scanning result UI
- Export pet cards
- Mobile optimization

---

# 👨‍💻 Author

**Charles Pura**

GitHub  
https://github.com/charlespura

Project Repository  
https://github.com/charlespura/DigiPet

Live Demo  
https://charlespura.github.io/DigiPet/

---

# 📜 License

This project is open source and available under the **MIT License**.

---

⭐ If you like this project, consider **starring the repository** on GitHub!