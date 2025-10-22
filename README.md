**# Portfolio Website**

A modern, responsive portfolio website built to showcase projects, blog posts, and professional experience.

**## Features**

- Clean and minimal design
- Responsive layout for all devices
- Project showcase with detailed descriptions
- Blog section for articles and thoughts
- Newsletter subscription
- Smooth navigation and animations
- Fast page loads and optimized performance

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS / CSS Modules
- **Deployment:** Vercel

## Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/your-portfolio.git](https://github.com/VasuS609/Vasu-Sahu.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create environment variables (if needed)
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── public/              # Static assets (images, fonts)
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Next.js pages and API routes
│   ├── styles/         # CSS/styling files
│   ├── data/           # JSON data for projects and posts
│   └── utils/          # Helper functions
├── package.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint for code quality

## Customization

### Adding Projects

Edit `src/data/projects.json` with your project details:
```json
{
  "title": "Project Name",
  "description": "Project description",
  "image": "/path/to/image.jpg",
  "tech": ["React", "Node.js"],
  "links": {
    "github": "https://github.com/...",
    "live": "https://..."
  }
}
```

### Adding Blog Posts

Create a new markdown file in `src/content/blog/` with frontmatter:
```markdown
---
title: "Post Title"
date: "2025-01-15"
excerpt: "Brief description"
---

Your content here...
```

### Styling

- Modify colors and themes in `tailwind.config.js`
- Update global styles in `src/styles/globals.css`
- Component-specific styles in respective component files

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy

### Other Platforms

- **Netlify:** Connect your repository and configure build settings
- **GitHub Pages:** Use `next export` for static site generation

## Performance Optimization

- Images are optimized using Next.js Image component
- Code splitting for faster initial load
- Lazy loading for below-the-fold content
- Minified CSS and JavaScript in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Website: https://t.co/VmEtDQqb8A
- LinkedIn: www.linkedin.com/in/vasu-sahu-s2ep7
  
## Acknowledgments

- Design inspiration from various developer portfolios
- Icons from [Lucide Icons](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---
