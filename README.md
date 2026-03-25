# morasolar

Nuxt 4 website for Móra Solar 88 Kft. The site presents the company's services, includes SEO configuration, and provides a contact form that sends emails through Resend.

## Stack

- Nuxt 3
- Tailwind CSS
- TypeScript
- Resend

## Development

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build

```bash
pnpm build
pnpm preview
```

For static output:

```bash
pnpm generate
```

## Environment

Set these runtime config values for the contact form email endpoint:

```env
NUXT_RESEND_API_KEY=
NUXT_EMAIL_FROM=
NUXT_EMAIL_TO=
```
