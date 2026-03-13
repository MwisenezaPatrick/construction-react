# Construction Website

A modern, responsive construction company website built with React and Vite. This project showcases construction services, portfolio, testimonials, and provides an easy way for potential clients to get in touch.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern UI**: Clean, professional design using Bootstrap
- **Single Page Application**: Fast navigation with React Router
- **Contact Form**: Integrated contact form with Web3Forms
- **Portfolio Showcase**: Display construction projects with image gallery
- **Service Sections**: Detailed information about construction services
- **Client Testimonials**: Customer reviews and feedback
- **Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Bootstrap 5.3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Smooth Scrolling**: React Scroll
- **Linting**: ESLint
- **Language**: JavaScript (ES6+)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

You can check your Node.js version by running:
```bash
node --version
```

## 🚀 Installation & Setup

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd construction-react
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🏗️ Project Structure

```
construction-react/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── sections/          # React components for each section
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Hero section
│   │   ├── About.jsx      # About section
│   │   ├── Services.jsx   # Services section
│   │   ├── Portfolio.jsx  # Portfolio/Projects section
│   │   ├── Working.jsx    # How it works section
│   │   ├── Testimonials.jsx # Client testimonials
│   │   ├── Contact.jsx    # Contact form section
│   │   ├── Footer.jsx     # Footer
│   │   └── animation.js   # Animation configurations
│   ├── export.js          # Data exports (services, testimonials, etc.)
│   ├── App.jsx            # Main App component
│   ├── App.css            # Global styles
│   ├── main.jsx           # App entry point
│   └── index.css          # Additional styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Changing Content
- Edit text content in `src/export.js` for services, testimonials, and planning steps
- Update contact information in `src/sections/Footer.jsx`
- Modify hero text in `src/sections/Hero.jsx`

### Styling
- Global styles are in `src/App.css` and `src/index.css`
- Component-specific styles are inline or in Bootstrap classes
- Colors and themes can be modified in the component files

### Adding New Sections
1. Create a new component in `src/sections/`
2. Import and add it to `src/App.jsx`
3. Update navigation in `src/sections/Header.jsx` if needed

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deploy Options
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Hosting**: Upload the `dist` folder contents to your web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

For questions or support, please contact:
- Email: construction@gmail.com
- Phone: +254 740 123 456
- Location: Kigali

---

Built with ❤️ using React and Vite
