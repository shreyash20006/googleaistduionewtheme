# TGPCOP NOTES - Premium Shopify Theme

A fully-featured, mobile-responsive Shopify theme designed specifically for **TGPCOP NOTES** - a premium pharmacy educational ecommerce store selling digital notes, handwritten PDFs, PYQs, MCQs, and semester study material for B.Pharmacy students.

## 🎨 Theme Features

### Design & UI
- **Modern Medical-Tech Aesthetic** - Clean, professional design tailored for educational content
- **Premium Glassmorphism Effects** - Modern glass-card designs throughout
- **Smooth Animations** - Fade-ins, hover effects, and transitions
- **Mobile-First Responsive** - Optimized for all devices
- **Student-Focused Layout** - Easy navigation and clear information hierarchy

### Brand Colors
- Deep Navy Blue: `#072B6B`
- Pharma Green: `#2E9E36`
- White: `#FFFFFF`
- Light Background: `#F5F8FB`
- Dark Text: `#1E293B`
- Accent Green Hover: `#41C94B`

## 📁 Theme Structure

```
tgpcop-notes-shopify-theme/
├── layout/
│   └── theme.liquid              # Main theme layout
├── sections/
│   ├── announcement-bar.liquid   # Top announcement banner
│   ├── header.liquid             # Sticky navigation header
│   ├── hero-banner.liquid        # Homepage hero section
│   ├── semester-categories.liquid # Semester navigation cards
│   ├── featured-products.liquid  # Product showcase sections
│   ├── testimonials.liquid       # Student reviews carousel
│   ├── faq.liquid                # FAQ accordion
│   ├── footer.liquid             # Premium footer
│   ├── mobile-bottom-nav.liquid  # Mobile navigation bar
│   └── floating-whatsapp.liquid  # WhatsApp support button
├── snippets/
│   ├── product-card.liquid       # Reusable product card
│   ├── product-card-placeholder.liquid
│   └── meta-tags.liquid          # SEO meta tags
├── templates/
│   ├── index.json                # Homepage template
│   ├── product.liquid            # Product page template
│   └── collection.liquid         # Collection page template
├── assets/
│   └── global.js                 # Global JavaScript
├── config/
│   └── settings_schema.json      # Theme settings
└── locales/                      # Translation files

```

## 🚀 Installation

### Method 1: Upload to Shopify

1. **Compress the theme folder** into a ZIP file
2. Go to your Shopify Admin → **Online Store** → **Themes**
3. Click **Upload theme**
4. Select the ZIP file and upload
5. Once uploaded, click **Customize** to configure

### Method 2: Shopify CLI (Recommended for Development)

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd tgpcop-notes-shopify-theme

# Login to Shopify
shopify login

# Push theme to your store
shopify theme push

