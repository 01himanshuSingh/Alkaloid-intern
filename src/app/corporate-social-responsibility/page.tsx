import React from 'react'
import CSRSection from './component/CsrSection'
import CSRSection2 from './component/CsrSection2'

function page() {
  return (
    <main className='py-1 2xl:py-10'>
        <CSRSection imageSrc='/PNG/CSRImage May 26, 2026, 02_10_31 PM.png'/>
        <CSRSection2/>
    </main>
  )
}

export default page