import LoginButton from '@modules/auth/components/LoginButton'
import useAuth from '@modules/auth/context/auth.context'

const Navbar = () => {
  const { accessToken } = useAuth()

  return (
    <nav className='navbar px-2 sm:px-4 py-2.5 rounded shadow-xl bg-white '>
      <div className='navbar-start'>
        <a className='text-xl normal-case text-sky-400 btn btn-ghost'>findtheflat</a>
      </div>
      {accessToken !== '' && accessToken !== undefined ? (
        <button className='btn  btn-outline'>Logged In</button>
      ) : (
        <div className='navbar-end  '>
          <LoginButton />
        </div>
      )}
    </nav>
  )
}

export default Navbar
