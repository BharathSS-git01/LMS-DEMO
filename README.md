# VIDHYA VAARADHI - Learning Management System (LMS)

A complete, multi-page frontend Learning Management System built with pure HTML, CSS, and JavaScript. Fully responsive and ready for deployment on Vercel.

## 🎯 Features

- **Student Portal**
  - Dashboard with course overview
  - My Courses - Enroll and track progress
  - Course Player - Video lessons with navigation
  - Assignments - Submit work and view feedback
  - Certificates - Earn and download certificates
  - Student Profile management
  - Logout functionality

- **Admin Dashboard**
  - Manage students
  - Manage courses
  - View assignments
  - Quiz control center
  - Certificate management
  - Platform analytics

- **Authentication**
  - Student login flow
  - Admin login flow
  - Dummy authentication (no validation required)
  - Logout from any page

- **Navigation**
  - Full multi-page navigation
  - Dropdown menus
  - Mobile sidebar toggle
  - Logout buttons on all student pages

## 📁 Project Structure

```
smart-lms/
├── index.html                 # Landing page
├── student-login.html        # Student login
├── student-dashboard.html    # Student main dashboard
├── my-courses.html           # Enrolled courses
├── course-player.html        # Video player
├── assignments.html          # Assignments & quizzes
├── certificates.html         # Certificates page
├── completed.html            # Completed courses
├── register-course.html      # Course registration
├── profile.html              # Student profile
├── admin/
│   ├── admin-login.html      # Admin login
│   ├── dashboard.html        # Admin dashboard
│   ├── students.html         # Manage students
│   ├── courses.html          # Manage courses
│   ├── assignments.html      # Manage assignments
│   ├── quizzes.html          # Manage quizzes
│   ├── certificates.html     # Manage certificates
│   └── css/                  # Admin styles
├── css/                      # Student styles
├── js/                       # JavaScript files
├── assets/                   # Images and media
├── vercel.json              # Vercel routing config
├── 404.html                 # Error page
└── .gitignore               # Git ignore file
```

## 🚀 Deployment

### Vercel Deployment
The project is pre-configured for Vercel with `vercel.json` routing configuration.

1. Push this repository to GitHub
2. Connect your GitHub account to Vercel
3. Create new project and select this repository
4. Vercel will auto-detect and deploy

**Important:** Vercel routing is configured to handle:
- Clean URLs (no .html extension)
- Direct URL access
- Page refresh without 404 errors
- Custom error page (404.html)

### Local Development
Simply open `index.html` in your browser or use:
```bash
npx http-server
```

## 🔑 Login Credentials (Dummy)

**Student Login:**
- Email: Any email
- Password: Any password

**Admin Login:**
- Admin ID: Any ID
- Password: Any password

## 🎨 UI Features

- Modern, clean design
- Responsive layout
- Gradient backgrounds
- Card-based layouts
- Professional color scheme
- Mobile-friendly navigation
- Dropdown menus
- Progress indicators

## 📝 Pages

### Student Pages
- **Landing Page** - Hero section with CTA buttons
- **Student Login** - Simple login form
- **Student Dashboard** - Welcome screen with featured courses
- **My Courses** - List of enrolled courses with progress tracking
- **Course Player** - Video player with lessons, tabs, and sidebar
- **Assignments** - Assignment submissions and quizzes
- **Certificates** - View and download earned certificates
- **Completed Courses** - Historical course data
- **Register for Courses** - Browse and register new courses
- **Profile** - User profile management

### Admin Pages
- **Admin Login** - Admin authentication
- **Dashboard** - Admin overview with stats
- **Manage Students** - Student management interface
- **Manage Courses** - Course creation and management
- **Assignments** - Assignment management
- **Quizzes** - Quiz control and management
- **Certificates** - Issue and manage certificates

## 🔗 Navigation Flow

### Student Flow
```
Landing → Student Login → Dashboard 
       → My Courses → Course Player → Assignments/Certificates
       → Profile/Logout
```

### Admin Flow
```
Landing → Admin Login → Dashboard 
       → Manage Students/Courses/Assignments/Quizzes/Certificates
       → Logout
```

## 🛠 Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid
- **JavaScript** - Pure vanilla JS (no frameworks)
- **Vercel** - Deployment platform
- **Git/GitHub** - Version control

## 📋 Features Implemented

✅ Multi-page navigation
✅ Dropdown menus
✅ Mobile responsive
✅ Student authentication flow
✅ Admin authentication flow
✅ Course player with video
✅ Assignment submission UI
✅ Certificate viewing
✅ Logout functionality on all student pages
✅ Vercel routing configuration
✅ Clean URL support
✅ Custom error page
✅ Relative path structure
✅ Asset management
✅ CSS/JS proper linking

## 🚫 What's NOT Included

- Backend/Database
- File uploads
- Real authentication
- Payment processing
- Email notifications
- Real video streaming
- User persistence

## 📄 License

This project is provided as-is for educational purposes.

## 👨‍💻 Developer

Created: February 2026

---

**Ready for Production:** This project is fully functional for frontend deployment to Vercel or any static hosting service. All navigation is working, all pages are connected, and logout functionality is fully implemented.
