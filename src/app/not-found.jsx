import Link from "next/link";
export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-100">
        <div className="bg-black shadow-md rounded-xl p-8 max-w-md text-center border-2 border-black">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-6">404: Not Found</h1>
            <p className="text-lg text-blue-400 mb-5">The page you are looking for does not exist.</p>
            <Link className='text-red-200 text-xl p-3 border-2 mt-6 rounded-md hover:text-blue-700' href="/">Home Page </Link>
        
        </div>
        </div>
    );
    }