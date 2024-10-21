import "./mentions.css"

function Mentions() {
    return (
        <div id="mentions">

    
      <h2 className="title">Mentions légales</h2>

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
              <h3>John Doe</h3>
              <address>
                <em>
                  
                  40 Rue Laure Diebold, 69009 Lyon, France
                </em>
                <em>
                    06 20 30 40 50
                  </em>
                <em>john.doe@gmail.com </em>
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
            <div className="accordion-body">
              le site est hébergé par Always Data
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
            <div className="accordion-body">
              Site développé par John Doe, étudiant au CEF.
              Les images libres de droit sont issues du site Pixabay.
              <a
                className="credits"
                href="https://www.pixabay.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Mentions