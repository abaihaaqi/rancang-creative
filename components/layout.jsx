import Navbar from "../components/navbar"
import MetaTags from "../utils/meta-tag"

export default function Layout({ children, metaContent }) {
  return (
    <>
      <MetaTags {...metaContent} />
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}