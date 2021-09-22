import '../styles/globals.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MainLayout from '../layout/MainLayout'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  ) 
}

export default MyApp
