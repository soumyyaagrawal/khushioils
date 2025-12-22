Supabase setup (quick guide)

1) Install the client

PowerShell
```
npm install @supabase/supabase-js
```

2) Add environment variables

- Copy `.env.local.example` to `.env.local` and fill with your project values.
- Public values (start with `NEXT_PUBLIC_`) are safe for the browser.
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only (do NOT commit it).

3) Usage

- Client-side helper: [lib/supabaseClient.js](lib/supabaseClient.js#L1)
  - Example: `import { supabase } from '../lib/supabaseClient'`

- Server-side helper: [lib/supabaseServer.js](lib/supabaseServer.js#L1)
  - Use for admin tasks, signed uploads, or server-only queries.

4) Quick test

- With `.env.local` populated, start the dev server and visit:
  - `/api/supabase/health` → returns JSON `{ ok: true, hasPublic, hasServer }`

5) Next steps (recommended)

- For components that require client-only behavior (real-time subscriptions, auth flows), keep them as client components and import `supabase` from `lib/supabaseClient.js`.
- For server actions or API routes, use `supabaseAdmin` from `lib/supabaseServer.js`.

If you want, I can:
- Add a small example auth flow (sign-in/sign-out) or a simple user list test route.
- Add typed wrappers (TS) or convert helpers to use `createServerComponentClient` if you use `@supabase/auth-helpers-nextjs`.
