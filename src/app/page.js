"use client"

import Header from './components/header'
import Navbar from './components/navbar'
import Form from './components/form'



export default function Home() {
  return (
    <>
    <div className="bg-white">
      <Navbar />
      <Header />
      <Form />
    </div>
    </>
  )
}
