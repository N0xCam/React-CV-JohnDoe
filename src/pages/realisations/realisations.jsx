import Header from "../home/header";
import Footer from "../home/footer"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./realisations.css"

function Realisations () {
    return (
        <>
        <Header/>
        
        <div className="Realisations">
        <img src="/src/assets/banner-mobile.jpg" className="ban-real"></img>

        <div className="title">
        <h2 className="title-realisations"> PORTFOLIO</h2>
        <h3 className="little-title-realisations"> Voici quelques-unes de mes réalisations.</h3>
        </div>

        <div className="border-real"></div>

      <div className="container-fluid my-reals">
      <div className="container-fluid realisations">
      <div className="container-fluid col2-tabl">
      <div className='container-fluid card'>
      <div className="real">
      <Card className="container-fluid cards-real">
      <Card.Img variant="top" src="/src/assets/realisations/fresh-food.png" className='container-fluid img-realisations'/>
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
    </div>

    <div className="container-fluid real">
    <div className='container-fluid card'>
    <Card  className="container-fluid cards-real">
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
    </div>
 
    <div className="container-fluid real">
    <div className='container-fluid card'>
    <div className="container-fluid col2-tabl">
    <Card  className="container-fluid cards-real">
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
    </div>
    </div>
        <Footer/>
        </>
    );
}

export default Realisations;