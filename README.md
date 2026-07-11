# Sober

A simple React + TypeScript application to track how long you've been clean from different addictions.

## Features

- Track multiple addictions.
- Display the time elapsed since the last relapse.
- Reset an addiction timer with a single click.
- Built with React, TypeScript and Vite.

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Configuration

This project does **not** include your personal addiction data.

Create a file named `src/Data.tsx` by copying `src/Data.example.tsx`, then customize it with your own data.

Example:

```ts
import type { Addiction } from "./Addiction";

export const addictions: Addiction[] = [
    {
        name: "Coffee",
        date: new Date("2026-01-01T08:00:00"),
    },
    {
        name: "Smoking",
        date: new Date("2026-06-15T14:00:00"),
    },
];
```

## Technologies

- React
- TypeScript
- Vite
