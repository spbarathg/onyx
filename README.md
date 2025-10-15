# ONYX - Premium Memecoin Signal AI

A premium single-page website for ONYX, an AI memecoin signal bot on Solana.

## Features

- **Light Minimal Design**: Clean grayscale aesthetic with bold typography
- **Fully Responsive**: Optimized for all devices
- **Smooth Animations**: Soft fade-in effects and transitions
- **Static Export**: No backend required, fully static website
- **Premium Grayscale**: Light background, dark text, professional appearance

## Tech Stack

- Next.js 14
- Tailwind CSS
- React 18

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder, ready for static hosting.

## Customization

### Update Telegram Link

Edit the Telegram link in `app/page.js`:

```javascript
<a href="https://t.me/YourTelegramBot" ...>
```

Replace `https://t.me/YourTelegramBot` with your actual Telegram bot link.

### 🎨 Change Fonts

**Current fonts:** Inter (body) + Poppins (headings)

To change fonts:

1. **Choose your fonts** from [Google Fonts](https://fonts.google.com)

2. **Update `app/globals.css`** - Replace the `@import` URL (line 8):
   ```css
   @import url('YOUR_GOOGLE_FONTS_URL_HERE');
   ```

3. **Update `tailwind.config.js`** - Change font names (lines 23-24):
   ```javascript
   fontFamily: {
     sans: ['YourBodyFont', 'system-ui', 'sans-serif'],      // Body text
     display: ['YourHeadingFont', 'sans-serif'],              // Headings
   },
   ```

**Example:** To use Montserrat + Raleway:
- Get URL: `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Raleway:wght@400;500;600;700;800&display=swap`
- Update both files with the new font names

### Styling & Colors

**Current Color Scheme (Grayscale):**
- Background: Light gray (`#f8f9fa`)
- Text: Dark gray/black (`#1a1a1a`)
- Mid-tone: Medium gray (`#6c757d`)
- Borders: Light border gray (`#dee2e6`)

To change colors, edit `tailwind.config.js` (lines 10-14)

**Files:**
- Global styles: `app/globals.css`
- Color scheme: `tailwind.config.js`
- Component styling: Inline with Tailwind classes in `app/page.js`

## Deployment

Deploy the static `out` folder to any hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static file host

## License

Private project for ONYX.

