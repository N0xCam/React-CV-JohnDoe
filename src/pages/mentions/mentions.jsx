import Header from "../home/header";
import Footer from "../home/footer";

const Mentions = () => {
    return (
            <>
            <Header/>
            <div id="mentions">
      <head>
        <meta name="robots" content="noindex, nofollow"/>
      </head>


      <h2 className="title-legal">Mentions légales</h2>

      <div className="accordion" id="accordionMentions">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true">
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              <h3 id="legal-name">John Doe</h3>
              <address>
                <em>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                  40 Rue Laure Diebold 
                </em>
                <em> 69009 Lyon, France</em>
                <em id="tel">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>  06 20 30 40 50
                  </em>
                <em id="mail"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg> john.doe@gmail.com </em>
              </address>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body-herb">
              Le site est hébergé par CodeSandBox.
              <a
                className="hebergeur"
                href="https://www.pixabay.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body-cr">
              Site développé par John Doe, étudiant au CEF.
              Les images libres de droit sont issues du site 
              <a id="credit"
                className="credits"
                href="https://www.pixabay.com"
                target="_blank"
                rel="noopener noreferrer"
              >
               Pixabay.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
            <Footer/>
            
            </>
        );
    
}

export default Mentions;
