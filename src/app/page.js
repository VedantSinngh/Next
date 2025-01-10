'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './globals.css';

export default function Home() {
  const router = useRouter();

  function handleNavigate() {
    router.push('/products');
  }
  function handleNavigateToAccounts() {
    router.push('/accounts');
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-100 ">
      <div className="bg-black shadow-md rounded-xl p-8 max-w-md text-center border-2 border-black">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Welcome Home</h1>
        <div className='border border-black p-4 rounded-md'>
        <p className="text-gray-600 text-base mb-6">
          Explore our pages and discover more features!
        </p>

        <div className="space-y-4">
          <Link
            href="/products"
            className="block w-full text-white font-bold text-lg py-3 rounded-md bg-blue-500 hover:bg-blue-700 transition-colors shadow-lg"
          >
          Products Page
          </Link>
          <Link
            href="/accounts"
            className="block w-full text-white font-bold text-lg py-3 rounded-md bg-green-500 hover:bg-green-700 transition-colors shadow-lg"
          >
            Accounts Page
          </Link>
          <Link
            href="/products/1/1"
            className="block w-full text-white font-bold text-lg py-3 rounded-md bg-slate-700 hover:bg-slate-800 transition-colors shadow-lg"
          >
            Slug
          </Link>
          <Link
            href="/products/2"
            className="block w-full text-white font-bold text-lg py-3 rounded-md bg-red-800 hover:bg-red-400 transition-colors shadow-lg"
          >
            InsideRoute
          </Link>

        </div>
        
        </div>

        <h2 className="text-lg font-semibold text-gray-700 mt-8">
          Or use a different way of navigation:
        </h2>
        <button
          onClick={handleNavigate}
          className="w-full mt-4 text-white font-bold text-lg py-3 rounded-md bg-purple-500 hover:bg-purple-700 transition-colors shadow-lg"
        >
          Products Page (useRouter)
        </button>
        
      </div>
    </main>
  );
}
