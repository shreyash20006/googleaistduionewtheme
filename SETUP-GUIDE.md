# TGPCOP NOTES - Complete Setup Guide

This guide will walk you through setting up your TGPCOP NOTES Shopify theme from scratch.

## 📋 Pre-Installation Checklist

- [ ] Shopify store created
- [ ] Store name: TGPCOP NOTES
- [ ] Domain configured
- [ ] Payment gateway setup
- [ ] Shipping settings configured
- [ ] Tax settings configured

## 🚀 Step 1: Theme Installation

### Option A: Upload via Shopify Admin (Easiest)

1. **Compress the theme folder**
   - Right-click on `tgpcop-notes-shopify-theme` folder
   - Select "Compress" or "Send to > Compressed folder"
   - Name it: `tgpcop-notes-theme.zip`

2. **Upload to Shopify**
   - Log in to your Shopify Admin
   - Go to **Online Store** → **Themes**
   - Click **Upload theme** button
   - Select your ZIP file
   - Wait for upload to complete

3. **Publish the theme**
   - Once uploaded, click **Publish** button
   - Or click **Customize** to configure first

### Option B: Shopify CLI (For Developers)

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd tgpcop-notes-shopify-theme

# Login to your store
shopify login --store your-store-name.myshopify.com

# Push theme to store
shopify theme push

# Or start development mode
shopify theme dev
```

## ⚙️ Step 2: Basic Configuration

### 2.1 Theme Settings

Click **Customize** on your theme, then configure:

#### Colors
```
Deep Navy Blue: #072B6B
Pharma Green: #2E9E36
White: #FFFFFF
Light Background: #F5F8FB
Dark Text: #1E293B
Accent Green: #41C94B
```

#### Logo
- Upload your logo (PNG format, transparent background)
- Recommended size: 150-200px width
- Set logo width: 150px

#### Favicon
- Upload 32x32px PNG or ICO file
- Should be your brand icon

### 2.2 Social Media Links

Go to **Theme Settings** → **Social Media**:

```
Facebook: https://facebook.com/tgpcopnotes
Instagram: https://instagram.com/tgpcopnotes
YouTube: https://youtube.com/@tgpcopnotes
Telegram: https://t.me/tgpcopnotes
WhatsApp: 919876543210 (format: country code + number, no spaces)
```

### 2.3 Contact Information

```
Email: support@tgpcopnotes.com
Phone: +91 98765 43210
Address: Your business address
```

## 📱 Step 3: Navigation Setup

### 3.1 Create Main Menu

Go to **Navigation** → **Main Menu**:

```
Home (/)
├─ Semester 1 (/collections/semester-1)
│  ├─ Pharmaceutics
│  ├─ Pharmaceutical Chemistry
│  └─ Pharmacognosy
├─ Semester 2 (/collections/semester-2)
├─ Semester 3 (/collections/semester-3)
├─ Semester 4 (/collections/semester-4)
├─ Semester 5 (/collections/semester-5)
├─ Semester 6 (/collections/semester-6)
├─ Semester 7 (/collections/semester-7)
├─ Semester 8 (/collections/semester-8)
├─ Combo Packs (/collections/combo-packs)
├─ PYQs (/collections/pyqs)
├─ MCQs (/collections/mcqs)
├─ About Us (/pages/about)
└─ Contact (/pages/contact)
```

### 3.2 Create Footer Menu

Go to **Navigation** → **Footer Menu**:

```
About Us (/pages/about)
Privacy Policy (/pages/privacy-policy)
Terms of Service (/pages/terms-of-service)
Refund Policy (/pages/refund-policy)
Shipping Policy (/pages/shipping-policy)
Contact Support (/pages/contact)
```

## 📦 Step 4: Collections Setup

### 4.1 Create Collections

Go to **Products** → **Collections** → **Create collection**

Create these collections:

#### Semester Collections
```
1. Semester 1
   - Handle: semester-1
   - Description: Complete notes for B.Pharm 1st Semester

2. Semester 2
   - Handle: semester-2
   - Description: Complete notes for B.Pharm 2nd Semester

... (Continue for all 8 semesters)
```

#### Special Collections
```
1. Bestsellers
   - Handle: bestsellers
   - Type: Automated
   - Condition: Product tag equals "bestseller"

2. Latest Uploads
   - Handle: latest-uploads
   - Type: Automated
   - Sort: Created date (newest first)

3. Combo Packs
   - Handle: combo-packs
   - Description: Save more with semester combo packs

4. Handwritten Notes
   - Handle: handwritten-notes
   - Type: Automated
   - Condition: Product tag equals "handwritten"

5. PYQs
   - Handle: pyqs
   - Description: Previous Year Questions

