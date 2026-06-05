# Next-Gen Learning Dashboard

A modern student learning dashboard built as part of the Frontend Intern Challenge.

## 🚀 Features

- Dark Mode UI
- Bento Grid Layout
- Responsive Sidebar Navigation
- Welcome Hero Section
- Dynamic Course Cards
- Animated Progress Bars
- Activity Dashboard Section
- Supabase Database Integration
- Loading Skeleton UI
- Responsive Design
- Framer Motion Animations

## 🛠 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide React

## 📂 Project Structure

```txt
app/
components/
lib/
public/
```

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## ▶️ Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## 🗄 Database Schema

Table: `courses`

| Column | Type |
|----------|----------|
| id | uuid |
| title | text |
| progress | integer |
| icon_name | text |
| created_at | timestamp |

## 🏗 Architecture

- Server Components are used for fetching course data from Supabase.
- UI is divided into reusable components.
- Framer Motion powers card animations and progress transitions.
- Tailwind CSS is used for styling and responsiveness.

## 🌐 Deployment

The application is deployed on Vercel.

## Live Demo

https://meghix-trinetra-learn.vercel.app
## 👨‍💻 Author

**Siddhartha Jain**
