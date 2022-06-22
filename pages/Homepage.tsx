import * as React from 'react';
import Navbar from '@common/components/Navbar';
import Carousal from '@common/components/Carousal';
const Homepage =() =>{
    return(
        <> 
        <Navbar/>
        <div className='bg-white w-[100vw] h-[100vh] '  >
<Carousal/>
        </div>
        </>
    )
}

export default Homepage