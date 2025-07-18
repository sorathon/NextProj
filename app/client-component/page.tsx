'use client';

import { use, useState } from "react";

export default function Clientcomponent() {
    const [item] = useState(['apple', 'banana', 'orange']);
    
    return (
        <div>
            <h1>Client Component</h1>
            <ul>
                {item.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );

}

