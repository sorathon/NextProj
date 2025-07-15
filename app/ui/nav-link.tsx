import  Link from "next/link";

export default function NavLink(){
    return (
        <nav className="flex flex-col gap-4 p-4 bg-gray-200">
        <Link href="/" >  
            Go to Home
        </Link>
        <Link href="/dashboard" >
            Go to dashboard  
        </Link>
        </nav>
    );  

}