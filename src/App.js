import sistemaSolar from "./sistemaSolar";
import Planeta from "./planeta";
import { useState } from "react";


function App() {
  const [sistemaEstado, setSistemaEstado] = useState(sistemaSolar);


  const borrar = () => {
    const array = [];
    for (let i = 0; i < sistemaEstado.length - 1; i++) {
      array.push(sistemaEstado[i]);
    }
    setSistemaEstado(array);

      };


      const mostrarTodos=() =>{
        setSistemaEstado(sistemaSolar)
      }
  const sistema = sistemaEstado.map((planeta) => {
    return (
       <Planeta 
       nombre={planeta.nombre} 
       color={planeta.color} 
       temperatura={planeta.temperatura} 
       imagen={planeta.imagen} />


    //primera parte//
    // <div>
    //   <h1>{planeta.nombre}</h1>
    //   <p>{planeta.temperatura}</p>
    //   <p>{planeta.color}</p>
    //   <img src={planeta.imagen} alt="" />


    //  </div>

  )});

  return (
    <div>
    {sistema}
    <button onClick = { borrar } > borrar</button > 
    <button onClick = { mostrarTodos } > mostrar todos</button > 
    </div>
  );

}

export default App;
