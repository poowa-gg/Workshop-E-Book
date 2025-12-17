# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Open Locally
**Windows:**
```
Double-click launch.bat
```

**Or manually:**
```
Right-click index.html → Open with → Your Browser
```

### Step 2: Test Mobile View
1. Open the page in your browser
2. Press `F12` to open DevTools
3. Press `Ctrl+Shift+M` (or click device icon)
4. Select a mobile device (iPhone, Samsung, etc.)
5. Click the hamburger menu (☰) in top right
6. Test navigation!

### Step 3: Deploy Online (Optional)

#### Option A: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your entire folder
3. Done! Get your live URL

#### Option B: GitHub Pages
```bash
git init
git add .
git commit -m "Climatovate Workshop Blog"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```
Then enable GitHub Pages in Settings.

#### Option C: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy!

## 📱 Mobile Features to Test

### Navigation Bar
- ✅ Hamburger menu appears on mobile
- ✅ Menu slides down when clicked
- ✅ Shows all 5 chapters
- ✅ Closes after selecting chapter
- ✅ Closes when clicking outside

### Reading Experience
- ✅ Content never covered by navbar
- ✅ Smooth scrolling to chapters
- ✅ Active chapter highlighted
- ✅ Reading companion in bottom right
- ✅ Progress bar at top

### Call-to-Action
- ✅ WhatsApp button full-width on mobile
- ✅ Easy to tap (large target)
- ✅ Opens WhatsApp channel correctly

## 🎨 Customization

### Change Colors
Edit `styles.css` lines 7-9:
```css
--primary-color: #2E7D32;    /* Main green */
--secondary-color: #66BB6A;  /* Light green */
--accent-color: #FFA726;     /* Orange */
```

### Update Content
Edit `index.html` - all text is clearly marked with:
- `<section id="introduction">` - Chapter 1
- `<section id="why-it-works">` - Chapter 2
- `<section id="environment">` - Chapter 3
- `<section id="soil">` - Chapter 4
- `<section id="stakeholders">` - Chapter 5

### Change WhatsApp Link
Find line with `href="https://whatsapp.com/channel/..."` and update URL

## 🐛 Troubleshooting

### Menu Not Opening on Mobile?
- Clear browser cache (Ctrl+Shift+Delete)
- Make sure JavaScript is enabled
- Try different browser

### Content Looks Wrong?
- Ensure all 3 files are in same folder:
  - index.html
  - styles.css
  - script.js

### Fonts Not Loading?
- Check internet connection (uses Google Fonts)
- Fonts will fallback to system fonts if offline

## 📊 Performance Tips

1. **Images**: Add images to enhance content (currently text-only)
2. **Caching**: Browser automatically caches for faster loading
3. **Offline**: Works offline after first load
4. **Print**: Use Ctrl+P for PDF export

## 🌟 Pro Tips

1. **Bookmark**: Add to home screen on mobile for app-like experience
2. **Share**: Send direct link to specific chapters using #introduction, #soil, etc.
3. **Present**: Use in full-screen mode (F11) for presentations
4. **Customize**: Add your logo by replacing brand icon in navbar

## 📞 Support

For workshop information and updates:
👉 [Follow Climatovate Ltd on WhatsApp](https://whatsapp.com/channel/0029Vb7AtAUEawdyHh81Tc25)

---

**You're all set! Your professional, mobile-responsive workshop blog is ready to go! 🎉**
