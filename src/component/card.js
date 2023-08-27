import './card.css'
import bg from'../images/duke.jpg'
function Card(hariss){
    return(
        <div id="card">
            <img src = {hariss.path}/>
            <h1>{hariss.title}</h1>
             <p>{hariss.population}</p>
        </div>
    )
}
export default Card