import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/products" className="text-blue-500 border-2 no-underline font-bold hover:text-blue-700">
        Navigate Products Page
      </Link>
      <Link href="/accounts" className="text-blue-500 border-2 no-underline font-bold hover:text-blue-700">
        Navigate Accounts Page
      </Link>
      
    </main>
  );
}
