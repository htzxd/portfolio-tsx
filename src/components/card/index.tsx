import { Container } from "./style";



interface CardProps{
  title: string;
  description: string;
  imageURL: string;
  redirect: string
}

export function Card({ title, description, imageURL, redirect }: CardProps){
  return(
    <Container>
      
        <img src={imageURL} alt="project photo" />
        <a href={redirect} target="_blank">
          <h2>{title}</h2>
        </a>
        <p>
          {description}
        </p>
        
    </Container>
  )
}