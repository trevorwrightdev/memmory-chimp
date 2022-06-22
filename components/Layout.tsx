import MobileNavBar from "./MobileNavBar"

export interface Props {
  children?: JSX.Element[] | JSX.Element
}

const Layout = (props: Props) => {
  return (
    <div className='w-full'>
      <MobileNavBar />
      {props.children}
    </div>
  )
}

export default Layout