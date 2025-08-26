# Oceanica Crop Science Website

A modern, responsive, **bilingual (English/Urdu)** website for Oceanica Crop Science built with Next.js 15 and Tailwind CSS.

## 🌍 **Bilingual Features**

- **Dual Language Support**: Complete English and Urdu translations
- **Language Switching**: Easy toggle between English and Urdu
- **RTL Support**: Full right-to-left layout support for Urdu
- **Localized Content**: All text content available in both languages
- **Dynamic Logos**: Automatic logo switching based on language

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for agricultural businesses
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Navigation**: Dropdown menus for crops and products
- **Comprehensive Pages**: All major sections covered as requested
- **Performance Optimized**: Built with Next.js 15 for fast loading and SEO
- **Bilingual Support**: Full English and Urdu language support

## 📁 Project Structure

```
oceanica-frontend/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles and Tailwind CSS
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page (landing page)
│   ├── i18n/                    # Internationalization
│   │   ├── context.tsx          # Language context provider
│   │   └── locales/             # (legacy) Language files – now in public/i18n
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
│   ├── Footer.tsx              # Footer component
│   └── LanguageSwitcher.tsx    # Language switching component
├── public/                      # Static assets
│   ├── i18n/                   # Translation JSONs served statically
│   │   ├── en.json             # English translations
│   │   └── ur.json             # Urdu translations
│   ├── logo-en.png             # English logo (required)
│   ├── logo-ur.png             # Urdu logo (required)
│   └── README.md               # Asset documentation
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
└── tsconfig.json               # TypeScript configuration
```

## 🛠️ Technologies Used

- **Next.js 15**: React framework with app router
- **React 19**: Latest React features and hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **i18n**: Internationalization support

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

3. **Add Logo Files**
   Place your logo files in the `public/` folder:
   - `logo-en.png` - English version
   - `logo-ur.png` - Urdu version

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Language Support

### Available Languages
- **English (en)**: Default language
- **Urdu (ur)**: Full RTL support with complete translations

### Language Switching
- Click the language switcher in the top navigation
- Automatically switches logos and content
- Remembers user preference in localStorage
- Updates document direction (LTR/RTL)

### Translation Files
- **English**: `app/i18n/locales/en.json`
- **Urdu**: `app/i18n/locales/ur.json`

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
- **RTL Support**: Full right-to-left layout for Urdu

## 🔧 Customization

### Languages
Add new languages by:
1. Creating new locale file in `app/i18n/locales/`
2. Adding language to the context
3. Updating the language switcher

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
- Update translations in locale files

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
- Full bilingual support with RTL layout
- Automatic logo switching based on language

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly in both languages
5. Submit a pull request

## 📄 License

This project is created for Oceanica Crop Science. All rights reserved.

## 🆘 Support

For any questions or issues, please contact the development team or refer to the Next.js and Tailwind CSS documentation.

---

**Oceanica Crop Science** - Growing Tomorrow's Food Security 🌱

*Available in English and Urdu / انگریزی اور اردو میں دستیاب*
