"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useSession, signIn } from 'next-auth/react';

const page = () => {

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <h1>Dashboard</h1> <h1>Dashboard</h1> <h1>Dashboard</h1> <h1>Dashboard</h1> <h1>Dashboard</h1> <h1>Dashboard</h1> <h1>Dashboard</h1>
    </div>
  )
}

export default page
