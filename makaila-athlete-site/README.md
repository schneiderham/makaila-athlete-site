This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Replacing Placeholder Assets

### Hero Section Photo
- Replace `/public/vercel.svg` with a high-quality headshot or action photo of Makaila.
- Update the `src` in the Hero section of `app/page.tsx` to point to your new image (e.g., `/public/makaila-headshot.jpg`).

### Videos Section
- Replace the YouTube `src` links in the Videos section of `app/page.tsx` with Makaila's real recruiting video and game highlights.
- Example:
  ```tsx
  <iframe src="https://www.youtube.com/embed/ACTUAL_VIDEO_ID" ... />
  ```

### Gallery Section
- Replace the colored placeholder divs in the Gallery section of `app/page.tsx` with actual images.
- Example:
  ```tsx
  <Image src="/public/action1.jpg" alt="Makaila in action" ... />
  ```
- Add your images to the `/public` directory for easy access.

---

For best results, use high-resolution images and descriptive alt text for accessibility and SEO.
