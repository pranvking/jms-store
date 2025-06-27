import Link from 'next/link'
import React from 'react'
const Signin = () => {
  return (
    <div>
        <Link href="/signup"><button className=' bg-signin px-3 py-3 rounded-full text-white w-24 justify-center relative'>Sign in</button></Link>
    </div>
)
}
export default Signin