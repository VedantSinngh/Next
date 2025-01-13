// fetch

import Link from "next/link";

async function fetchListofUsers() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/users');
        const result = await apiResponse.json();

        return result.users;

    }catch(error) {
        throw new Error(error);
    }

}
export default async function ServerSideDataFetchPage({ data }) {

    const listOfUsers = await fetchListofUsers();
    // console.log(listOfUsers);
    
    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Server Side Data Fetch</h1>
      <ul className="text-xl font-semibold list-inside ">
        
        {
        listOfUsers && listOfUsers.length > 0 ?
        listOfUsers.map(( users => 
        <li className="text-3xl mt-5 cursor-pointer">
          <Link href={`/server-data-fetch/${users.id}`} key={users.id}>
          {users.firstName} 
          </Link>
        </li>) )
        : null}
      </ul>
    
      {/* <p className=" ">{data}</p> */}
    </div>
  );
}