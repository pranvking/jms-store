// Signup Page Component
'use client';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://127.0.0.1:8000/api/register/', {
        email,
        password,
      });

      if (res.status === 201) {
        router.push('/signin');
      }
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      setError(
        err.response?.data?.error || 'Signup failed. Please check your credentials.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-backGround flex flex-col items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-navBar p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-white text-3xl font-sans mb-6 text-center">Sign Up</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-white text-navBar placeholder-gray-400 focus:outline-none"
          aria-label="Email"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-white text-navBar placeholder-gray-400 focus:outline-none"
          aria-label="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-white text-navBar placeholder-gray-400 focus:outline-none"
          aria-label="Confirm Password"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md font-semibold text-lg transition"
        >
          Sign Up
        </button>

        <p className="text-gray-400 text-sm text-center">
          Already have an account?{' '}
          <Link href="/signin" className="text-blue-400 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
