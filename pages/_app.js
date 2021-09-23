import '../styles/globals.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MainLayout from '../layout/MainLayout'
import { Provider } from "react-redux";
import { useStore } from "../store/Store";

function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}

export default MyApp
