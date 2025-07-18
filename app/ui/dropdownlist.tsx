'use client';

import { useState } from 'react';

export default function Dropdownlist() {
    const [food,setFood] =useState('apple');
     return (
        <>
            <select value={food} onChange={(e) => setFood(e.target.value)}>
                <option value='apple'>Apple</option>
                <option value='banana'>Banana</option>
                <option value='orange'>Orange</option>


            </select>
        <div> Food : {food}</div>
        </>

     )

}