# Johnson Takashi's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional layout with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js for optimal performance and SEO
- **Interactive**: Smooth animations and hover effects
- **Sections**:
  - Hero section with dynamic role animation
  - About section with personal photo placeholder
  - Skills section with interactive categories
  - Projects showcase with filtering
  - Contact form with social links

## 🚀 Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Adding Your Photos

### Profile Photo
1. Add your profile photo to `/public/images/` as `johnson-takashi.jpg`
2. Update the photo in `src/components/About.tsx`:
   ```jsx
   // Replace the placeholder div with:
   <img 
     src="/images/johnson-takashi.jpg" 
     alt="Johnson Takashi"
     className="w-full h-full object-cover"
   />
   ```

### Project Screenshots
1. Add project screenshots to `/public/images/` (e.g., `project1.jpg`, `project2.jpg`, etc.)
2. Update the project image URLs in `src/components/Projects.tsx`

## 🎨 Customization

### Personal Information
Edit the following files to update your information:

- **Name & Title**: `src/components/Hero.tsx`
- **About Content**: `src/components/About.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Contact Info**: `src/components/Contact.tsx`

### Social Links
Update your social media links in `src/components/Contact.tsx`:
```jsx
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: // GitHub icon
  },
  // ... other social links
]
```

### Colors & Styling
- Main gradient colors can be changed in `src/app/globals.css`
- Component styling uses Tailwind CSS classes

## 📦 Deployment

### Vercel (Recommended - Free)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with default settings

### Netlify (Free)
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `out`

### Manual Build
```bash
npm run build
npm start
```

## 🛠 Built With

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management
- **Custom CSS** - Animations and effects

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 SEO Features

- Optimized metadata
- OpenGraph tags
- Semantic HTML structure
- Fast loading times
- Mobile-first design

## 📧 Contact Form

The contact form is ready to use but needs a backend service to handle form submissions. You can:

1. Use a service like [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/)
2. Build a custom API endpoint
3. Use serverless functions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Johnson Takashi**