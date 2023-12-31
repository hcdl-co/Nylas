"use client"

import Header from './components/header'
import Navbar from './components/navbar'
import Form from './components/form'
import Footer from './components/footer'



export default function Home() {
  return (
    <>
    <div>
      <Navbar />
      <Header />
      <div className='bg-indigo-50/50 py-10'>
      <Form />
      </div>
      <Footer />
    </div>
    </>
  )
}
