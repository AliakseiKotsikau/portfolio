# Mobile Apps Portfolio

A clean and professional portfolio website to showcase mobile applications.

## Features

- **Application Showcase**: Display your mobile app with description and screenshots
- **Contact Form Integration**: Direct link to Google Forms for user feedback
- **Privacy Policy**: Complete privacy policy page
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional design with gradient headers and smooth animations

## Setup

1. Clone the repository
2. Replace the Google Form URL in `app.html` with your actual Google Form link (currently: `https://forms.google.com/your-form-link`)
3. Add your app screenshot to `images/app-example.png` (recommended size: 300x600px)
4. Customize the app name, description, and features in `app.html`
5. Open `index.html` in a web browser or deploy to a web server

## Files Structure

- `index.html` - Main portfolio page listing all apps
- `app.html` - Detailed application page with description, features, and contact button
- `privacy-policy.html` - Privacy policy page
- `styles.css` - Styling for all pages
- `images/` - Directory for app screenshots and images

## Customization

### Update Google Form Link
Edit `app.html` and `privacy-policy.html` and replace `https://forms.google.com/your-form-link` with your actual Google Form URL.

### Update App Information
Edit `app.html` to customize:
- App name
- Description
- Key features list
- Screenshots

### Add More Apps
Edit `index.html` and add more app cards to the `.apps-grid` section.

## Local Testing

You can test the website locally using Python's built-in HTTP server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

## License

All rights reserved.
