import { Container } from "./style";
import logo from '../../assets/Vector 1.png'
import { Link } from "react-router-dom";

export function Nav(){
  return (
    <Container>
      <div>
        <Link to="/"><img src={logo} alt="" /></Link>
      
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/technologies">Technologies</Link></li>
        </ul>
      </div>
    </Container>
  )
}