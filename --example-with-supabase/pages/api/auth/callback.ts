
import { createServerSupabaseClient } from '../../../utils/supabase/server'
import { type NextApiRequest, type NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { code } = req.query
    if (code) {
      const supabase = createServerSupabaseClient(req, res)
      await supabase.auth.exchangeCodeForSession(String(code))
    }
    res.redirect('/')
  } else {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method Not Allowed')
  }
}
