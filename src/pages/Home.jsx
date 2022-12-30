import React from 'react'
import { Header } from '../components/Header'
import { Template } from '../components/Template'

const Home = () => {
  return (
    <Template className="bg-[url('/images/home.png')] bg-no-repeat bg-cover">
      <Header />
    </Template>
  )
}

export default Home
