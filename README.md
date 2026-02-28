# Rohit.craft — Personal Portfolio Website

A modern, fully responsive portfolio website to showcase your web development skills, projects, and services. Built with React + Vite, featuring beautiful animations, a feedback system, and instant contact via EmailJS.

![Rohit.craft Screenshot](./public/rohit.jpg)

---

## 🚀 Features

- **Animated Hero Section** — Eye-catching intro with typing effect and code card
- **Responsive Design** — Looks great on all devices (desktop, tablet, mobile)
- **Services & Skills** — Highlight your expertise and tech stack
- **Projects Showcase** — Filterable project gallery with details
- **Experience Timeline** — Visualize your professional journey
- **Client Feedback** — Collect and display testimonials with star ratings
- **Contact Form** — EmailJS integration for instant messages
- **Dark Theme** — Modern, accessible color palette
- **Particles & Effects** — Subtle background animations for a premium feel

---

## 🛠️ Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [React Type Animation](https://www.npmjs.com/package/react-type-animation)
- [EmailJS](https://www.emailjs.com/) (contact/feedback forms)
- [React Icons](https://react-icons.github.io/react-icons/)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) (custom, no frameworks)

---

## 📦 Folder Structure

```
rohit-portfolio/
├── public/
│   └── rohit.jpg              # Your profile photo
├── src/
│   ├── components/            # All React components
│   ├── App.jsx                # Main app
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles
│   └── emailjs.config.js      # EmailJS config (add your keys!)
├── index.html                 # Main HTML
├── package.json               # Project metadata & scripts
├── vite.config.js             # Vite config
├── .gitignore                 # Ignore node_modules, dist, etc.
└── README.md                  # This file
```

---

## ⚡ Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/rohit-portfolio.git
   cd rohit-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the dev server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 EmailJS Setup (Contact & Feedback)

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account.
2. Create an **Email Service** and **Email Templates** for contact and feedback.
3. Copy your **Service ID**, **Template IDs**, and **Public Key**.
4. Open `src/emailjs.config.js` and fill in your values:
   ```js
   export const SERVICE_ID = 'your_service_id';
   export const CONTACT_TEMPLATE_ID = 'your_contact_template_id';
   export const FEEDBACK_TEMPLATE_ID = 'your_feedback_template_id';
   export const PUBLIC_KEY = 'your_public_key';
   ```
5. Test the contact and feedback forms — you should receive emails instantly!

---

## 🌐 Deployment (Vercel Recommended)

1. **Push your code to GitHub.**
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import your repo.
3. Vercel auto-detects Vite. Just click **Deploy**.
4. Your site will be live at `https://your-project-name.vercel.app`.

---

## 📝 Customization

- **Profile Photo:** Replace `public/rohit.jpg` with your own image.
- **Personal Info:** Edit `src/components/About.jsx` and `Hero.jsx` for your name, role, and bio.
- **Services, Skills, Projects:** Update the respective components in `src/components/`.
- **Social Links:** Edit `Footer.jsx` and `Contact.jsx` for your LinkedIn, email, etc.
- **Theme Colors:** Tweak CSS variables in `src/index.css` for a unique look.

---

## 🙋‍♂️ Author

**Rohit**  
[LinkedIn](https://www.linkedin.com/in/rohit3337/)  
Email: 3337.rohit64@gmail.com

---

## 📄 License

This project is open source and free to use for personal and professional portfolios.
