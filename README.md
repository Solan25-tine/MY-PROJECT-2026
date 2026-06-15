# Kendeke Solantine - Professional Portfolio

This is a modern, responsive, and production-ready personal portfolio website built with the Next.js App Router, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI/UX**: Clean design with smooth animations using Framer Motion.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Tech Stack**: Next.js, React, Tailwind CSS, Lucide React, Mongoose.
- **Backend API**: Integrated contact form that stores messages in MongoDB.
- **SEO Optimized**: Meta tags and structured data for better search engine visibility.

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Next.js API Routes
- **Database**: MongoDB (Mongoose)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB account (Atlas or local instance)

### Installation

1. Clone the repository or extract the files.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add your MongoDB connection string:
     ```env
     MONGODB_URI=your_mongodb_connection_string
     ```

### Running the Project

- **Development Mode**:
  ```bash
  npm run dev
  ```
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Start Production Server**:
  ```bash
  npm start
  ```

## Project Structure

- `/app`: Next.js App Router pages and API routes.
- `/components`: Reusable UI components (Hero, About, Projects, etc.).
- `/models`: Mongoose database models.
- `/utils`: Utility functions and database connection logic.
- `/styles`: Global styles and Tailwind configuration.
- `/public`: Static assets (images, icons).

## Author

**Kendeke Solantine** - Professional Software Engineer
(Frontend Developer, Web Developer, Database Manager)
