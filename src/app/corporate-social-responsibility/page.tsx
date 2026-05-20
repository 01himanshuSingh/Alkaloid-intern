import React from 'react'
import CSRSection from './component/CsrSection'
import CSRSection2 from './component/CsrSection2'

function page() {
  return (
    <main className='py-1 2xl:py-10'>
        <CSRSection/>
        <CSRSection2/>
    </main>
  )
}

export default page