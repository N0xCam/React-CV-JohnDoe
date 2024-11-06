import Header from "../home/header";
import Footer from "../home/footer";
import "./contact.css";

function Contact () {
    return (
        <>
        <Header/>

        <div className="container-fluid box-contact">
        <div id="mycontactpage">
        <div id="contact">
            <div id="content">
            <h2 id="tit-contact"> Me contacter </h2>
            <p id="little-title-contact"> Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>

            <div className="border-contact1"></div>

            <div id="tab">
            <div className="tablette">
            <div id="my-form">
            <h3 id="title-form"> Formulaire de contact</h3>
            <div className="border-contact2"></div>
            <form>
            <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Votre nom"
                  required={true}
                />
            </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Votre adresse email"
                  required={true}
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Votre numéro de téléphone"
                  required={true}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Sujet"
                  required={true}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Votre message"
                  required={true}
                ></textarea>
                </div>

                <button id="btn"> Envoyer </button>
            </form>
            </div>
            </div>
            

            <div className="tablette">
            <div id="my-contact">
            <h3 id="title-contact"> Mes coordonnées </h3>
            <div className="border-contact3"></div>
            
            <address id="contact-address">
                <em className="text-address"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg> 40 Rue Laure Diebold, 69009 </em>
                <em className="text-address"> Lyon, France</em>
                <em className="text-address"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg> 06 20 30 40 50</em>
            </address>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621757!2d4.796403976016823!3d45.77866197108088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1711636961588!5m2!1sfr!2sfr"
            ></iframe>
            </div>
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

export default Contact;