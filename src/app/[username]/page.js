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

         
          </div>
        </div>
      </div>
 
  )
}

export default UserPage
