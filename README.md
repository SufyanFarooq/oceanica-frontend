# Oceanica Crop Science Website

A modern, responsive website for Oceanica Crop Science built with Next.js 14 and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for agricultural businesses
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Navigation**: Dropdown menus for crops and products
- **Comprehensive Pages**: All major sections covered as requested
- **Performance Optimized**: Built with Next.js for fast loading and SEO

## 📁 Project Structure

```
oceanica-frontend/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles and Tailwind CSS
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page (landing page)
│   ├── crop-solutions/          # Crop solutions section
│   │   ├── page.tsx            # Main crop solutions page
│   │   ├── corn/               # Individual crop pages
│   │   ├── wheat/
│   │   ├── rice/
│   │   ├── sugarcane/
│   │   ├── potato/
│   │   └── cotton/
│   ├── products/                # Products section
│   │   └── search/crop-protection/
│   │       └── page.tsx        # Main products page
│   ├── naya-savera/            # Naya Savera page
│   ├── stewardship/            # Sustainability - Stewardship
│   ├── growth-plan/            # Sustainability - Good Growth Plan
│   ├── about-us/               # About Us page
│   └── contact-us/             # Contact Us page
├── components/                   # Reusable components
│   ├── Navbar.tsx              # Navigation component
│   └── Footer.tsx              # Footer component
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
└── tsconfig.json               # TypeScript configuration
```

## 🛠️ Technologies Used

- **Next.js 14**: React framework with app router
- **React 18**: Latest React features and hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oceanica-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Created

### 🏠 Landing Page (`/`)
- Hero section with company introduction
- Features highlighting Oceanica's strengths
- Crop solutions overview
- Call-to-action sections

### 🌾 Crop Solutions (`/crop-solutions`)
- Main crop solutions landing page
- Individual crop pages:
  - Corn (`/crop-solutions/corn`)
  - Wheat (`/crop-solutions/wheat`)
  - Rice (`/crop-solutions/rice`)
  - Sugarcane (`/crop-solutions/sugarcane`)
  - Potato (`/crop-solutions/potato`)
  - Cotton (`/crop-solutions/cotton`)

### 🛡️ Products (`/products/search/crop-protection`)
- Main crop protection products page
- Product categories (Herbicide, Insecticide, Fungicide, Seedcare)
- Featured products showcase

### 🌅 Naya Savera (`/naya-savera`)
- Youth empowerment and community development
- Training programs and initiatives
- Success stories

### 🌱 Sustainability
- **Stewardship** (`/stewardship`): Environmental responsibility and safe use
- **Good Growth Plan** (`/growth-plan`): Sustainable development roadmap

### ℹ️ About Us (`/about-us`)
- Company mission and values
- History and milestones
- Leadership team

### 📞 Contact Us (`/contact-us`)
- Contact form
- Office information
- Department contacts

## 🎨 Design Features

- **Color Scheme**: Professional green and blue theme suitable for agriculture
- **Typography**: Clean, readable fonts with proper hierarchy
- **Icons**: Relevant agricultural and business icons
- **Animations**: Subtle hover effects and transitions
- **Responsive**: Mobile-first design approach

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
    // ... more shades
  }
}
```

### Content
- Update company information in respective page components
- Modify contact details in `ContactUs` component
- Change product information in products pages

## 📦 Build and Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy
The site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- All pages are fully responsive
- Navigation includes dropdown menus for crops and products
- Contact form is ready for backend integration
- SEO-friendly with proper meta tags and structure
- Performance optimized with Next.js features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Oceanica Crop Science. All rights reserved.

## 🆘 Support

For any questions or issues, please contact the development team or refer to the Next.js and Tailwind CSS documentation.

---

**Oceanica Crop Science** - Growing Tomorrow's Food Security 🌱
