'use client';

import axios from 'axios';

export default function Page() {
    const doPost = async () => {
        const payload ={
            name: 'John Doe',
            age: 30
        };
        await axios.post('https://localhost:3001', payload)
    };

    const doGet = async () => {
        const response = await axios.get('https://localhost:3001');
        console.log(response.data);
    }
    const doPut = async () => {
        const payload = {
            name: 'Jane Doe',
            age: 25
        };
        await axios.put('https://localhost:3001', payload);
    }
    const doDelete = async () => {
        await axios.delete('https://localhost:3001');
    };
    return   <div>
       
           
            <button onClick={doPost}>POST</button>
            <button onClick={doGet}>GET</button>
            <button onClick={doPut}>PUT</button>
            <button onClick={doDelete}>DELETE</button>
        </div>
    
}