import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IMovieList } from '../interfaces/movie-list';

const MovieCard: React.FC<IMovieList> = (props) => {
  const { title, genre, director, poster } = props;
  return (
    <Container fluid className="movie-card">
      <Row noGutters>
        <Col className="poster-container">
          <img src={poster} alt="Poster" className="poster-image" />
        </Col>
        <Col className="card-detail-container">
          <p className="card-detail-container__title">{title}</p>
          <p className="card-detail-container__genre">{genre}</p>
          <p>{director}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieCard;
