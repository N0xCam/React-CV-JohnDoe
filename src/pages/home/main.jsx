import React from "react";

const Home = () => {

    return (
        
        <div className="home">
           
           <header id="Introduction">
            <h2 id="Hello"> Bonjour, je suis John Doe</h2>
            <h2 id="Job"> Développeur web full stack</h2>
            <div id="bouton">
            <a href="#presentation">  <button>  En savoir plus</button> </a>
            </div>
            </header>

            <div id="presentation">
            <div className='colonnes'>
            <section id="presentation">
                <div id='test'>
                <h2 id="about"> À propos </h2>
              
                <article className="mypresentation">
                <p className='text'>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d' <strong>intégrateur-développeur web </strong>au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. </p>

                <p className='text'>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>

                <p className='text'>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>

                </article>
                </div>
            </section>
            </div>

            <div id="second">
            <div className='colonnes'>
                
               <div id="me"></div>
              
                    <h3 id="myskills"> Mes compétences </h3>     

                <div id="skills">
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
  );
}




export default Home;
