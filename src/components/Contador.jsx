import { useState } from 'react'

const Contador = ({inicial, factor}) => {
    
    const [contador, setContador] = useState(inicial);


    const aumentar = ()=>{
        setContador((actual) => actual + factor);
    }
    
    const disminuir = ()=>{
        setContador((actual) => actual - factor);
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <hr />

            <button onClick={aumentar}>Amenta</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}

export default Contador;