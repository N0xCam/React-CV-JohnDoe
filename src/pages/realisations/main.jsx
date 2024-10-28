import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../realisations/realisations.css";


const Realisations = () => {
    return (
        <div className="Realisations">
            <div id="banner"> </div>

        <div id="title">
        <h2 id="title-realisations"> PORTFOLIO</h2>
        <h3 id="little-title-realisations"> Voici quelques-unes de mes réalisations.</h3>
        </div>

      <div id="realisations">
      <div id="col2-tabl">
      <div className='card'>
      <Card>
      <Card.Img variant="top" src="/src/assets/realisations/fresh-food.png" className='img-realisations'/>
      <Card.Body>
        <Card.Title className='card-title-real'>Fresh Food</Card.Title>
        <Card.Text>
        <div className="card-text">
          Réalisation d'un site avec commande en ligne.
        </div>
        </Card.Text>
        <Button className='btn-real'>Voir</Button>
        <Card.Text className='techno'>
          Site réalisé avec PHP et MySQL
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='card'>
    <Card>
      <Card.Img variant="top" src="/src/assets/realisations/restaurant-akira.png" className='img-realisations' />
      <Card.Body>
        <Card.Title className='card-title-real'>Restaurant Akira</Card.Title>
        <Card.Text>
        <div className="card-text">
         Réalisation d'un site vitrine.
         </div>
        </Card.Text>
        <Button className='btn-real'>Voir</Button>
        <Card.Text className='techno'>
         Site réalisé avec WordPress
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
 

    <div className='card'>
    <div id="col2-tabl">
    <Card>
      <Card.Img variant="top" src="/src/assets/realisations/bien-etre.png" className='img-realisations' />
      <Card.Body>
        <Card.Title className='card-title-real'>Espace bien-être</Card.Title>
        <Card.Text>
          <div className="card-text">
          Réalisation d'un site vitrine pour un patricien de bien-être.
          </div>
        </Card.Text>
        <Button className='btn-real'>Voir</Button>
        <Card.Text className='techno'>
          Site réalisé en HTML/CSS
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </div>
  );
}



export default Realisations;