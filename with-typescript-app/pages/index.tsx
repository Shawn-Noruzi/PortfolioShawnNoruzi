import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Noruzi | Front End Developer">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
