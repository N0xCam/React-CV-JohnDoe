import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div className="Blog">
          <div id="banner"></div>
            <h2 id="title-blog"> BLOG</h2>
            <p id ="little-tittle-blog"> Retrouvez ici quelques articles sur le développement web.</p>
       
    <div id="col-tablette1">
    <div className='realisations'>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art1.png" className='img-blog' />
      <Card.Body>
        <Card.Title className='blog'>Coder son site en HTML/CSS</Card.Title>
        <Card.Text className='text'> 
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='realisations'>
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art2.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Vendre ses produits sur le web</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>


    <div className='realisations'>
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art4.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Coder en responsive design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>  

    <div className='realisations'>
    <div id="col-tablette2">
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art5.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Techniques de référencement</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='realisations'>
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art6.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Apprendre à coder </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='realisations'>
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art3.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Se positionner sur Google</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
       
       
        
    );
}

export default Blog;