'use client';

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  
  return (
    
      <button onClick={() => router.push("/dashboard")} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Go to Dashboard
      </button>
    
  );
}