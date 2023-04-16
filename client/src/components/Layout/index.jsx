import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className='page mt-4'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
