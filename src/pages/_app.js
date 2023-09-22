import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App ({ Component, pageProps })
{
  return (
    <Layout>
      <ToastContainer />
      <Component { ...pageProps } />
    </Layout>);
}
