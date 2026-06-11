# TopicHub - Modern CMS Blog Platform

A modern, responsive content management and blogging platform showcasing seamless topic creation, editing, and publication with a clean, intuitive interface.

## Features

- **Content Management**: Create, edit, and manage blog posts and topics with ease
- **Form Validation**: Robust client-side validation powered by React Hook Form and Zod
- **Firebase Backend**: Real-time database and authentication with Firebase
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Rich Typography**: Beautiful content rendering with Tailwind CSS Typography plugin
- **User Authentication**: Secure login and registration via Firebase Auth
- **Type-Safe Codebase**: TypeScript throughout for a reliable development experience
- **Modern Routing**: File-based routing with Next.js App Router

## Tech Stack

- **Frontend Framework**: Next.js 16.2.9 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with `@tailwindcss/typography`
- **Backend & Database**: Firebase 12.14.0
- **Forms**: React Hook Form 7.78.0
- **Validation**: Zod 4.4.3
- **Icons**: Lucide React 1.17.0
- **Linting**: ESLint 9 with `eslint-config-next`

## Installation

Clone the repository:

```bash
git clone https://github.com/Kleinnnn1/TopicHub.git
cd TopicHub
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Development

To run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000` with hot module reload enabled.

## Build

To build for production:

```bash
npm run build
```

The optimized build output will be in the `.next/` directory.

## Start Production Server

To start the production server after building:

```bash
npm start
```

## Linting

To run ESLint:

```bash
npm run lint
```

## Project Structure

```
TopicHub/
├── app/                # Next.js App Router pages and layouts
├── components/         # Reusable React components
├── constant/           # App-wide constants and configuration
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries and Firebase config
├── public/             # Static assets
├── types/              # TypeScript type definitions
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Live Demo

The application is deployed and accessible at: [cms-blogv1.vercel.app](https://cms-blogv1.vercel.app)

## Author

**Kenneth Jhun N. Balino**
Full Stack Developer

Built with Next.js, Firebase, and Tailwind CSS