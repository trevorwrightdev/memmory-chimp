import MobileNavBar from "./MobileNavBar"
import Footer from "./Footer"

export interface Props {
  children?: JSX.Element[] | JSX.Element
}

const Layout = (props: Props) => {
  return (
    <div className='w-full min-h-screen'>
      <MobileNavBar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout