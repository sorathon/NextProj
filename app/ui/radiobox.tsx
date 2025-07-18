'use client'   ;
import { useState } from 'react';

export default function RadioBox() {
    const [gender,setGender] = useState('male');
    const handleChange = (e: any ) => setGender(e.target.value);

    return (
        <>
            <input type='radio' value='male' checked={gender == 'male'} onChange={handleChange}/>  Male
             <input type='radio' value='female' checked={gender == 'female'} onChange={handleChange}/>  Female

             <div>
                <div>Your select gender</div>
                <div>Gender : {gender}</div>
             </div>
        </>

    );


}
