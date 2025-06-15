import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './navigation/Navbar'
import Form from './form/Form'
import SlidesPerView from './slider/Slider'
import SlidesPerView2 from './slider2/Slider2'
// import Card from './card/Card'
import Footer from './footer/Footer'
import Image from './image/Image'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <main className="w-full bg-green-950 overflow-hidden">
        <Navbar />
        <SlidesPerView />
        <div className="flex flex-col mb-8">
            <SlidesPerView2 /> 
            {/* <Card/>       */}
{/* <Image/> */}
        </div>
        <Form />
        
        <Footer/>
        
         {/* Events */}
          
      </main>
    </>
  )
}

export default App
