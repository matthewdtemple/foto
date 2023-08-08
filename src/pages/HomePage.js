import { useState } from "react";
export const HomePage = () => {

    const [name, setName] = useState('Temple foto');

    return (
        <div>
            <h1>
               Home works, {name} is my name test
            </h1>  
      </div>
    );
};