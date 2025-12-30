EZYSKILLS – EdTech Learning Platform

EZYSKILLS is a production-grade frontend simulation of a real-world EdTech SaaS product.
The project focuses on scalability, UX-driven decision flows, and maintainable frontend architecture, rather than static UI rendering.

It is designed to demonstrate how complex learning journeys can be transformed into clear, interactive user experiences.

🚀 Why This Project Exists

Choosing a career path in IT is overwhelming for beginners.
EZYSKILLS aims to bridge the gap between curiosity and career by guiding users through structured, logic-driven decision flows.

✅ Problems It Solves

Helps beginners identify IT career paths through guided, industry-aligned questions.

Reduces course confusion using a decision-tree-based chatbot.

Transforms complex learning data into structured, digestible UI modules.

Simulates real SaaS UX behavior, not just static content presentation.

The project emphasizes real user journeys over page-based navigation.

✨ Key Features
🧠 Interactive Career Chatbot

State-managed decision tree (Job → Path → Tech Stack)

Auto-scrolling conversation flow

Option cards with animated transitions

Context-based routing to recommended courses

📚 Dynamic Course Catalog

Category-based filtering

Color-coded course types

Interactive hover states

Direct routing to detailed course pages

📄 Advanced Course Details System

Head section with course identity and level

Objectives and learning outcomes with visual indicators

Accordion-based syllabus with step numbering

Interactive project showcase cards with animations

🧱 Scalable Component Architecture

Feature-based folder structure

Reusable global UI components

Clear separation between pages, features, and shared logic

📱 Responsive Global UI

Adaptive Navbar & Footer

Smooth scrolling helpers

Mobile-first responsive layouts

🎞️ Premium Animations

Powered by Framer Motion

Custom SCSS keyframes

Subtle UX-focused transitions

🛠️ Tech Stack
Frontend

React 19

Vite

React Router DOM v7

Styling & UI

Sass (SCSS) – Modular architecture

BEM methodology

Framer Motion

Swiper.js

State & Utilities

Redux Toolkit (configured for future scalability)

Axios

React Icons

🧱 Project Architecture (High-Level)
src/
├── Components/
│ ├── ComponentsHomePage
│ ├── ComponentsCoursePage
│ ├── ComponentsAboutUs
│ ├── ComponentsChat
│ ├── ComponentsPricingPage
│ ├── COMPONENTSGLOBAL
│ └── UI
├── Pages/
│ ├── Home
│ ├── Courses
│ ├── Course
│ ├── AboutUs
│ ├── Pricing
│ ├── FAQ
│ └── ContactUs
├── data/
├── images/

The structure follows a feature-based architecture, designed for easy scalability and long-term maintainability.

🎨 Design Credits

The UI/UX design of EZYSKILLS is inspired by professional EdTech layouts found on the Figma platform.
The implementation focuses on translating high-quality design concepts into clean, scalable, and production-ready frontend code.

🛠️ Installation & Setup

Clone the repository

git clone https://github.com/your-username/ezyskills.git

Install dependencies

npm install

Run development server

npm run dev

Build for production

npm run build

📌 Project Status

Core frontend features implemented

UI & UX flows completed

Backend integration planned (API / CMS)

Performance & SEO optimizations pending

👤 Author

Mahmoud Fathy
Frontend Engineer
Focused on building scalable, UX-driven web applications using modern frontend technologies.

This project was developed as a portfolio-grade demonstration of real-world frontend engineering practices.
