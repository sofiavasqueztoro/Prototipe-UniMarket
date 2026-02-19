
## UniMarket – University Second-Hand Clothing Platform

A full multi-page UI prototype using the UniMarket brand colors (Verde Salvia #8DA773, Verde Profundo #0C3B2E, Beige Cálido #BB8A52, Mostaza #FFBA08) and Poppins font, with simulated/static data throughout.

---

### Design System & Branding
- Apply the 4-color palette globally via CSS variables
- Use Poppins as the primary font (imported from Google Fonts)
- Clean, sustainable aesthetic with earthy tones and rounded elements
- Clothing hanger SVG logo icon in the header

---

### Page 1 – Home / Landing
- **Hero section**: Bold headline ("Your Campus, Your Closet"), sustainability tagline, and two CTA buttons ("Browse Items" / "Start Selling")
- **How It Works**: 3-step visual (Upload photo → AI tags your item → Get discovered)
- **Featured Listings**: Horizontal scroll card row with sample clothing items (image, name, size badge, price, and condition tag)
- **Mascot teaser**: Small banner introducing "Eco" the mascot with a sustainability message
- **Impact counter**: Animated stats (items exchanged, CO₂ saved, students involved)

---

### Page 2 – Browse & Discover
- **Top filter bar**: Category (Tops, Bottoms, Jackets, Accessories), Size (XS–XL), Color swatches, Condition, and a Sort dropdown
- **Search bar** with a camera icon (visual search simulation)
- **Listing grid**: Responsive card grid showing clothing items with photo, name, auto-generated AI tags (size, color, style, category), price, seller rating, and a heart/save button
- **Sidebar** (on desktop): Quick filter panel
- **"Similar Items"** visual suggestion row below selected item preview

---

### Page 3 – Item Detail
- **Photo gallery**: Main image + thumbnail row
- **AI-generated tag chips**: Size, Color, Category, Style, Condition (auto-tagged badge)
- **Seller card**: Profile photo, name, university, rating, number of items sold, and a trust badge ("Verified Seller")
- **Quality validation indicator**: AI confidence score shown as a progress bar ("AI Quality Score: 87% – Good condition")
- **Action buttons**: "Message Seller" and "Save Item" 
- **Similar items section** at the bottom

---

### Page 4 – Sell / Upload
- **Photo upload area**: Drag-and-drop zone with a camera icon
- **AI Auto-Tag simulation**: After "uploading" a photo, a loading animation plays and tags appear automatically (size, color, category, style) - pre-filled fields that the user can edit
- **Manual form fields**: Title, description, price, condition selector, preferred exchange type (sell / donate / swap)
- **Preview card**: Live preview of how the listing will look
- **Publish button** with a sustainability tip shown on submission

---

### Page 5 – Profile & Gamification
- **User card**: Avatar, name, university, member since date
- **Mascot section ("Eco")**: An illustrated mascot character with a speech bubble giving personalized feedback ("You've sold 3 items this month! 🌱 Keep it up!")
- **Sustainability Level bar**: Progress bar showing level (e.g. "Level 4 – Eco Explorer") with XP points
- **Badges & rewards**: Grid of earned badges (First Sale, 5 Items Saved, Eco Hero, etc.) with locked ones shown grayed out
- **Activity feed**: Recent actions (sold, bought, donated) with points earned per action
- **My Listings tab**: Grid of the user's active listings with edit/delete options

---

### Navigation
- **Top navbar** on all pages: Logo, navigation links (Home, Browse, Sell, Profile), notification bell icon, and an avatar menu
- Active route highlighting with the Mostaza (#FFBA08) accent color
- Fully responsive layout (mobile-friendly)
