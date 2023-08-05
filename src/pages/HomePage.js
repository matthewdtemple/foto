import { useState } from "react";
export const HomePage = () => {

    const [name, setName] = useState('Temple foto');

    return (
            <h1>
               Home works, {name} is my name
            </h1>  
    );
};