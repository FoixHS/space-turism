import { Header } from '../components/header/Header'
import { TechnologyContent } from '../components/technology/TechnologyContent'
import { Template } from '../components/Template'

const Technology = () => {
  return (
    <Template
      className="bg-[url('/images/technology/mobile.jpg')]
        md:bg-[url('/images/technology/tablet.jpg')]
        lg:bg-[url('/images/technology/desktop.jpg')]
        bg-no-repeat bg-cover"
    >
      <Header />
      <TechnologyContent />
    </Template>
  )
}

export default Technology
