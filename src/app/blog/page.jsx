import Blog from '@/components/Blog/Blog'
import Footer from '@/components/Footer/Footer'
import BlogHero from '@/components/Navbar/BlogHero/BlogHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <BlogHero/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default page