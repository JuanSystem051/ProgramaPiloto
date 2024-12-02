import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Avengers: Age of Ultron",
      year: 2015,
      genre: "Acción",
      image: "avengersPortada.jpg",
      description: "Un grupo de héroes combate a una inteligencia artificial descontrolada.",
      summary: "Los Vengadores deben detener a Ultrón, una inteligencia artificial empeñada en extinguir a la humanidad.",
    },
    {
      id: 2,
      title: "Bad Boys 4: Para siempre",
      year: 2023,
      genre: "Acción",
      image: "badboys4.jpg",
      description: "Dos detectives en una misión llena de adrenalina y humor.",
      summary: "Marcus y Mike vuelven a la acción en un caso más peligroso que nunca.",
    },
    {
      id: 3,
      title: "Star Wars: Episodio II",
      year: 2002,
      genre: "Ciencia Ficción",
      image: "starWarsPortada.jpg",
      description: "La República enfrenta una guerra y un joven Jedi descubre su destino.",
      summary: "Anakin Skywalker comienza su transformación hacia el lado oscuro mientras lucha por el amor.",
    },
    {
      id: 4,
      title: "Spiderman: No Way Home",
      year: 2021,
      genre: "Acción",
      image: "spidermanNoWayHomePortada.jpg",
      description: "Peter Parker enfrenta las consecuencias de revelar su identidad secreta.",
      summary: "Un hechizo fallido del Dr. Strange desata el caos en el multiverso.",
    },
    {
      id: 5,
      title: "Búsqueda Implacable",
      year: 2008,
      genre: "Acción",
      image: "busquedaImplacable.jpg",
      description: "Un padre hará lo imposible por rescatar a su hija secuestrada.",
      summary: "Un exagente de la CIA utiliza sus habilidades únicas para enfrentarse a una red de tráfico humano.",
    },
    {
      id: 6,
      title: "Iron Man 3",
      year: 2013,
      genre: "Acción",
      image: "IronMan3.jpg",
      description: "Tony Stark enfrenta a un enemigo formidable que pone todo en peligro.",
      summary: "Un viaje de autodescubrimiento mientras Iron Man lucha por proteger a quienes ama.",
    },
    {
      id: 7,
      title: "Dragon Ball Super: Broly",
      year: 2018,
      genre: "Ciencia Ficción",
      image: "dbSuperBroly.jpg",
      description: "Goku y Vegeta enfrentan a un Saiyajin legendario con un poder inconmensurable.",
      summary: "Broly, un guerrero formidable, amenaza la paz en la Tierra.",
    },
    {
      id: 8,
      title: "La Monja",
      year: 2019,
      genre: "Terror",
      image: "laMonja.jpg",
      description: "Un sacerdote y una novicia investigan un caso sobrenatural en Rumanía.",
      summary: "La aparición demoníaca de Valak acecha en un monasterio aislado.",
    },
    {
      id: 9,
      title: "El Exorcista",
      year: 1973,
      genre: "Terror",
      image: "elExorcista.jpg",
      description: "Una niña poseída y un sacerdote enfrentan al mal absoluto.",
      summary: "Un clásico del terror donde la fe y el mal colisionan de forma aterradora.",
    },
  ]);

  return (
    <div className="app-container">
      <h1 className="app-title">Movie List</h1>
      <MovieList movies={movies} />
      <footer className="app-footer">
        <p>&copy; 2024 MovieList Pro | Creado con 💖 por Juan Pablo Ospina</p>
      </footer>
    </div>
  );
};

export default App;
