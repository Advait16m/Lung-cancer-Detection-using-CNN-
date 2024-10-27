import "./Css/Home.css"
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="main">
        <h1>Lung Cancer Detection</h1>
        <h3></h3>
        <div>
        <Link to="/lung"><button>Get started</button></Link>
            
        </div>
        </div>
    )
}