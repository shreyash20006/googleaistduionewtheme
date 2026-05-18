# TGPCOP NOTES - Dynamic Shopify Theme

## 🎯 Automatic Integration with Your Existing Store

This theme is specifically designed to **automatically connect** to your existing TGPCOP NOTES Shopify store data. No manual product setup required!

### ✅ What This Theme Automatically Pulls From Your Store:

- ✅ **All existing products** - Displays your uploaded products dynamically
- ✅ **All collections** - Shows your created collections automatically
- ✅ **Product images** - Uses your uploaded product images
- ✅ **Pricing & discounts** - Displays current prices and compare-at prices
- ✅ **Product tags** - Shows badges based on your product tags
- ✅ **Inventory status** - Shows "Sold Out" for unavailable products
- ✅ **Cart functionality** - Integrates with Shopify cart system
- ✅ **Checkout** - Uses your configured Shopify checkout
- ✅ **Customer accounts** - Shows login/account status
- ✅ **Search** - Shopify predictive search integration
- ✅ **Navigation menus** - Uses your configured Shopify menus

## 🚀 Key Features

### Dynamic Sections Created:

1. **Dynamic Header** (`dynamic-header.liquid`)
   - Automatically pulls navigation from your Shopify menu
   - Shows real-time cart count
   - Customer login/account integration
   - Shopify predictive search

2. **Dynamic Featured Collections** (`dynamic-featured-collections.liquid`)
   - Automatically displays your existing collections
   - Shows collection images and product counts
   - Links to your collection pages

3. **Dynamic Bestsellers** (`dynamic-bestsellers.liquid`)
   - Pulls products from any collection you specify
   - Or shows best-selling products from all collections
   - Displays real product data (images, prices, titles)

4. **Dynamic Product Card** (`dynamic-product-card.liquid`)
   - Automatically shows:
     - Product images from your store
     - Current prices and discounts
     - Product tags as badges
     - Vendor/category information
     - Add to cart functionality
     - Stock status

## 📦 Installation

### Step 1: Upload Theme

1. **Compress this folder** into a ZIP file
2. Go to Shopify Admin → **Online Store** → **Themes**
3. Click **Upload theme**
4. Select the ZIP file
5. Click **Publish** or **Customize**

### Step 2: Configure Sections

The theme will **automatically** pull your existing data, but you can customize:

#### Header Configuration:
- Upload your logo (or it will show your store name)
- Select which menu to use (default: main-menu)

#### Featured Collections:
- Add collection blocks to feature specific collections
- Or leave empty to auto-display all collections

#### Bestsellers:
- Select a specific collection (e.g., "Bestsellers")
- Or leave empty to show best-selling products from all collections
- Adjust number of products to show (2-16)

## 🎨 How It Works

### Automatic Product Display

```liquid
{%- for product in collection.products -%}
  {% render 'dynamic-product-card', product: product %}
{%- endfor -%}
```

This code automatically:
- Loops through YOUR existing products
- Displays product images YOU uploaded
- Shows prices YOU set
- Uses tags YOU created for badges
- Connects to YOUR Shopify cart

### Automatic Collection Display

```liquid
{%- for collection in collections -%}
  <a href="{{ collection.url }}">
    <img src="{{ collection.image | img_url: '600x' }}">
    <h3>{{ collection.title }}</h3>
    <p>{{ collection.products_count }} Products</p>
  </a>
{%- endfor -%}
```

This automatically:
- Shows YOUR collection names
- Displays YOUR collection images
- Shows actual product counts
- Links to YOUR collection pages

### Automatic Cart Integration

```liquid
<span class="cart-count">{{ cart.item_count }}</span>
```

This automatically:
- Shows current cart item count
- Updates in real-time
- Links to YOUR Shopify cart
- Uses YOUR checkout system

## 🏷️ Product Tag System

The theme automatically creates badges based on your product tags:

| Your Product Tag | Badge Displayed |
|-----------------|-----------------|
| `bestseller` or `best seller` | 🔥 Bestseller |
| `new` | ✨ New |
| `instant` or `pdf` | ⚡ Instant PDF |

**Example**: If you tag a product with "bestseller", it will automatically show a "🔥 Bestseller" badge.

## 💰 Automatic Discount Display

If you set a "Compare at price" in Shopify:
- The theme automatically calculates the discount percentage
- Shows the original price crossed out
- Displays the discount badge (e.g., "-20% OFF")

