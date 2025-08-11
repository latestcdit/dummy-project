
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { type NextApiRequest, type NextApiResponse } from 'next'

export function createServerSupabaseClient(req: NextApiRequest, res: NextApiResponse) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies[name]
        },
        set(name: string, value: string, options: CookieOptions) {
          res.setHeader('Set-Cookie', `${name}=${value}; ${new URLSearchParams(options).toString()}`)
        },
        remove(name: string, options: CookieOptions) {
          res.setHeader('Set-Cookie', `${name}=; ${new URLSearchParams(options).toString()}`)
        },
      },
    }
  )
}
