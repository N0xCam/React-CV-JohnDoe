import React from "react";
import {Link} from "react-router-dom";
import "./home.css";


const Footer = () => {
return (

<div id="footer">

<div className="container">
        <div className="box">
          <div className="address">
            <h3 id="brandfooter">John Doe</h3>
            <address>
            <em>40 Rue Laure Diebold </em> 
            <em>69009 Lyon, France </em>
            <em> Téléphone : 06 20 30 40 50 </em>
            </address>

            <div className="medias">
              <div id="Github">
              <img src="./src/assets/github_logo.png" href="https://github.com"></img>
              </div>
              <div id="X">
              <img src="./src/assets/footer_X.png" href="https://github.com" className="X"></img>
              </div>
              <div id="LinkedIn">
              <img src="./src/assets/footer_LINKEDin.png" href="https://github.com" className="LinnkdIn"></img>
              </div>
              <div className="liens-utiles">
            <h3>Liens utiles</h3>
            <Link to={"/"}>
              Accueil
            </Link>
            <a href={"#about"}>
              À propos
            </a>
            <Link to={"/services"}>
              Services
            </Link>
            <Link to={"/contact"}>
              Me contacter
            </Link>
            <Link to={"/mentions"}>
              Mentions légales
            </Link>
          </div>
          
          <div className="liens-realisations">
            <h3>Mes réalisations</h3>
            <Link to={"/realisations"}>
              Fresh Food
            </Link>
            <Link to={"/realisations"}>
              Restaurant akira
            </Link>
            <Link to={"/realisations"}>
              Espace bien-être
            </Link>
          </div>

          <div className="liens-articles">
            <h3>Mes derniers articles</h3>
            <Link to={"/blog"}>
              Coder son site en HTML/CSS
            </Link>
            <Link to={"/blog"}>
              Vendre ses produits sur le web
            </Link>
            <Link to={"/blog"}>
              Se positionner sur google
            </Link>
          </div>
        </div>
      </div>

      <div className="copyright">&copy; Designed by John Doe</div>
    </div>
    </div>
    </div>
  );
}


export default Footer;