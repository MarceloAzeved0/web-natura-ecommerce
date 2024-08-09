'use client'

import React from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NextBreadcrumb = () => {
  const paths = usePathname()
  const pathNames = (paths && paths.split('/').filter((path) => path)) || []

  return (
    <div className='container'>
      <ul className='flex w-full flex-row items-center py-4'>
        <li className={`${pathNames.length === 0 ? 'text-orange-500' : ''}`}>
          <Link href={'/'}>Inicio</Link>
        </li>
        <span className='p-1'>/</span>
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const itemLink = link[0].toUpperCase() + link.slice(1, link.length)
          return (
            <React.Fragment key={index}>
              <li
                className={`${pathNames.length === index + 1 ? 'text-orange-500' : ''}`}
              >
                <Link href={href}>{itemLink}</Link>
              </li>
              <span className='p-1'>/</span>
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default NextBreadcrumb
