'use client';

// 1. useEffect and with Loading state
// 2.swr,useSwr hook
import { useState, useEffect } from "react";
import useSWR from 'swr'

// Fetcher function for useSWR
const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }
  return res.json();
});

export default function ClientSideDataFetchPage() {
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);
  // const [error, setError] = useState(null);

  // // Fetch users from API
  // async function fetchUsers() {
  //   try {
  //     setLoading(true); // Start loading
  //     const response = await fetch(`https://dummyjson.com/users`);
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status} ${response.statusText}`);
  //     }
  //     const result = await response.json();
  //     setUsers(result.users); // Update users
  //   } catch (e) {
  //     setError(e.message); // Set error message
  //   } finally {
  //     setLoading(false); // Stop loading
  //   }
  // }

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)
 

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl text-blue-500">Loading Users...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl text-red-500">Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Client Side Data Fetch</h1>
      <ul className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-4">
        {data && data?.users && data?.users.length > 0 ? (
          data?.users.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-gray-100 rounded-md shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <p className="text-lg font-semibold">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-gray-600 text-sm">{user.email}</p>
              <p className="text-gray-500 text-sm">Phone: {user.phone}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">No users found.</p>
        )}
      </ul>
    </div>
  );
}
