import React from 'react';
import './Home.css';

const Home = () => {
  const dogs = [
    { name: 'Max', size: 'Grande', age: 'Adulto', gender: '♂', image: 'dog1.jpg' },
    { name: 'Sushi', size: 'Pequeño', age: 'Adulto', gender: '♂', image: 'dog2.jpg' },
    { name: 'Maki', size: 'Mediano', age: 'Adulto', gender: '♂', image: 'dog3.jpg' },
    { name: 'Rex', size: 'Grande', age: 'Adulto', gender: '♂', image: 'dog1.jpg' },
    { name: 'Galleta', size: 'Pequeño', age: 'Adulto', gender: '♂', image: 'dog2.jpg' },
    { name: 'Loko', size: 'Mediano', age: 'Adulto', gender: '♂', image: 'dog3.jpg' },
  ];

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
            <img src="/images/logo.png" alt="Logo Doggo" />
            <span>Doggo</span>
        </div>
        <nav>
          <a href="#">Adopta</a>
          <a href="#">Iniciar sesión</a>
          <a href="#">Regístrate</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Un match que cambia dos vidas para siempre</h1>
          <p>
            Explora mascotas recomendadas especialmente para ti.<br />
            ¡Haz match hoy mismo!<br />
            Solo toma 60 segundos
          </p>
          <button className="match-button">Hacer match</button>
        </div>
        <div className="hero-image">
          <img src="/images/home.png" alt="Persona con perro" />
        </div>
      </section>

      <section className="adopta">
        <h2>Adopta o dona</h2>
        <div className="filters">
          <h4>Género</h4>
          <label><input type="checkbox" /> Macho</label>
          <label><input type="checkbox" /> Hembra</label>

          <h4>Edad</h4>
          <label><input type="checkbox" /> Cachorro</label>
          <label><input type="checkbox" /> Joven</label>
          <label><input type="checkbox" /> Adulto</label>
          <label><input type="checkbox" /> Adulto Mayor</label>

          <h4>Salud</h4>
          <label><input type="checkbox" /> Esterilizado</label>
          <label><input type="checkbox" /> Vacunas completas</label>
          <label><input type="checkbox" /> Desparasitado</label>
        </div>

        <div className="cards">
          {dogs.map((dog, index) => (
            <div key={index} className="card">
              <img src={dog.image} alt={dog.name} />
              <h3>{dog.name} {dog.gender}</h3>
              <p>{dog.age}<br />{dog.size}</p>
            </div>
          ))}
        </div>
        <div className="next">Siguiente &gt;</div>
      </section>

      <footer className="footer">
        <div className="logo">
            <img src="/images/logo.png" alt="Logo Doggo" />
            <span>Doggo</span></div>
        <div className="footer-links">
          <div>
            <h4>Organizaciones</h4>
            <ul>
              <li>Refugios</li>
              <li>Albergues</li>
              <li>Postula como refugio</li>
              <li>Política para organizaciones</li>
            </ul>
          </div>
          <div>
            <h4>Recursos</h4>
            <ul>
              <li>Nosotros</li>
              <li>Términos y condiciones</li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2025 Doggo. Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Home;