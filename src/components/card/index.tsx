import { Container } from "./style";

import spotify from "../../assets/spotify.png";

export function Card(){
  return(
    <Container>
      
        <img src={spotify} alt="" />
        <a href="https://github.com/htzxd/spotifyRecomendation" target="_blank">
          <h2>Spotify Recommended</h2>
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          In modi nostrum rem. Accusamus impedit soluta voluptates eius 
          deleniti quia modi cum at. Dignissimos 
          iusto officia repellat molestias praesentium. Laudantium, atque.
        </p>
      
    </Container>
  )
}