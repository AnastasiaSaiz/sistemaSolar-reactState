import{useState} from "react";

const Planeta = (props) => {
    const[planeta, setPlaneta] = useState(props);
    const borrarPlaneta= ()=>{
        setPlaneta("")
    }
    return (
        <div>
            <h1>{planeta.nombre}</h1>
            <p>{planeta.temperatura}</p>
            <p>{planeta.color}</p>
            <img src={planeta.imagen} alt="" />
            <button onClick={borrarPlaneta}>Borrar</button>
        </div>
    )
}

export default Planeta;