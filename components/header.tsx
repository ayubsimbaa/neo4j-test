import * as React from 'react'
import Link from 'next/link'

import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  IconSeparator,
 
} from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import Image from 'next/image'
import oxalateImage from '@/public/oxilate.png'


export async function Header() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex items-center">

          <Link href="/" target="_blank" rel="nofollow">
            <Image alt='' src={oxalateImage} width={160} height={30} className='invert dark:invert-0' />

          </Link>
      
        <div className="flex items-center">
          <IconSeparator className="h-6 w-6 text-muted-foreground/50" />
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <Button variant="link" asChild className="-ml-2">
              <Link href="/">Login</Link>
            </Button>
          )}
        </div>
      </div>

    </header>
  )
}
