import Navbar from '@common/components/Navbar'
import type { NextPage } from 'next'
import { Toaster } from 'react-hot-toast'
import Homepage from './Homepage'

const Home: NextPage = () => {
  return (
    <>
    <div className='max-w-[1440px] mx-auto bg-white' 
    > 
     <Navbar/>
    <Homepage/>
      </div>
     
    </>
  )
}

export default Home
