# LensConnect: Photography Marketplace

A specialized online marketplace connecting photographers with clients to capture life's precious moments. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Portfolio Management: Grid layout for photos, upload form, category tags
- Search and Discovery: Filterable list of photographers, clickable profiles
- Booking: Calendar display, booking form with date picker
- User Authentication: Registration, login, and profile management
- Image Gallery: Photo organization and display with tags

## Technology Stack

- **Frontend**: React with TypeScript
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Routing**: Next.js App Router
- **State Management**: React Context
- **Form Management**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ngabonzizaguy/lens-connect.git
   cd lens-connect
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/     # Reusable UI components
│   ├── lib/           # Utilities and helpers
│   └── types/         # TypeScript type definitions
├── .gitignore
├── next.config.js     # Next.js configuration
├── package.json
├── postcss.config.js  # PostCSS configuration
├── README.md
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Development Guidelines

- Use Tailwind CSS for styling
- Follow TypeScript best practices
- Create reusable components
- Maintain responsive design for all screen sizes
- Follow accessibility guidelines

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License