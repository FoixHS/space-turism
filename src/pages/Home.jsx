import { Header } from '../components/header/Header'
import { HomeContent } from '../components/HomeContent'
import { Template } from '../components/Template'

const Home = () => {
  return (
    <Template
      className="bg-[url('/images/home/mobile.jpg')]
        md:bg-[url('/images/home/tablet.jpg')]
        lg:bg-[url('/images/home/desktop.jpg')]
        bg-no-repeat bg-cover relative"
    >
      <Header />
      <HomeContent />
    </Template>
  )
}

export default Home
