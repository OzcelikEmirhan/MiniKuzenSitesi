import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [gameDiv , setGameDiv] = useState(false)

  return (
    <>
     <div className=' min-w-screen  overflow-x-hidden h-screen bg-stone-600 text-[#fafafa]'>
        <div className='w-[100%] min-h-[96px] bg-stone-700 flex justify-center'>
            <div className='w-[100%] lg:w-[80%] h-[96px] flex flex-row items-center justify-between '>
              <img className='h-24 w-24 ' src="../public/Burak.png" alt="" />
              <div className=' flex flex-row   lg:ml-[200px] mr-4 text-xl font-semibold'>
                Harika Kuzenlerin Mini Sitesi
              </div>
              
            </div>
            
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
        <main className='w-[60%] flex flex-col lg:flex-row items-start justify-between my-28'>
                <section className='flex flex-col items-center justify-center my-8 '>
                  <div style={{
                    "box-shadow": "5px 5px 5px rgba(139, 241, 255, 0.5),-5px -5px 5px rgba(139, 241, 255, 0.5),5px -5px 5px rgba(139, 241, 255, 0.5),-5px 5px 5px rgba(139, 241, 255, 0.5)"
                  }} className='w-[250px] h-[250px] bg-burak bg-center bg-contain rounded-full border-[8px] border-[#17717d] hover:scale-110 transition-all duration-200 hover:shadow-xl '></div>
                  <div className='text-2xl font-bold my-4'>Burak Öztürk</div>
                  <div className='w-[350px] pl-10 text-md'>Merhaba ben Burak Öztürk. Yazılımı ve spor yapmayı çok severim . Eğer Scratch ile yaptığım oyunu oynamak isterseniz aşağıdaki butona tıklayın</div>
                  <a onClick={()=> setGameDiv(prev => !prev)} className='w-[200px] h-[40px] my-6 bg-[#17717d] flex items-center justify-center rounded-xl font-semibold hover:bg-[#4da9b5] cursor-pointer'>
                    Oyunumu Oyna
                  </a>
                  <div className={` ${gameDiv ? "":"hidden"} `}>
                    <iframe className=' rounded-lg' src="https://scratch.mit.edu/projects/953419470/embed" allowtransparency="true" width={380} height={350} frameborder="0" scrolling="no" allowfullscreen></iframe>
                  </div>
                </section>
                <section className='flex flex-col items-center justify-center xs:my-8 sm:my-8 md:my-8'>
                  <div style={{
                    "box-shadow": "5px 5px 5px rgba(139, 241, 255, 0.5),-5px -5px 5px rgba(139, 241, 255, 0.5),5px -5px 5px rgba(139, 241, 255, 0.5),-5px 5px 5px rgba(139, 241, 255, 0.5)"
                  }} className='w-[250px] h-[250px] bg-alp bg-center bg-cover rounded-full border-[8px] border-[#17717d] hover:scale-110 transition-all duration-200'></div>
                  <div className='text-2xl font-bold my-4'>Alp Öztürk</div>
                  <div className='w-[350px] pl-10 text-md'>Merhaba ben Alp Öztürk ve spor yapmayı çok severim. Özellikle tenis sporu ile ilgileniyorum. Tenis ile ilgili bilgi almak isterseniz aşağıdaki butona tıklayın</div>
                  <a href='https://www.youtube.com/watch?v=26VPtURVW2M&t=354s' className='w-[200px] h-[40px] my-6 bg-[#17717d] flex items-center justify-center rounded-xl font-semibold hover:bg-[#4da9b5] cursor-pointer'>
                    Tenis Hakkında Bilgi AL
                  </a>
                  
                </section>
               
        </main>
                  
        </div>
        
      </div>
    </>
  )
}

export default App