# Or start development server
shopify theme dev
```

## ⚙️ Configuration

### 1. Theme Settings

Navigate to **Customize Theme** and configure:

#### Colors
- Customize brand colors to match your preferences
- All colors are editable from Theme Settings

#### Typography
- Choose from Google Fonts
- Separate settings for headings and body text

#### Logo & Branding
- Upload your logo (recommended: 150-200px width)
- Add favicon (32x32px)

#### Social Media
- Add links to Facebook, Instagram, YouTube, Telegram
- Configure WhatsApp number for floating button

#### Contact Information
- Email address
- Phone number
- Physical address

### 2. Navigation Menus

Create these menus in **Navigation**:

#### Main Menu
- Home
- Semester 1-8 (with dropdowns for subjects)
- Combo Packs
- PYQs
- MCQs
- About Us
- Contact

#### Footer Menu
- About Us
- Privacy Policy
- Terms of Service
- Refund Policy
- Contact Support

### 3. Collections

Create collections for:
- **Semester 1** through **Semester 8**
- **Bestsellers**
- **Latest Uploads**
- **Combo Packs**
- **Handwritten Notes**
- **PYQs (Previous Year Questions)**
- **MCQs**

### 4. Product Setup

For each product, configure:

#### Product Information
- Title (e.g., "B.Pharm 1st Semester Complete Notes")
- Description (detailed content overview)
- Price and compare-at price (for discounts)
- Vendor (subject or category)

#### Product Tags
Add relevant tags:
- `bestseller` - Shows bestseller badge
- `new` - Shows new badge
- `instant-download` - Shows instant PDF badge
- Semester tags: `semester-1`, `semester-2`, etc.
- Subject tags: `pharmaceutics`, `pharmacology`, etc.

#### Product Images
- Main product image (recommended: 800x800px)
- Additional preview images
- Use clear, high-quality images

## 📱 Sections Overview

### Announcement Bar
- Customizable background and text colors
- Optional icon
- Link to promotion/collection
- Closeable with localStorage memory

### Header
- Sticky navigation
- Search functionality
- Account and cart icons
- Mobile-responsive hamburger menu
- Dropdown support for nested menus

### Hero Banner
- Editable heading and subheading
- Two CTA buttons
- Optional hero image
- Gradient background (customizable colors)
- Floating feature badges
- Animated decorative elements

### Semester Categories
- 8 customizable semester cards
- Icon, title, description for each
- Product count display
- Hover animations
- Links to collections

### Featured Products
- Dynamic product loading from collections
- Adjustable product count (2-12)
- Optional "View All" button
- Responsive grid layout

### Product Card (Snippet)
- Product image with hover zoom
- Multiple badge support (discount, bestseller, new, instant)
- Star ratings
- Price with compare-at-price
- Feature list
- Quick view button
- Add to cart functionality

### Testimonials
- Carousel slider with auto-play
- Star ratings
- Author image/placeholder
- Verified purchase badge
- Navigation arrows and dots
- Responsive (3 → 2 → 1 columns)

### FAQ
- Accordion-style questions
- Smooth expand/collapse animations
- Optional contact CTA
- Fully customizable Q&A blocks

### Footer
- Multi-column layout
- Logo and description
- Social media links
- Newsletter signup
- Multiple link lists
- Payment icons
- Copyright information

### Mobile Bottom Navigation
- Fixed bottom bar (mobile only)
- 5 navigation items
- Cart count badge
- Featured center button
- Active state indicators

### Floating WhatsApp
- Sticky WhatsApp button
- Customizable message
- Pulse animation
- Responsive (text hides on small screens)

## 🎯 Customization Guide

### Adding New Sections

1. Create a new `.liquid` file in `/sections/`
2. Add Liquid markup and styles
3. Include schema at the bottom:

```liquid
{% schema %}
{
  "name": "Section Name",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Default Text"
    }
  ],
  "presets": [
    {
      "name": "Section Name"
    }
  ]
}
{% endschema %}
```

### Modifying Colors

Edit in Theme Settings or directly in `layout/theme.liquid`:

```css
:root {
  --color-navy: #072B6B;
  --color-green: #2E9E36;
  /* Add more custom properties */
}
```

### Adding Custom Fonts

1. Go to Theme Settings → Typography
2. Select fonts from Google Fonts
3. Or add custom fonts in `layout/theme.liquid`

## 🛠️ Development

### Prerequisites
- Node.js 14+
- Shopify CLI
- Shopify Partner account

### Local Development

```bash
# Start development server
shopify theme dev

# Watch for changes
shopify theme dev --live-reload

# Pull theme from store
shopify theme pull

# Push theme to store
shopify theme push
```

### Best Practices

1. **Test on Multiple Devices** - Use Chrome DevTools device emulation
2. **Optimize Images** - Compress images before uploading
3. **Use Liquid Filters** - Leverage Shopify's built-in filters
4. **Semantic HTML** - Use proper HTML5 elements
5. **Accessibility** - Include ARIA labels and alt text
6. **Performance** - Lazy load images, minimize JavaScript

## 📊 Performance Optimization

### Image Optimization
- Use Shopify's `img_url` filter with appropriate sizes
- Implement lazy loading (included in theme)
- Use WebP format when possible

### JavaScript
- Minimal dependencies
- Async/defer loading
- Event delegation for better performance

### CSS
- Critical CSS inlined in `<head>`
- Non-critical CSS loaded asynchronously
- CSS custom properties for theming

## 🔒 Security

- CSRF protection via Shopify forms
- Secure payment processing (handled by Shopify)
- XSS prevention through Liquid escaping
- HTTPS enforced by Shopify

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data ready
- Mobile-friendly (Google ranking factor)
- Fast loading times
- Clean URLs

## 🐛 Troubleshooting

### Products Not Showing
- Check collection is assigned in section settings
- Verify products are published
- Check product availability

### Styles Not Applying
- Clear browser cache
- Check CSS file is loading
- Verify custom properties are defined

### Cart Not Updating
- Check JavaScript console for errors
- Verify Shopify Ajax API is accessible
- Test with browser console: `fetch('/cart.js')`

## 📞 Support

For theme support and customization:
- Email: support@tgpcopnotes.com
- Documentation: [Theme Docs]
- Shopify Community: [Shopify Forums]

## 📄 License

This theme is proprietary and licensed for use by TGPCOP NOTES only.

## 🎓 Credits

**Designed & Developed for TGPCOP NOTES**
- Premium B.Pharmacy Study Materials
- Trusted by 10,000+ Students Across India

---

**Version:** 1.0.0  
**Last Updated:** 2026  
**Shopify Theme Version:** 2.0 (JSON templates)
