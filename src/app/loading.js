"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 to-blue-100">
      <div className="bg-black shadow-md rounded-xl p-8 max-w-md text-center border-2 border-black">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Loading...</h1>
      </div>
    </div>
  );
}
