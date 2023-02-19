import { Header } from '../components/Header'
import { HomeContent } from '../components/HomeContent'
import { Template } from '../components/Template'

const Home = () => {
  return (
    <Template className="bg-[url('/images/home-mobile.png')] lg:bg-[url('/images/home.png')] bg-no-repeat bg-cover">
      <Header />
      <HomeContent />
    </Template>
  )
}

export default Home
