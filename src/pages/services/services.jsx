import Header from "../home/header";
import Footer from "../home/footer";

function Myservices () {

        return (
        <>
        
        <Header/>
        <div id="services">

<div id="banner"></div>

<h2 id="title-services"> MON OFFRE DE SERVICES</h2>
<h3 id="presta"> Voici les prestations sur lesquelles je peux intervenir.</h3>

<div id="col">
<article className="services">
    <img src="./src/assets/services/1.png" className="img-article"></img>
    <h4> UX DESIGN </h4>
    <p className="text-service"> L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
</article>

<article className="services">
    <img src="./src/assets/services/2.png" className="img-article"></img>
    <h4> Développement web </h4>
    <p className="text-service"> Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP</p>
</article>

<article className="services">
    <img src="./src/assets/services/3.png" className="img-article"></img>
    <h4> Référencement</h4>
    <p className="text-service"> Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
</article>
</div>

</div>
        <Footer/>
        </>
);
}

export default Myservices;