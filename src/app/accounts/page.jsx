import { redirect } from "next/navigation";

export default function Accounts() {

    const userProfile = null;
    if (userProfile === null) redirect('profile');
    return (
        <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
            <h1 style={{ color: '#333', fontSize: '2rem' }}>Accounts</h1>
        </main>
    );
    }