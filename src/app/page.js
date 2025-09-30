'use client';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar';
export default function Home() {
  // Initialize AOS only on client side
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,        // Animation repeats every time
    });
  });
  return (
    <>
      <Navbar />
      <div className="p-8 flex justify-center items-center min-h-screen">


        <div className="backdrop-blur-xs bg-white/10 rounded-xl border border-white/20 p-6 mt-14
        
        
        shadow-xl flex flex-col items-center font-bold w-150 h-120 "
          data-aos="fade-up" data-aos-duration="3000">

          <h1 className="text-4xl  text-center bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent "> Get Me a StrawHat <span className="tenor-gif-embed" data-postid="6558192108222740508" data-share-method="host" data-aspect-ratio="2" data-width="100%"></span></h1>
          <div className="text-white/80 mt-4 max-w-2xl">
            <p className="text-lg text-center leading-relaxed mb-4">
              Join the crew and embark on the greatest adventure of your lifetime! Our revolutionary crowdfunding platform connects aspiring pirates with generous supporters who believe in the power of dreams and determination.
            </p>
            <p className="text-base text-center leading-relaxed">
              Whether you are setting sail to find the legendary One Piece, exploring uncharted islands in the New World, or simply need the perfect straw hat to begin your journey, we are here to help make your pirate dreams come true. Every great adventure starts with a single step - and sometimes, a little help from fellow adventurers who understand the call of the sea.
            </p>
          </div>
          
          <button className='border border-white bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-500 rounded-3xl p-3 mt-4 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out hover:border-yellow-500 '><p className='text-white text-center
        ' >buy me a StrawHat</p></button>
        </div>



      </div>
      <div>
        <p className='bg-white w-full h-1 opacity-5'></p>
      </div>
      <div className='OurMission flex justify-center items-center p-8' data-aos="fade-up" data-aos-duration="3000">
        <h1 className="text-4xl text-white text-center ">Meet Our Crew  </h1>
      </div>

      <div className='flex justify-center items-center p-8' data-aos="fade-up" data-aos-duration="3000">
        <span className="backdrop-blur-xs bg-white/10 rounded-xl border border-white/20 p-6 shadow-xl flex flex-col items-center font-bold w-100 h-150 ml-10">
          <div className='flex flex-col justify-center items-center'>
            <img className='w-120 h-50 rounded-3xl' src="/luffy.png" alt="luffy" />
            <h1 className="text-4xl text-red-700">Luffy</h1>
            <p className='text-center ml-2 mt-4 bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent'>I am Monkey D. Luffy! Future King of the Pirates! I do not care if you are a marine, a sea king, or a grumpy old sea gull—I will still eat all your meat! I am bad with directions, worse with lying, and HORRIBLE at staying out of trouble… but hey, that is what makes an adventure fun, right? Oh, and if you have got a big shiny hat lying around… sorry, it is mine now</p>
          </div>
        </span>
        <span className="backdrop-blur-xs bg-white/10 rounded-xl border border-white/20 p-6 shadow-xl flex flex-col items-center font-bold w-100 h-150 ml-10">
          <div className='flex flex-col justify-center items-center'>
            <img className='w-120 h-50 rounded-3xl' src="/zoro.png" alt="zoro" />
            <h1 className="text-4xl text-red-700">Zoro</h1>
            <p className='text-center ml-2 mt-4 bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent'>Name is Roronoa Zoro. I do not waste time introducing myself twice. Swords are my language, and anyone who doubts me can learn it the hard way. I have got three blades, and each one is hungry for anyone who stands in my captain’s way. My dream? To be the world’s greatest swordsman — and I will cut through anyone, no matter how strong, to get there. If you have got a death wish, step forward. Otherwise… step aside.</p>
          </div>
        </span>
        <span className="backdrop-blur-xs bg-white/10 rounded-xl border border-white/20 p-6 shadow-xl flex flex-col items-center font-bold w-100 h-150 ml-10">
          <div className='flex flex-col justify-center items-center'>
            <img className='w-120 h-50 rounded-3xl' src="/sanji.png" alt="sanji" />
            <h1 className="text-4xl text-red-700">Sanji</h1>
            <p className='text-center ml-2 mt-4 bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent'>The name is Sanji. I am the chef of the sea, master of the Baratie’s kitchen, and the man with the iron-clad code who will never let a soul go hungry. Messing with a cook of the sea is a good way to get yourself killed… Remember that well. Oh, and miss, you are really as beautiful as the finest spice—how about a meal just for you?</p>
          </div>
        </span>
      </div>






    </>
  );
}
