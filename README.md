# Mikano Realty

Premium Nigerian real estate website built with Next.js, Tailwind CSS, and a structured property data model for easy updates.

## Overview

This project is a polished real-estate marketing site designed for a professional Nigerian property business. It includes:

- premium homepage with strong hero, search, trust, and CTA sections
- properties listing and detail pages
- services, about, contact and inspection booking flows
- WhatsApp conversion buttons using 08070720766
- responsive mobile-first layout and accessible UI
- scalable property data model ready for future CMS or API integration

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Important notes

- The WhatsApp number is integrated as: 08070720766
- Property data is centrally organized in `src/data/properties.ts`
- More listings, services, and contact details can be updated from a single source of truth
- The app is structured so a CMS or backend can be added later without rewriting the front-end architecture

## Deployment

This project is ready to deploy on Vercel or any Node-compatible hosting platform.
