import React from "react";
import Swal from "sweetalert2";
import { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const imageSrc = movie.image
    ? new URL(`../assets/img/${movie.image}`, import.meta.url).href
    : "ruta/a/imagen/por/defecto.png";

  const showDetails = () => {
    Swal.fire({
      title: movie.title,
      html: `
        <strong>Año:</strong> ${movie.year}<br/>
        <strong>Género:</strong> ${movie.genre}<br/>
        <strong>Descripción:</strong> ${movie.description}<br/>
        <strong>Resumen:</strong> ${movie.summary}
      `,
      imageUrl: imageSrc,
      imageWidth: 500,
      imageHeight: 500,
      confirmButtonText: "Cerrar",
    });
  };

  return (
    <div className="movie-card" onClick={showDetails}>
      <img src={imageSrc} alt={movie.title} className="movie-image" />
      <h3>{movie.title}</h3>
      <p><strong>Género:</strong> {movie.genre}</p>
      <p><strong>Año:</strong> {movie.year}</p>
      <p className="movie-summary">{movie.summary}</p>
    </div>
  );
};

export default MovieCard;
