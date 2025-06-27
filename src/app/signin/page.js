'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
const comehere =() => {
  router.push('/hide');
};

  return (
    <div className="min-h-screen bg-backGround flex flex-col items-center justify-center p-6">
      <form
        onChange={comehere}
        className="bg-navBar p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-white text-3xl font-sans mb-6 text-center">Log In</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-white text-navBar focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-white text-navBar placeholder-gray-400 focus:outline-none"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-black text-white text-lg py-3 rounded-md font-semibold transition"
        >
          Log In
        </button>

        <p className="text-gray-400 text-sm text-center">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;