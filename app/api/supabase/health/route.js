export async function GET() {
  const hasPublic = !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  const hasServer = !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)

  return new Response(JSON.stringify({ ok: true, hasPublic, hasServer }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
