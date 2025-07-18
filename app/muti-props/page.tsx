'use client'   ;

interface PageProps {
    name: string;
    age : number;
    email : string;
    isAdmin : boolean;

}   

export default function UserProfile({name,age,email,isAdmin} : PageProps) {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Admin Status: {isAdmin ? 'Yes' : 'No'}</p>
        </div>

    )
}