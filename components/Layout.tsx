import NavBar from "./NavBar"
import Footer from "./Footer"

export interface Props {
  children?: JSX.Element[] | JSX.Element
}

const Layout = (props: Props): JSX.Element => {
  return (
    <div className='w-full min-h-[730px] relative'>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout