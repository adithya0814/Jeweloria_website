# 💎 Jeweloria – A Full-Stack E-commerce Jewelry Store

Welcome to Jeweloria, a responsive and elegant full-stack e-commerce application for a fictional jewelry brand. This project is built from the ground up using **Node.js**, **Express.js**, **HTML**, and **CSS**. It is designed to simulate a real-world shopping experience, complete with dynamic cart management, form submissions, and a server-side API to handle data persistence using JSON files as a mock database.

---

## 📸 Screenshots

*(Here you can add screenshots of your application, like the home page, product page, and cart.)*

**Architecture Diagram**

![Jeweloria Architecture](./public/images/architecture.png)

---

## 🚀 Features

- **Dynamic Product Pages**: Browse through beautifully designed product pages for rings and bridal jewelry.
- **Shopping Cart**: Full-featured cart functionality including:
    - Add items to the cart.
    - Update item quantities.
    - Remove items from the cart.
    - Clear the entire cart.
- **Contact Form**: A functional "Contact Us" form that captures and stores user submissions on the server.
- **RESTful Backend API**: A robust backend built with Express.js to manage cart and submission data.
- **Data Persistence**: Uses local JSON files (`cart.json`, `submissions.json`) to act as a simple database, persisting data between sessions.
- **Responsive Design**: A clean and elegant frontend built with pure HTML and CSS, ensuring a great user experience on all devices.
- **Secure Headers**: Basic Content Security Policy (CSP) implemented for enhanced security.

---

## 🛠 Tech Stack

| Technology | Role             |
| :--------- | :--------------- |
| **Node.js**| Backend Runtime Environment |
| **Express.js**| Web Server & API Framework |
| **HTML5**| Frontend Markup |
| **CSS3**| Styling and Animations |
| **JSON**| Mock Database / Data Store |

---

## 📂 Project Structure

The project is organized into a clean and scalable structure to separate concerns.

```
Jeweloria/
├── data/
│   ├── cart.json           # Stores current cart items
│   └── submissions.json    # Stores contact form submissions
├── public/
│   ├── css/                # CSS stylesheets
│   ├── images/             # All static images
│   └── js/                 # Frontend JavaScript files
├── views/
│   ├── home.html           # Application homepage
│   ├── ring.html           # Rings product page
│   └── ...                 # Other HTML pages
├── .gitignore
├── package.json
├── package-lock.json
└── server.js               # Main Express.js server file
```

---

## 📖 API Endpoints

The backend server provides the following RESTful API endpoints to interact with the application data.

| Method   | Endpoint              | Description                               |
| :------- | :-------------------- | :---------------------------------------- |
| `GET`    | `/cart`               | Retrieves all items in the shopping cart. |
| `POST`   | `/add_to_cart`        | Adds a new item or increments its quantity in the cart. |
| `POST`   | `/update_quantity`    | Updates the quantity of an item in the cart. |
| `DELETE` | `/cart`               | Clears all items from the shopping cart.  |
| `GET`    | `/submissions`        | Retrieves all contact form submissions.   |
| `POST`   | `/store_submission`   | Stores a new contact form submission.     |

---

## ⚙️ Installation & Running the App

Follow these steps to get the project running on your local machine.

**Prerequisites:**
- Node.js (which includes npm) installed on your system.

**Steps:**

```bash
# 1. Clone the repository
git clone https://github.com/Chinmayi-ch/Jeweloria.git

# 2. Navigate to the project directory
cd Jeweloria

# 3. Install the required dependencies
npm install

# 4. Start the server
node server.js
```

Once the server is running, open your favorite web browser and navigate to:

➡️ **http://localhost:5500**

---

## 🧠 What I Learned

- **Backend Development**: Building a RESTful API from scratch using Node.js and Express, including routing, request handling, and middleware.
- **Frontend-Backend Integration**: Connecting a static frontend to a dynamic backend to create a full-stack experience.
- **Data Handling**: Using the file system (`fs` module) to simulate a database with JSON files for persistent data storage.
- **Modular Code**: Organizing files and folders in a structured way to improve maintainability and scalability.
- **Web Fundamentals**: Reinforcing core concepts of HTTP, client-server architecture, and web security (CSP).

---

## 🔮 Future Improvements

- **Database Integration**: Replace the JSON file storage with a robust database like MongoDB or PostgreSQL for better performance and scalability.
- **User Authentication**: Implement user accounts with login/registration functionality to allow users to save their carts and view order history.
- **Frontend Framework**: Migrate the frontend to a modern library like React or Vue.js to create a more dynamic and component-based UI.
- **Payment Gateway**: Integrate a payment solution like Stripe or PayPal to simulate a complete checkout process.
- **Unit & Integration Testing**: Add tests using a framework like Jest to ensure the reliability of the API and application logic.