**Example**:
- Price: ₹799
- Compare at price: ₹999
- Result: Shows "-20% OFF" badge automatically

## 📱 Sections Included

### 1. Dynamic Header
- **File**: `sections/dynamic-header.liquid`
- **Pulls**: Navigation menu, cart count, customer status
- **Features**: Sticky header, search, mobile menu

### 2. Dynamic Featured Collections
- **File**: `sections/dynamic-featured-collections.liquid`
- **Pulls**: Your collections, collection images, product counts
- **Features**: Grid layout, hover effects, automatic linking

### 3. Dynamic Bestsellers
- **File**: `sections/dynamic-bestsellers.liquid`
- **Pulls**: Products from specified collection or all products
- **Features**: Product grid, add to cart, dynamic pricing

### 4. Dynamic Product Card (Snippet)
- **File**: `snippets/dynamic-product-card.liquid`
- **Pulls**: Product data, images, prices, tags, availability
- **Features**: Badges, ratings, quick view, add to cart

## 🔧 Customization Options

### Via Shopify Theme Editor:

1. **Header**:
   - Upload logo
   - Set logo width
   - Choose navigation menu

2. **Featured Collections**:
   - Add/remove collection blocks
   - Set heading and subheading
   - Toggle "View All" button

3. **Bestsellers**:
   - Select collection to display
   - Set number of products (2-16)
   - Customize heading text

### Via Product Tags:

Add these tags to your products in Shopify:
- `bestseller` - Shows bestseller badge
- `new` - Shows new badge
- `instant` or `pdf` - Shows instant PDF badge

### Via Collections:

Create these collections in Shopify (the theme will automatically find them):
- B.Pharm Notes
- Semester Wise
- PYQs
- Handwritten Notes
- Important Questions
- Practical Files
- MCQs

## 🎯 Recommended Setup

### 1. Collections to Create:

```
- Semester 1
- Semester 2
- Semester 3
- Semester 4
- Semester 5
- Semester 6
- Semester 7
- Semester 8
- Bestsellers (automated by best-selling)
- New Arrivals (automated by date)
- Handwritten Notes
- PYQs
- MCQs
- Combo Packs
```

### 2. Product Tags to Use:

```
- bestseller
- new
- instant
- pdf
- handwritten
- semester-1, semester-2, etc.
- pyq
- mcq
```

### 3. Navigation Menu Structure:

```
Main Menu:
├─ Home
├─ Semester 1
├─ Semester 2
├─ Semester 3
├─ Semester 4
├─ Semester 5
├─ Semester 6
├─ Semester 7
├─ Semester 8
├─ Combo Packs
├─ PYQs
├─ MCQs
└─ Contact
```

## 🔄 How Data Flows

```
Your Shopify Store
       ↓
   (Products, Collections, Cart)
       ↓
   Liquid Templates
       ↓
   Dynamic Sections
       ↓
   Rendered HTML
       ↓
   Customer Sees Your Data
```

## ✅ Testing Checklist

After installation, verify:

- [ ] Products display correctly
- [ ] Product images show up
- [ ] Prices are accurate
- [ ] Discounts calculate correctly
- [ ] Collections appear
- [ ] Navigation menu works
- [ ] Cart count updates
- [ ] Add to cart works
- [ ] Search functions
- [ ] Mobile menu works
- [ ] Customer login works

## 🆘 Troubleshooting

### Products Not Showing?
- Check that products are published
- Verify products are in the selected collection
- Ensure products have images

### Collections Not Appearing?
- Verify collections exist in Shopify
- Check collection handles match
- Ensure collections have products

### Cart Not Updating?
- Clear browser cache
- Check JavaScript console for errors
- Verify Shopify cart is enabled

### Badges Not Showing?
- Check product tags are spelled correctly
- Tags are case-insensitive
- Use exact tag names: `bestseller`, `new`, `instant`

## 📊 Performance

This theme is optimized for:
- Fast loading times
- Mobile responsiveness
- SEO best practices
- Shopify performance standards

## 🎓 Support

For theme support:
- Email: support@tgpcopnotes.com
- Check Shopify theme documentation
- Review Liquid documentation

## 📝 Version

- **Version**: 2.0.0 (Dynamic Edition)
- **Shopify Compatibility**: 2.0+
- **Last Updated**: 2026

---

**This theme automatically integrates with your existing Shopify store. No manual product setup required!** 🎉
