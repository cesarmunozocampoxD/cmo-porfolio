# 🚀 Cesar Muñoz Ocampo - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Material-UI showcasing my professional experience, projects, and skills as a Senior Fullstack Developer.

## 🌟 Features

- **Modern Design**: Clean, professional UI built with Material-UI components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Sections**: Smooth scrolling navigation and interactive elements
- **Dynamic Content**: All content managed through a centralized profile object
- **Print Functionality**: Built-in CV download/print feature
- **Project Showcase**: Portfolio projects with GitHub links and documentation
- **Contact Integration**: Direct links to social profiles and email
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v5
- **Icons**: Material Icons
- **Styling**: CSS-in-JS with MUI's sx prop
- **Deployment**: GitHub Pages ready

## 📁 Project Structure

```
cmo-porfolio/
├── public/
│   ├── pdfs/                    # PDF documents for projects and CV
│   │   ├── gmtlaboratory-project.pdf
│   │   ├── aoe-api-project.pdf
│   │   ├── portfolio-project.pdf
│   │   └── cesar-munoz-portfolio.pdf
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── photo.jpg        # Profile photo
│   ├── AboutMe.jsx              # Main portfolio component
│   ├── App.jsx                  # Root component
│   ├── Banner.jsx               # Banner component
│   ├── Projects.jsx             # Projects component
│   ├── MUIRoot.jsx              # MUI theme configuration
│   ├── main.jsx                 # Application entry point
│   ├── App.css                  # Global styles
│   └── index.css                # Base styles
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cesarmunozocampoxD/cmo-porfolio.git
   cd cmo-porfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your assets**
   - Place your profile photo in `src/assets/img/photo.jpg`
   - Add PDF documents to `public/pdfs/` folder

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:80` (or the port shown in terminal)

## 📝 Customization

### Update Profile Information

Edit the `profile` object in `src/AboutMe.jsx` to customize:

```javascript
const profile = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    aboutMe: "Your description...",
    photo: profilePhoto
  },
  experience: [...],
  education: [...],
  skills: [...],
  projects: [...],
  contact: {...}
};
```

### Key Sections to Customize:

1. **Personal Information**: Name, title, about me description
2. **Experience**: Work history with periods, titles, and descriptions
3. **Education**: Academic background and certifications
4. **Skills**: Technical skills and technologies
5. **Projects**: Portfolio projects with links and descriptions
6. **Contact**: Email and social media links

## 🎨 Theme Customization

The project uses Material-UI theming. Customize colors and styles in `src/MUIRoot.jsx`.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 600px
- **Tablet**: 600px - 960px  
- **Desktop**: > 960px

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📄 Features Overview

### Header Section
- Professional profile photo
- Name and title display
- Call-to-action buttons (Contact Me, Download CV)

### About Me Section  
- Personal introduction and professional summary

### Experience Section
- Work history with company details
- Experience level indicators (Senior, Mid-Level, Junior)
- Detailed job descriptions

### Education Section
- Academic background
- Certifications and courses
- Institution details

### Skills Section
- Technical skills displayed as interactive chips
- Organized and visually appealing layout

### Projects Section
- Portfolio projects with descriptions
- GitHub links for public repositories
- Private project indicators
- PDF documentation links

### Contact Section
- Direct email contact
- Social media links (GitHub, LinkedIn)
- Interactive social icons

## 🌐 Deployment

### GitHub Pages Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings
   - Select source branch (usually `main` or `gh-pages`)

### Other Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI

## 🔒 Environment Considerations

- All sensitive information should be kept in environment variables
- PDF files in `public/pdfs/` will be publicly accessible
- Update contact information and social links before deployment

## 🐛 Troubleshooting

### Common Issues

1. **Image not loading**: Check file path in `src/assets/img/`
2. **PDF not found**: Ensure PDFs are in `public/pdfs/` folder
3. **Port conflicts**: Vite will automatically use next available port

### Development Tips

- Use browser dev tools for responsive testing
- Check console for any JavaScript errors
- Ensure all links and paths are correct before deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Cesar Muñoz Ocampo**
- Email: cesar_munozocampo@hotmail.com
- GitHub: [cesarmunozocampoxD](https://github.com/cesarmunozocampoxD)
- LinkedIn: [developer-cesar-munoz-ocampo](https://www.linkedin.com/in/developer-cesar-munoz-ocampo/)

---

⭐ **Star this repository if you found it helpful!**
