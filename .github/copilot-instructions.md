# Copilot Instructions for E_Commerce-Hackathon

## Project Overview
- This is a Next.js e-commerce platform with a custom product catalog, cart, checkout, and wishlist (favorites) functionality.
- The codebase is split between a main app (`src/app/`) and a sub-app (`my-app/`), both using Next.js and TypeScript.
- Sanity.io is used for content management, with schemas in `src/sanity/schemaTypes/` and client logic in `src/sanity/lib/`.
- Tailwind CSS is used for styling (see `tailwind.config.ts` and `postcss.config.mjs`).

## Key Architectural Patterns
- **Pages and Routing:** All main user-facing pages are in `src/app/`, using the Next.js App Router. Dynamic routes (e.g., product details) use `[slug]` folders.
- **State Management:** Cart and favorites (wishlist) state is managed via React context in `src/context/CartContext.tsx`. Use the `useFavorites` and `useCart` hooks for state access and mutation.
- **Component Structure:** UI components are in `src/components/`. Favor composition and reuse (e.g., `Product.tsx`, `Carts.tsx`).
- **Sanity Integration:** Data fetching for products and content is handled via Sanity client utilities in `src/sanity/lib/`.

## Developer Workflows
- **Development:**
  - Start the dev server: `npm run dev` (from the root or `my-app/` as needed).
  - Edit pages in `src/app/` or `my-app/app/`.
- **Styling:**
  - Use Tailwind utility classes. Global styles in `src/app/globals.css`.
- **Sanity Studio:**
  - Sanity config is in `sanity.config.ts`. Studio route: `/studio`.
- **Data Import:**
  - Use `scripts/importData.js` for bulk data import to Sanity.

## Project-Specific Conventions
- **Favorites/Wishlist:**
  - Use `useFavorites` from `CartContext.tsx` for all wishlist logic. Example: `const { favorites, removeFromFavorites } = useFavorites();`
- **Product Images:**
  - Always use the first image in the `images` array for product thumbnails.
- **Price Display:**
  - Prices are shown as `Rs {item.price}` (see `WishList/page.tsx`).
- **Component Imports:**
  - Use absolute imports from `@/` (aliased to `src/`).

## Integration Points
- **Sanity:**
  - Schemas: `src/sanity/schemaTypes/`
  - Client: `src/sanity/lib/client.ts`
- **API Routes:**
  - Custom API logic in `src/app/api/` (e.g., `checkout/route.ts`).

## Examples
- To add a new page: create a file in `src/app/{route}/page.tsx`.
- To add a new product schema: edit `src/sanity/schemaTypes/product.ts` and update `sanity.config.ts`.

## References
- Main README: `README.md` (root and `my-app/`)
- Tailwind config: `tailwind.config.ts`
- Sanity config: `sanity.config.ts`

---
For any unclear conventions or missing patterns, check the referenced files or ask for clarification.