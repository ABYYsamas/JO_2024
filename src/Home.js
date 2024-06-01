import React from "react";
import { Link } from "react-router-dom";
import "./JO.css";
import logo from "./Paris.png";
import boutiques from "./Boutiques.jpg";
import FAQQ from "./FAQQ.png";
import images from "./images.jpg";

const Home = () => {
  return (
    <div>
      <header>
        <div className="menu">
          <img src={logo} alt="Logo" className="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/Boutiqueoffcielles">Boutique officielles</Link>
              </li>
              <li>
                <Link to="#">Événement</Link>
              </li>
              <li>
                <Link to="/FAQ">FAQ</Link>
              </li>
              <li>
                <Link to="/Carte">Carte</Link>
              </li>
              <li>
                <Link to="/sitesdeCompétition">Sites de compétition</Link>
              </li>
            </ul>
          </nav>
        </div>
        <section className="recherche">
          <h1>
            PARIS 2024 <br />
            LES REPONSES A TOUTES VOS QUESTIONS
          </h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rechercher dans les données disponibles (titre, mots clés, sport...)"
            />
            <button>→</button>
          </div>
        </section>
        <section className="featured-data">
          <div className="data-card">
            <img src={FAQQ} alt="FAQQ" className="FAQQ" />
            <h2>FAQ</h2>
            <p>Trouvez la réponse à vos questions</p>
            <div className="data-links">
              <Link to="/FAQ">Questions</Link>
              <Link to="/FAQ">Réponse</Link>
              <Link to="/FAQ">Carte</Link>
            </div>
          </div>
          <div className="data-card">
            <img src={images} alt="images" className="evenements" />
            <h2>Les événements labellisés Olympiade Culturelle</h2>
            <p>Les sites de compétitions</p>
            <div className="data-links">
              <Link to="#">Tableau</Link>
              <Link to="#">Compétitions</Link>
              <Link to="#">Carte</Link>
            </div>
          </div>
          <div className="data-card">
            <img src={boutiques} alt="Boutiques" className="Boutiques" />
            <h2>Les boutiques officielles Paris 2024</h2>
            <p>Achetez vos souvenirs et produits officiels des Jeux</p>
            <div className="data-links">
              <Link to="/Boutiqueoffcielles">Tableau</Link>
              <Link to="/Boutiqueoffcielles">Analyse</Link>
              <Link to="/Boutiqueoffcielles">Carte</Link>
            </div>
          </div>
        </section>
        <div className="Contact">
          <h1>
            VOUS SOUHAITEZ ACCÉDER À D’AUTRES INFORMATIONS <br />
            PLUS PRECISES RELATIVES À PARIS 2024 ? <br />
            N’HÉSITEZ PAS À NOUS CONTACTER
          </h1>
        </div>
        <div className="container">
          <h2>Les dernières informations ajoutées</h2>
          <button className="all-data-btn">TOUTES LES DONNÉES</button>
          <div className="data-list">
            <div className="data-item">
              <div className="labels">
                <span className="label">Tableau</span>
                <span className="label">Analyse</span>
                <span className="label">Carte</span>
              </div>
              <h3>Paris 2024 - Boutiques officielles</h3>
              <button className="arrow-btn">→</button>
            </div>
            <div className="data-item">
              <div className="labels">
                <span className="label">Tableau</span>
                <span className="label">Analyse</span>
                <span className="label">Carte</span>
              </div>
              <h3>Paris 2024 - FAQ</h3>
              <button className="arrow-btn">→</button>
            </div>
            <div className="data-item">
              <div className="labels">
                <span className="label">Tableau</span>
                <span className="label">Analyse</span>
                <span className="label">Carte</span>
              </div>
              <h3>Paris 2024 - PSA</h3>
              <button className="arrow-btn">→</button>
            </div>
            <div className="data-item">
              <div className="labels">
                <span className="label">Tableau</span>
                <span className="label">Analyse</span>
                <span className="label">Carte</span>
              </div>
              <h3>Paris 2024 - Centres de préparation aux Jeux</h3>
              <button className="arrow-btn">→</button>
            </div>
            <div className="data-item">
              <div className="labels">
                <span className="label">Tableau</span>
                <span className="label">Analyse</span>
                <span className="label">Carte</span>
              </div>
              <h3>Paris 2024 - Sites de compétition</h3>
              <button className="arrow-btn">→</button>
            </div>
            <div className="data-item">
              <div className="labels">
                <span className="label">Tableau</span>
                <span className="label">Analyse</span>
                <span className="label">Carte</span>
              </div>
              <h3>Paris 2024 - Parkings vélo spectateurs en IDF</h3>
              <button className="arrow-btn">→</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
