import React from 'react'
import Link from "next/link"
import Image from "next/image"

export const HeaderLinks: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image
            className="block dark:hidden"
            src="/logo-dark.svg"
            alt="Логотип"
            width={110}
            height={22}
          />
          <Image
            className="hidden dark:block"
            src="/logo-light.svg"
            alt="Логотип"
            width={110}
            height={22}
          />
        </Link>
        <Link href="/">
          <p className="text-xs">О нас</p>
        </Link>
        <Link href="https://github.com/iknowozey">
          <p className="text-xs">GitHub</p>
        </Link>
      </div>
    </>
  )
}