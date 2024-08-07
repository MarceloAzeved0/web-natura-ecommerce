'use client'

import React from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NextBreadcrumb = () => {
  const paths = usePathname()
  const pathNames = (paths && paths.split('/').filter((path) => path)) || []

  return (
    <div className='container'>
      <ul className='flex w-full flex-row items-center p-4'>
        <li>
          <Link href={'/'}>Inicio</Link>
        </li>
        <span>/</span>
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const itemLink = link[0].toUpperCase() + link.slice(1, link.length)
          return (
            <React.Fragment key={index}>
              <li>
                <Link href={href}>{itemLink}</Link>
              </li>
              <span>/</span>
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default NextBreadcrumb
