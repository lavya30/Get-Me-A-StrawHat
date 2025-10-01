"use client";
import React from 'react';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white relative">
      <Navbar />
      <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-8 text-amber-400 drop-shadow">Welcome to Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Stats Cards */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-amber-400 mb-2">1,500,000</span>
            <span className="text-lg text-gray-200">Total Bounty</span>
          </div>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-amber-400 mb-2">123</span>
            <span className="text-lg text-gray-200">Crew Members</span>
          </div>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-amber-400 mb-2">47</span>
            <span className="text-lg text-gray-200">Adventures</span>
          </div>
        </div>
        {/* Recent Activity Section */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Recent Activity</h2>
          <ul className="space-y-4">
            <li className="bg-white/5 p-4 rounded-lg border border-white/10">
              <span className="font-semibold text-amber-300">lavya</span> donated <span className="font-bold">30rs</span> with a message: <span className="italic text-gray-300">&ldquo;Thank you for the adventure!&rdquo;</span>
            </li>
            <li className="bg-white/5 p-4 rounded-lg border border-white/10">
              <span className="font-semibold text-amber-300">sanji</span> joined your crew!
            </li>
            <li className="bg-white/5 p-4 rounded-lg border border-white/10">
              <span className="font-semibold text-amber-300">zoro</span> completed an adventure.
            </li>
          </ul>
        </div>
        {/* Call to Action */}

      </main>
    </div>
  );
}
