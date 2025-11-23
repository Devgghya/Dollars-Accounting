Dollars Accounting — Static Website

Files:
- `index.html` — main HTML file
- `css/styles.css` — site styles
- `js/main.js` — small interaction and animations
- `images/` — placeholder SVG logos

Preview locally (PowerShell):

python -m http.server 8000 ; Start-Process "http://localhost:8000"

Customizing:
- Replace hero image URL in `index.html` with your preferred Unsplash/Pexels image.
- Swap out team photos with real headshots, and update contact details in the footer.
- Connect the contact form to your backend or a service like Formspree.

Notes:
- Uses simple CSS, no build tools. Drop into any static hosting (Netlify, Vercel, GitHub Pages).
