import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        body {
          background-color: white;
          color: black;
        }
      `}</style>
    </>
  )
}

export default MyApp