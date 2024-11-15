import Header from "../home/header";
import Footer from "../home/footer";
import "../blog/blog.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MyBlog () {

        return (
        <>
        
       
<Header/>
        <div className="Blog">
        <img src="/src/assets/banner-mobile.jpg" className="ban-blog"></img>
        
         
            <h2 className="title-blog"> BLOG</h2>
            <p className ="little-tittle-blog"> Retrouvez ici quelques articles sur le développement web.</p>

    <div className="border-blog"></div>
  
    <container>
    <Row>
    <Col  xs={12} md={6} lg={4}>

    <Card style={{ width: '27rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art1.png" className="img-blog"/>
      <Card.Body>
        <Card.Title className="title-art-blog">Coder son site en HTML/CSS</Card.Title>
        <Card.Text className="text-blog">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="but-blog">Lire la suite</Button>
        <Card.Text className="date-blog">
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    
    <Col xs={12} md={6} lg={4}>
    <Card style={{ width: '27rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art2.png" className="img-blog" />
      <Card.Body>
        <Card.Title className="title-art-blog">Vendre ses produits sur le web</Card.Title>
        <Card.Text className="text-blog">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="but-blog">Lire la suite</Button>
        <Card.Text className="date-blog">
          Publié le 20 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    <Col  xs={12} md={6} lg={4}>
    <Card style={{ width: '27rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art3.png" className="img-blog" />
      <Card.Body>
        <Card.Title className="title-art-blog">Se positionner sur Google</Card.Title>
        <Card.Text className="text-blog">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="but-blog">Lire la suite</Button>
        <Card.Text className="date-blog">
          Publié le 31 juillet 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    
    
    <Row>
    <Col  xs={12} md={6} lg={4}>
    <Card style={{ width: '27rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art4.png" className="img-blog" />
      <Card.Body>
        <Card.Title className="title-art-blog">Coder en responsive design</Card.Title>
        <Card.Text  className="text-blog">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="but-blog">Lire la suite</Button>
      </Card.Body>
      <Card.Text className="date-blog">
          Publié le 30 juillet 2022
        </Card.Text>
    </Card>
    </Col>
    
    <Col  xs={12} md={6} lg={4}>
    <Card style={{ width: '27rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art5.png" className="img-blog" />
      <Card.Body>
        <Card.Title className="title-art-blog">Techniques de référencement</Card.Title>
        <Card.Text  className="text-blog">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="but-blog">Lire la suite</Button>
      </Card.Body>
      <Card.Text className="date-blog">
          Publié le 12 juillet 2022
        </Card.Text>
    </Card>
    </Col>
  
    <Col  xs={12} md={6} lg={4}>
    <Card style={{ width: '27rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art6.png" className="img-blog" />
      <Card.Body>
        <Card.Title className="title-art-blog">Apprendre à coder</Card.Title>
        <Card.Text  className="text-blog">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="but-blog">Lire la suite</Button>
      </Card.Body>
      <Card.Text className="date-blog">
          Publié le 1 août 2022
        </Card.Text>
    </Card>
    </Col>
    </Row>
   
    </container>
    </div>

    <Footer/>
        </>
);
}

export default MyBlog;