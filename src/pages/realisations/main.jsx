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
      <div className='card'>
      <Card>
      <Card.Img variant="top" src="/src/assets/realisations/fresh-food.png" className='realisations'/>
      <Card.Body>
        <Card.Title className='card.title'>Fresh Food</Card.Title>
        <Card.Text>
        <div className="card.text">
          Réalisation d'un site avec commande en ligne.
        </div>
        </Card.Text>
        <Button variant="primary" className='btn'>Voir</Button>
        <Card.Text>
          Site réalisé avec PHP et MySQL
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='card'>
    <Card>
      <Card.Img variant="top" src="/src/assets/realisations/restaurant-akira.png" className='realisations' />
      <Card.Body>
        <Card.Title className='card.title'>Restaurant Akira</Card.Title>
        <Card.Text>
        <div className="card.text">
         Réalisation d'un site vitrine.
         </div>
        </Card.Text>
        <Button variant="primary">Voir</Button>
        <Card.Text>
         Site réalisé avec WordPress
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
 

    <div className='card'>
    <Card>
      <Card.Img variant="top" src="/src/assets/realisations/bien-etre.png" />
      <Card.Body>
        <Card.Title className='Card.title'>Espace bien-être</Card.Title>
        <Card.Text>
          <div className="card.text">
          Réalisation d'un site vitrine pour un patricien de bien-être.
          </div>
        </Card.Text>
        <Button variant="primary">Voir</Button>
        <Card.Text>
          Site réalisé en HTML/CSS
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}



export default Realisations;