6. MCQs
   - Handle: mcqs
   - Description: Multiple Choice Questions for practice
```

## 📝 Step 5: Product Setup

### 5.1 Product Template

For each product, use this structure:

#### Example Product: "B.Pharm 1st Semester Complete Notes"

**Basic Information:**
```
Title: B.Pharm 1st Semester Complete Notes
Description: 
Complete handwritten notes covering all subjects:
- Pharmaceutics-I
- Pharmaceutical Chemistry-I
- Pharmacognosy-I
- Human Anatomy & Physiology
- Social Pharmacy

✅ 500+ pages of content
✅ Chapter-wise organized
✅ Important questions included
✅ Diagrams and flowcharts
✅ Instant PDF download
✅ Free lifetime updates

Price: ₹999
Compare at price: ₹1499
```

**Product Organization:**
```
Vendor: B.Pharm Semester 1
Product Type: Digital Notes
Collections: 
  - Semester 1
  - Bestsellers
  - Handwritten Notes
```

**Tags:**
```
semester-1, bestseller, handwritten, instant-download, complete-notes
```

**Images:**
- Upload product cover image (800x800px minimum)
- Add preview pages (3-5 images)
- Use high-quality, clear images

### 5.2 Digital Product Setup

Since you're selling digital products:

1. **Install Digital Downloads App**
   - Go to Shopify App Store
   - Search "Digital Downloads"
   - Install the free Shopify app

2. **Configure Digital Downloads**
   - For each product, attach PDF files
   - Set download limits (unlimited recommended)
   - Enable automatic email delivery

### 5.3 Product Variants (Optional)

If offering different formats:
```
Variant 1: PDF Only - ₹999
Variant 2: PDF + Video Lectures - ₹1499
Variant 3: Complete Package - ₹1999
```

## 🎨 Step 6: Homepage Customization

Click **Customize** → **Homepage**

### 6.1 Announcement Bar
```
Text: "🎉 Get 20% OFF on All Semester Notes | Use Code: TGPCOP20"
Background: #2E9E36 (Green)
Text Color: #FFFFFF (White)
Link: /collections/all
Link Text: "Shop Now"
```

### 6.2 Hero Banner
```
Badge Text: "🎓 Premium B.Pharmacy Notes"
Heading: "Master B.Pharmacy with Premium Study Notes"
Subheading: "Get handwritten notes, PYQs, MCQs, and complete semester material. Trusted by 10,000+ pharmacy students across India."
Button 1 Text: "Browse Notes"
Button 1 Link: /collections/all
Button 2 Text: "View Combo Packs"
Button 2 Link: /collections/combo-packs
Show Features: ✓
Show Image: ✓
Upload Hero Image: (Upload a relevant image)
```

### 6.3 Semester Categories

Add 8 blocks (one for each semester):

**Block 1:**
```
Icon: 📚
Title: B.Pharm 1st Semester
Description: Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy
Product Count: 50+
Link: /collections/semester-1
```

**Block 2:**
```
Icon: 🔬
Title: B.Pharm 2nd Semester
Description: Human Anatomy, Biochemistry, Pathophysiology
Product Count: 45+
Link: /collections/semester-2
```

... (Continue for all 8 semesters)

### 6.4 Featured Products - Bestsellers
```
Heading: "Bestselling Notes"
Subheading: "Most popular study materials chosen by students"
Collection: bestsellers
Products to Show: 8
Show View All: ✓
Button Text: "View All Notes"
```

### 6.5 Featured Products - Latest
```
Heading: "Latest Uploads"
Subheading: "Newly added notes and study materials"
Collection: latest-uploads
Products to Show: 8
Show View All: ✓
Button Text: "View All New Notes"
```

### 6.6 Testimonials

Add 5-6 testimonial blocks:

**Block 1:**
```
Review Text: "These notes helped me score 85% in my exams! The handwritten format makes it easy to understand complex topics. Highly recommended for all pharmacy students."
Author Name: "Priya Sharma"
Author Title: "B.Pharm 3rd Year Student"
Verified Purchase: ✓
```

**Block 2:**
```
Review Text: "Best investment for my pharmacy education. Clear, concise, and covers everything. The PYQs section is especially helpful for exam preparation."
Author Name: "Rahul Verma"
Author Title: "B.Pharm 2nd Year Student"
Verified Purchase: ✓
```

... (Add more testimonials)

### 6.7 FAQ Section

Add common questions:

**Q1:**
```
Question: "How do I download the notes after purchase?"
Answer: "After completing your purchase, you'll receive an instant download link via email. You can also access your purchased notes from your account dashboard anytime."
```

**Q2:**
```
Question: "Are the notes updated regularly?"
Answer: "Yes! We regularly update our notes based on the latest syllabus and exam patterns. All updates are free for existing customers."
```

**Q3:**
```
Question: "Can I get a refund if I'm not satisfied?"
Answer: "We offer a 7-day money-back guarantee. If you're not satisfied with your purchase, contact our support team for a full refund."
```

**Q4:**
```
Question: "What format are the notes in?"
Answer: "All notes are provided in high-quality PDF format, optimized for both digital viewing and printing."
```

**Q5:**
```
Question: "Do you offer combo packs or discounts?"
Answer: "Yes! We offer semester-wise combo packs at discounted prices. Check our Combo Packs section for the best deals."
```

## 📄 Step 7: Pages Setup

Create these pages in **Online Store** → **Pages**:

### About Us
```
Title: About Us
Content: 
Welcome to TGPCOP NOTES - your trusted partner in B.Pharmacy education.

