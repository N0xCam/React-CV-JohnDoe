import Header from "../home/header";
import Footer from "../home/footer";
import "../blog/blog.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MyBlog () {

        return (
        <>
        
       
<Header/>
        <div className="Blog">
          <div className="ban-blog"></div>
         
            <h2 className="title-blog"> BLOG</h2>
            <p className ="little-tittle-blog"> Retrouvez ici quelques articles sur le développement web.</p>

    <div id="border-blog"></div>
    <div className="blog-desktop">
    <div className='blog-tablette'>
    <div className='realisations'>
    <Card style={{ wclassNameth: '24rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art1.png" className='img-blog' />
      <Card.Body>
        <Card.Title className='blog'>Coder son site en HTML/CSS</Card.Title>
        <Card.Text className='text'> 
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="btn-blog">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    <div className='realisations'>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art2.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Vendre ses produits sur le web</Card.Title>
        <Card.Text className='text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="btn-blog">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>

    <div className="blog-desktop">
    <div className='blog-tablette'>
    <div className='realisations'>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art4.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Coder en responsive design</Card.Title>
        <Card.Text className='text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="btn-blog">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>

    <div className="blog-desktop">
    <div className='realisations'>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art5.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Techniques de référencement</Card.Title>
        <Card.Text className='text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="btn-blog">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>


    <div className="blog-desktop">
    <div className='blog-tablette'>
    <div className='realisations'>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art6.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Apprendre à coder </Card.Title>
        <Card.Text className='text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="btn-blog">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='realisations'>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art3.png" className='img-blog'/>
      <Card.Body>
        <Card.Title className='blog'>Se positionner sur Google</Card.Title>
        <Card.Text className='text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="btn-blog">Lire la suite</Button>
        <Card.Text className="techno-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </div>



    <Footer/>
        </>
);
}

export default MyBlog;