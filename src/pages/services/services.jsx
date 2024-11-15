import Header from "../home/header";
import Footer from "../home/footer";
import "./services.css"

function Myservices () {

        return (
        <>
        
        <Header/>
        <div className="Services">


<img src="/src/assets/banner-mobile.jpg" className="ban-services"></img>


<h2 className="title-service"> MON OFFRE DE SERVICES</h2>
<h3 className="presta"> Voici les prestations sur lesquelles je peux intervenir.</h3>

<div className="border-services"></div>
<div className="col">
<article className="descri-services">
    <img src="./src/assets/services/1.png" className="img-article"></img>
    <h4 className="my-services"> UX DESIGN </h4>
    <p className="text-service"> L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
</article>

<article className="descri-services">
    <img src="./src/assets/services/2.png" className="img-article"></img>
    <h4 className="my-services"> Développement web </h4>
    <p className="text-service"> Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP</p>
</article>

<article className="descri-services">
    <img src="./src/assets/services/3.png" className="img-article"></img>
    <h4 className="my-services"> Référencement</h4>
    <p className="text-service"> Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i> améliorer sa  position </i> dans les résultats des moteurs de recherche.</p>
</article>
</div>

</div>
        <Footer/>
        </>
);
}

export default Myservices;