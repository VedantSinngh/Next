async function fetchDetails(id) {
    try {
        const response = await fetch(`https://dummyjson.com/user/${id}`);
        const result = await response.json();
        return result;
    }catch(e) {
        throw new Error(e);
    }
}

export default async function UserDetails({params}) {

    console.log(params);

    const userDetails = await fetchDetails(params.details);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-white text-white p-8">
    <h1 className="text-5xl font-extrabold mb-8 drop-shadow-md">
        User Details
    </h1>
    <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 max-w-lg w-full">
        <div className="text-xl font-semibold space-y-4">
            <p className="text-2xl mt-5 flex items-center">
                <span className="font-bold w-auto">Name: </span>
                <span> {userDetails.firstName} {userDetails.lastName}</span>
            </p>
            <p className="text-2xl flex items-center">
                <span className="font-bold w-32">Email:</span>
                <span>{userDetails.email}</span>
            </p>
            <p className="text-2xl flex items-center">
                <span className="font-bold w-32">Phone:</span>
                <span>{userDetails.phone}</span>
            </p>
        </div>
    </div>
</div>

    );
}
