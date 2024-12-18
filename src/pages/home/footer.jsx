import React from "react";
import {Link} from "react-router-dom";
import "./home.css";


const Footer = () => {
return (

<div className="footer">

<div className="container-fluid">
  <div className="container-fluid footer-tablette-col1">
        <div className="container-fluid box">
          <div className="container-fluid footer-desktop">
          <div className="container-fluid address">
            <h3 className="brandfooter">John Doe</h3>
            <address className="footer-address">
            <em className="foot-addr">40 Rue Laure Diebold </em> 
            <em className="foot-addr">69009 Lyon, France </em>
            <em className="foot-addr"> Téléphone : 06 20 30 40 50 </em>
            </address>

            <div className="container-fluid medias">
              <div className="Github">
              <a href="https://github.com/github-john-doe"  target="_blank"><img src="./src/assets/github_logo.png" className="Github"></img> </a>
              </div>
              <div className="X">
              <a href="https://twitter.com"  target="_blank"> <img src="./src/assets/footer_X.png"  className="X"></img></a>
              </div>
              <div className="LinkedIn">
              <a href="https://linkedin.com"  target="_blank"><img src="./src/assets/footer_LINKEDin.png" href="https://github.com" className="LinkdIn"></img></a>
              </div>
              </div>
              </div>
              
              <div className="container-fluid  footer-desktop">
              <div className="container-fluid  liens-utiles">
            <h3>Liens utiles</h3>
            <Link to={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg> Accueil
            </Link>
            <a href={"#about"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>  À propos
            </a>
            <Link to={"/services"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>  Services
            </Link>
            <Link to={"/contact"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>  Me contacter
            </Link>
            <Link to={"/mentions"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>  Mentions légales
            </Link>
          </div>
          </div>
          </div>
          
          <div className="container-fluid footer-desktop">
          <div className="container-fluid footer-tablette-col">
          <div className="container-fluid  liens-realisations">
            <h3 className="container-fluid  title-realisation">Mes dernières réalisations</h3>
            <Link to={"/realisations"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg> Fresh Food
            </Link>
            <Link to={"/realisations"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>  Restaurant akira
            </Link>
            <Link to={"/realisations"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>  Espace bien-être
            </Link>
          </div>
          </div>

          <div className="container-fluid footer-desktop">
          <div className="container-fluid  liens-articles">
            <h3 id="mylastart">Mes derniers articles</h3>
            <Link to={"/blog"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>  Coder son site en HTML/CSS
            </Link>
            <Link to={"/blog"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>  Vendre ses produits sur le web
            </Link>
            <Link to={"/blog"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="chevron" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>  Se positionner sur google
            </Link>
          </div>
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