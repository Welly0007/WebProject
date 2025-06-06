# HustleHUB Website

HustleHUB is a job portal designed to connect job seekers with employers. The website currently consists of multiple pages, each with its own functionality and design.

## Pages and Features

### 1. **Home Page (`index.html`)**
   - **Hero Section**: A welcoming section with a background image and buttons for adding or finding jobs.
   - **Header**: Dynamically fetched from `pages/header.html` using JavaScript.
   - **Footer**: Dynamically fetched from `pages/footer.html` using JavaScript.

   **Styles**:
   - Shared styles are in `styles/style.css`.
   - Hero section-specific styles are in `styles/hero.css`.

### 2. **Jobs Page (`pages/jobs.html`)**
   - **Filters Sidebar**: Allows users to filter jobs by workplace, country, career level, years of experience, job category, and job type.
   - **Job Listings**: Displays job cards with details such as job title, company, posted time, job type, and tags. Each job card includes a "Show Job Details" button.
   - **Header and Footer**: Dynamically fetched from `pages/header.html` and `pages/footer.html`.

   **Styles**:
   - Shared styles are in `styles/style.css`.
   - Jobs page-specific styles are in `styles/jobs.css`.

### 3. **Contact Page (`pages/contact.html`)**
   - **Contact Form**: A form for users to get in touch with the website administrators.
   - **Header and Footer**: Dynamically fetched from `pages/header.html` and `pages/footer.html`.

   **Styles**:
   - Shared styles are in `styles/style.css`.
   - Contact page-specific styles are in `styles/contact.css`.

### 4. **Header and Footer**
   - **Header (`pages/header.html`)**: Contains the website logo and navigation links to other pages.
   - **Footer (`pages/footer.html`)**: Includes links to the Privacy Policy, Terms of Service, and Contact Us.
   - Both are dynamically fetched and rendered on all pages using JavaScript.

### 5. **Dynamic Base URL Handling**
   - The `<base>` tag is dynamically set using JavaScript in `scripts/preDisplayScript.js` to ensure the website works both locally and on GitHub Pages.

### 6. **File Structure**

```
project/
├── assets/                # Contains images and other assets
├── index.html             # Home page
├── pages/                 # Contains all HTML pages
│   ├── header.html        # Header HTML
│   ├── footer.html        # Footer HTML
│   ├── jobs.html          # Jobs page
│   ├── contact.html       # Contact page
│   ├── profile.html       # User profile page
│   ├── AProfile.html      # Admin profile page
│   ├── login.html         # Login page
├── scripts/               # Contains JavaScript files
│   ├── preDisplayScript.js # Handles dynamic base URL and fetching header/footer
│   ├── afterDisplayScript.js # Additional scripts for interactivity
├── styles/                # Contains CSS files
│   ├── style.css          # Shared styles (header, footer, variables, etc.)
│   ├── hero.css           # Hero section styles
│   ├── jobs.css           # Jobs page styles
│   ├── contact.css        # Contact page styles
│   ├── job-details.css    # Job details page styles
```

## How to Run

To run the Django project locally:

1. Make sure you have Python and pip installed.
2. Install Django (if not already):  
   ```
   pip install django
   ```
3. Navigate to the backend project directory:
   ```
   cd backend
   ```
4. Run the development server:
   ```
   python manage.py runserver
   ```
6. Open your browser and go to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) to view the site.

> **Note:**  
> Static files are managed by Django's `{% static %}` template tag. Make sure `DEBUG = True` in your `settings.py` for local development.

## Future Enhancements

- Add interactivity to the filters on the jobs page.
- Implement backend functionality for job submissions and applications.
- Add user authentication for admin and user profiles.