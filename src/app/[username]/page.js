import React from 'react'
import Image from 'next/image'
import AnimatedBackground from '@/components/AnimatedBackground'

const UserPage = ({ params }) => {
  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Cover Image Container */}
      <div className="w-full h-[300px] relative">
        <Image
          src="/luffy.png"
          alt="Cover"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </div>

      {/* Dark section with visible animated background */}
      <div className="absolute inset-0 top-[300px] -z-10">
        <div className="absolute inset-0 bg-black/90 -z-10"></div>
        <AnimatedBackground className="absolute inset-0 -z-20" />
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-32 sm:-mt-16 pb-8">
          {/* Profile Image */}
          <div className="relative h-40 w-40 rounded-full border-4 border-white overflow-hidden shadow-xl bg-white">
            <Image
              src="/zoro.png"
              alt={`${params.username}'s profile`}
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>



          <div className=' mt-2 font-bold  text-xl  text-white '>{params.username}</div>
          <div className='mt-1 text-sm text-slate-500'>One Piece Fan</div>
          <div className='mt-1 text-sm  text-slate-500'> 123 Members 123 followers</div>
          <p className='bg-white w-full h-1 opacity-5'></p>
          <div className="payments grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Supporters Section */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <span className="mr-2">⭐</span> Recent Supporters
                </h2>
                <ul className="space-y-4">
                 
                    <li className="backdrop-blur-sm bg-white/5 p-4 rounded-lg border border-white/10 transition-all hover:bg-white/10">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                          <span className="text-amber-300">₹</span>
                        </div>
                        <div className="ml-4">
                          <p className="text-white font-medium">lavya donated 30rs</p>
                          <p className="text-gray-400 text-sm">Thank you for supporting!</p>
                        </div>
                      </div>
                    </li>
                  
                </ul>
              </div>
            </div>

            {/* Payment Form Section */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-xl">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <span className="mr-2">🎁</span> Support Adventure
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Amount (₹)</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent backdrop-blur-sm"
                      placeholder="Enter amount"
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message (optional)</label>
                    <textarea
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent backdrop-blur-sm"
                      placeholder="Add a message of support"
                      rows="3"
                    ></textarea>
                  </div>
                  <button className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-amber-500/25 flex items-center justify-center">
                    <span className="mr-2">⚡</span> Support Now
                  </button>
                  <p className="text-center text-sm text-gray-400 mt-4">
                    Your support helps fund epic adventures!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserPage
