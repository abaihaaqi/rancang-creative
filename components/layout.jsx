import MetaTags from "../utils/meta-tag"

export default function Layout({ children, metaContent }) {
  return (
    <>
      <MetaTags {...metaContent} />
      <main>
        {children}
      </main>
    </>
  )
}