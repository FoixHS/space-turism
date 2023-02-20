import { Header } from '../components/header/Header'
import { CrewContent } from '../components/crew/CrewContent'
import { Template } from '../components/Template'

const Home = () => {
  return (
    <Template
      className="bg-[url('/images/crew/mobile.jpg')]
        md:bg-[url('/images/crew/tablet.jpg')]
        lg:bg-[url('/images/crew/desktop.jpg')]
        bg-no-repeat bg-cover"
    >
      <Header />
      <CrewContent />
    </Template>
  )
}

export default Home
