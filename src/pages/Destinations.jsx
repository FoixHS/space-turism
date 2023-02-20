import { Header } from '../components/header/Header'
import { DestinationContent } from '../components/destination/DestinationContent'
import { Template } from '../components/Template'

const Home = () => {
  return (
    <Template
      className="bg-[url('/images/destination/mobile.jpg')]
        md:bg-[url('/images/destination/tablet.jpg')]
        lg:bg-[url('/images/destination/desktop.jpg')]
        bg-no-repeat bg-cover"
    >
      <Header />
      <DestinationContent />
    </Template>
  )
}

export default Home
