import Layout from '../components/layout'
import Estetika from '../components/estetika'
import Banner from '../components/banner'
import Profile from '../components/profile'

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Estetika />
      <Profile />
    </Layout>
  )
}
