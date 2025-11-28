# SmartSpend - Student Expense Tracker

A modern, intuitive web application designed to help students track expenses, manage budgets, and gain financial clarity. Built as part of SOFE 4850U User Interfaces course project.

## 🎯 Project Overview

SmartSpend is a comprehensive expense tracking platform specifically designed for students. It provides:
- **Real-time expense tracking** with category-based organization
- **Visual spending insights** through interactive charts
- **Budget management** with alerts and recommendations
- **Clean, intuitive interface** following modern UI/UX principles

## 🎨 Design Process

### 1. User Research & Problem Definition
- **Target Users**: University and college students
- **Problem**: Students struggle to manage limited finances and often overspend
- **Solution**: Simple, visual expense tracker with automated categorization

### 2. Design Approach
- **Color Palette**:
  - Primary: #2F6DB2 (Professional blue)
  - Secondary: #A7C7E7 (Light blue)
  - Background: #EAF4FB (Soft blue-gray)
  - Accents: Black and white for contrast

- **Typography**:
  - Font Family: Inter (Google Fonts)
  - Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
  - Clear hierarchy: H1 (48px), H2 (32px), H3 (27px), Body (16-18px)

- **Layout Grid**: 12-column responsive grid system
- **Spacing**: Consistent 8px base unit (8, 16, 24, 32, 48px)
- **Border Radius**: 5px, 10px, 15px, 20px, 25px for different elements

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **Data Visualization**: Recharts
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Google Fonts (Inter)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 🚀 Deployment to Netlify

### Method 1: GitHub + Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Method 2: Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## 📁 Project Structure

```
smartspend-website/
├── src/
│   ├── pages/
│   │   ├── Landing.jsx        # Homepage
│   │   ├── Dashboard.jsx      # Main dashboard
│   │   ├── Login.jsx          # Login page
│   │   ├── CreateAccount.jsx  # Registration
│   │   └── ResetPassword.jsx  # Password reset
│   ├── App.jsx                # Main app with routing
│   └── main.jsx               # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive expense tracking
- ✅ Category-based spending organization
- ✅ Visual data representation with charts
- ✅ Budget setting and tracking
- ✅ User authentication pages
- ✅ Clean, modern UI following Figma design

## 📊 Project Deliverables

- ✅ **Figma Prototype**: Complete interactive design
- ✅ **React Implementation**: Fully functional website
- ✅ **Documentation**: Comprehensive README
- ✅ **Deployment**: Live website on Netlify
- ✅ **Presentation**: Ready for demo

## 👥 Course Information

- **Course**: SOFE 4850U - User Interfaces
- **University**: Ontario Tech University
- **Term**: Fall 2025

---

Built with ❤️ for students, by students
