This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

- Node.js 18+ installed
- A Supabase account ([Sign up here](https://app.supabase.com))
- npm or yarn package manager

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [Supabase](https://app.supabase.com)
2. Go to Project Settings > API to get your API keys
3. Go to Project Settings > Database to get your database connection string

### 3. Configure Environment Variables

Copy `env.example` to `.env.local`:

```bash
cp env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres?sslmode=require"
NEXT_PUBLIC_SUPABASE_URL="https://[YOUR-PROJECT-REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR-ANON-KEY]"
SUPABASE_SERVICE_ROLE_KEY="[YOUR-SERVICE-ROLE-KEY]"
```

### 4. Set Up Database Schema

Generate Prisma Client:

```bash
npm run db:generate
```

Push the schema to your database:

```bash
npm run db:push
```

Or create a migration:

```bash
npm run db:migrate
```

### 5. Run the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Management

This project uses Prisma ORM with Supabase PostgreSQL. Available commands:

- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema changes to database (development)
- `npm run db:migrate` - Create and apply migrations (production)
- `npm run db:studio` - Open Prisma Studio to view/edit data

## Project Structure

- `prisma/schema.prisma` - Database schema definitions
- `lib/prisma.ts` - Prisma Client instance
- `lib/supabase.ts` - Supabase Client instance
- `app/types.ts` - TypeScript type definitions

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM.
- [Supabase Documentation](https://supabase.com/docs) - learn about Supabase.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