We are dedicated to providing high-quality, comprehensive study materials for pharmacy students across India. Our handwritten notes, PYQs, and MCQs are carefully curated by experienced pharmacy professionals and educators.

Our Mission:
To make quality pharmacy education accessible and affordable for every student.

Why Choose Us:
✅ Comprehensive Coverage
✅ Expert-Curated Content
✅ Regular Updates
✅ Affordable Pricing
✅ 24/7 Support
✅ Trusted by 10,000+ Students
```

### Contact
```
Title: Contact Us
Content:
Have questions? We're here to help!

📧 Email: support@tgpcopnotes.com
📱 Phone: +91 98765 43210
💬 WhatsApp: +91 98765 43210

Business Hours:
Monday - Saturday: 9:00 AM - 6:00 PM
Sunday: Closed

[Add contact form here]
```

### Privacy Policy, Terms, Refund Policy
Use Shopify's policy generator:
- Go to **Settings** → **Policies**
- Generate policies using templates
- Customize as needed

## 🔧 Step 8: Apps & Integrations

### Essential Apps

1. **Digital Downloads** (Free)
   - For delivering PDF files

2. **SEO Manager** (Free/Paid)
   - Optimize meta tags and descriptions

3. **Product Reviews** (Free/Paid)
   - Collect and display customer reviews
   - Recommended: Judge.me or Loox

4. **Email Marketing**
   - Shopify Email (Free)
   - Or Klaviyo (Advanced)

5. **WhatsApp Chat**
   - SuperLemon or similar
   - Or use built-in floating button

## 🎯 Step 9: Marketing Setup

### 9.1 Discount Codes

Go to **Discounts** → **Create discount**:

```
Code: TGPCOP20
Type: Percentage
Value: 20%
Applies to: All products
Minimum purchase: ₹500
Usage limit: Unlimited
Active dates: Set as needed
```

### 9.2 Email Templates

Customize in **Settings** → **Notifications**:

- Order confirmation
- Shipping confirmation
- Order cancellation
- Refund notification

### 9.3 Abandoned Cart

Enable in **Settings** → **Checkout**:
- Send reminder after 1 hour
- Send second reminder after 24 hours

## ✅ Step 10: Testing

### Pre-Launch Checklist

- [ ] Test product purchase flow
- [ ] Verify digital download delivery
- [ ] Test on mobile devices
- [ ] Check all navigation links
- [ ] Test search functionality
- [ ] Verify cart functionality
- [ ] Test checkout process
- [ ] Check email notifications
- [ ] Test discount codes
- [ ] Verify payment gateway
- [ ] Check WhatsApp button
- [ ] Test contact forms
- [ ] Review on different browsers

### Test Order

1. Create a test product (₹1)
2. Complete full purchase
3. Verify email delivery
4. Check digital download
5. Test refund process

## 🚀 Step 11: Launch

### Final Steps

1. **Remove password protection**
   - Go to **Online Store** → **Preferences**
   - Uncheck "Enable password"

2. **Set up Google Analytics**
   - Get tracking ID from Google Analytics
   - Add to **Online Store** → **Preferences**

3. **Submit sitemap to Google**
   - URL: `yourstore.com/sitemap.xml`
   - Submit in Google Search Console

4. **Announce launch**
   - Social media posts
   - Email to subscribers
   - WhatsApp groups

## 📊 Post-Launch

### Week 1
- Monitor sales and traffic
- Check for any errors
- Respond to customer inquiries
- Gather initial feedback

### Ongoing
- Add new products regularly
- Update existing content
- Monitor analytics
- Optimize based on data
- Engage with customers
- Run promotions

## 🆘 Support

Need help? Contact:
- Email: support@tgpcopnotes.com
- WhatsApp: +91 98765 43210
- Shopify Support: help.shopify.com

---

**Congratulations! Your TGPCOP NOTES store is ready to launch! 🎉**
