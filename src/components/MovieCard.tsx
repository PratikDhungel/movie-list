import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IMovieList } from '../interfaces/movie-list';

const MovieCard: React.FC<IMovieList> = (props) => {
  const { title, genre, director, poster, plot } = props;

  const [displayDetail, setDisplayDetail] = useState<boolean>(false);
  const [showDirectorModal, setShowDirectorModal] = useState<boolean>(false);

  const handleDirectorNameClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setShowDirectorModal(!showDirectorModal);
  };

  const toggleAccordion = () => {
    setDisplayDetail((previous) => !previous);
  };

  // const handleDirectorNameClick = () => {
  //   console.log('Hello');
  // };

  const handleAddToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <div>
      <Container fluid className="movie-card" onClick={toggleAccordion}>
        <Row noGutters>
          <Col className="poster-container">
            <img src={poster} alt="Poster" className="poster-image" />
          </Col>
          <Col className="card-detail-container">
            <p className="card-detail-container__title">{title}</p>
            <p className="card-detail-container__genre">{genre}</p>
            <p onClick={handleDirectorNameClick}>{director}</p>
          </Col>
        </Row>
        <div className={`${displayDetail ? 'card-dropdown-container__active' : 'card-dropdown-container'}`}>
          <Row noGutters className="card-dropdown-container-item">
            {plot}
          </Row>
          <Row noGutters className="card-dropdown-container-item">
            <Button onClick={handleAddToFavorite}>ADD TO FAVORITE</Button>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default MovieCard;
