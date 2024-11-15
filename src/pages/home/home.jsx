import Header from "./header";
import Footer from "./footer";

function MyHome () {

        return (
        <>
        
        <Header/>
        <div className="home">
           
           <div className="container-fluid myhome">
           <header className="container-fluid Introduction">
            <div className="filter">
            <h1 className="Hello"> Bonjour, je suis John Doe </h1>
            <h2 className="Job"> Développeur web full stack</h2>
            <div className="bouton-home">
            <button className="mybut-home">  <a href="#about" className="mybut-home"> En savoir plus  </a>  </button>
            </div>
            </div>
            </header>

            <div className="container-fluid aboutme">
            <div className='container-fluid className colonnes'>
            <section id="container-fluid presentation">
               
                <h2 id="about"> À propos </h2>
              
                <article className="mypresentation">
                <p className='pres-text'>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d' <strong>intégrateur-développeur web </strong>au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web.</strong> </p>

                <p className='pres-text'>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack.</strong></p>

                <p className='pres-text'>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>

                </article>
               
            </section>
           
            </div>

            <div className="container-fluid second-col">
            <div className='container-fluid colonnes'>
                
               <div className="container-fluid me"></div>
              
                    <h3 className="container-fluid myskills"> Mes compétences </h3>     

                <div className="container-fluid skills">
                    <span className="descr-skills">html5 90%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <span className="descr-skills">css3 80%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Info example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-info"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <span className="descr-skills">javascript 70%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <span className="descr-skills">php 60%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <span className="descr-skills">react 50%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "50%" }}
                ></div>
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

export default MyHome;