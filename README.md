# TaskFlow

TaskFlow is a **Task Management Web Application** designed to streamline task management with an intuitive interface. Built using **Laravel, Vite, and Tailwind CSS**, TaskFlow helps users efficiently handle their daily tasks with scheduling, filtering, and customization options. Whether you need to track personal tasks, manage work assignments, or organize projects, TaskFlow provides a seamless experience with real-time updates and a user-friendly design.

## Features

### **1. Home Dashboard** 🏠
- Get an **overview** of all your tasks, including **completed, failed, pending, and upcoming** tasks.
- A **Today's Brief** section highlights key tasks that need attention.
- **Time, Calendar, and Weather** widgets help with better scheduling and planning.
- A visually appealing dashboard with dynamic elements ensures smooth task tracking.

### **2. Tasks Management** 📋
- Complete **CRUD (Create, Read, Update, Delete)** functionality for tasks.
- Add **task categories, priority levels, and due dates** to keep things organized.
- **Search and filter** functionality to quickly find specific tasks based on criteria such as status, priority, and categories.
- Real-time task updates and reminders to keep users notified.

### **3. Schedule View** 📅
- Tasks are displayed in a structured **calendar-based schedule**.
- Advanced filters to view **tasks for today, a specific date, or a custom range**.
- Organized layout allows for **better planning** and **efficient time management**.
- Drag-and-drop functionality for easy task rearrangement.

### **4. Settings & User Management** ⚙️
- **Dark/Light mode** toggle for better accessibility and personalization.
- Comprehensive profile settings including:
  - The ability to **change Name, Email, and Password**.
  - **Logout and Delete Account** options for better user control.
- Fully responsive and mobile-friendly interface.

---

## Installation Guide 🚀

### **1. Clone the Repository**
```sh
git clone https://github.com/shehara5938e/taskflow.git
cd taskflow
```

### **2. Install Dependencies**
```sh
composer install
npm install
```

### **3. Set Up Environment**
```sh
cp .env.example .env
php artisan key:generate
```
Configure the `.env` file with your database credentials and other required settings.

### **4. Migrate the Database**
```sh
php artisan migrate
```

### **5. Start the Development Server**
```sh
php artisan serve
npm run dev
```

---

## Deployment 🌍
For deploying the application in a **production environment**, follow these steps:
```sh
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
Use a proper web server like **Apache or Nginx** with optimized Laravel settings for the best performance.

---

## Troubleshooting 🛠️
### **Issue: Website Loads Forever After Git Push**
If the website is stuck loading after a Git push, follow these steps:
```sh
composer install
npm install
php artisan config:clear
php artisan cache:clear
npm run dev
```
Ensure that the `.env` file is properly configured and that the database credentials are correct.

### **Common Fixes:**
- Check the **database connection** and run migrations again if necessary.
- Make sure **Vite and Laravel Mix** are properly configured.
- Run `php artisan migrate --seed` if initial data is missing.
- Restart the development server to apply changes.

---

## Contributing 🤝
We welcome contributions! If you’d like to contribute:
- Fork the repository.
- Make necessary improvements.
- Submit a **pull request** with a detailed explanation of your changes.
- Open an **issue** if you encounter bugs or have feature requests.

---

## License 📜
This project is open-source and licensed under the **MIT License**.

---

### **Author**
Developed by **Thineth Shehara Nayanananda**, A web application developer.

