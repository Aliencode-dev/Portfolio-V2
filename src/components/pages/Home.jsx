import Layout from '../layout/layout'
import HeroSection from '../shared/heroSection'
import Projects from '../shared/projects'
import Updatemeta from '../shared/updatemeta.jsx'

const Home = () => {
  return (
    <>
      <Updatemeta />
      <Layout>
        <HeroSection />
        <Projects />
      </Layout>
    </>
  )
}
export default Home
