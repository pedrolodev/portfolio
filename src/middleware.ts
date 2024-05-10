import { NextResponse, type NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export async function middleware(request: NextRequest) {
      const ip = request.headers.get('x-forwarded-for') || ''
      const userAgent = request.headers.get('user-agent') || ''
      const time = new Date().toLocaleString('es-ES', {
            timeZone: 'Europe/Madrid'
      })

      const headers = new Headers()
      headers.set('ip', ip)
      headers.set('userAgent', userAgent)
      headers.set('time', time)

      const pathname = request.nextUrl.pathname
      if (pathname === '/porfolio') {
            headers.set('project', 'main_link')
            return NextResponse.rewrite(new URL('/', request.url), { headers })
      }

      headers.set('project', 'main')
      return NextResponse.next({ headers })
}

// See "Matching Paths" below to learn more
export const config = {
      matcher: ['/', '/porfolio']
}
