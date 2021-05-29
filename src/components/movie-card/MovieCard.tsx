import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './movie-card-styles.css';
import { errorToast, successToast } from '../../utils';
import { IMovieCard } from '../../interfaces/movie-list';
import { addToFavorite } from '../../mock-api/add-to-favorite';
import DirectorModal from '../director-modal/DirectorModal';

const MovieCard: React.FC<IMovieCard> = (props) => {
  const { title, genre, director, poster, plot, directorData } = props;

  const [displayDetail, setDisplayDetail] = useState<boolean>(false);
  const [showDirectorModal, setShowDirectorModal] = useState<boolean>(false);

  // const { directorName, imageUrl, info } = directorData;

  const toggleModal = () => {
    setShowDirectorModal(!showDirectorModal);
  };

  // handleDirectorNameClick will set the flag to true so that the Modal is displayed
  const handleDirectorNameClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    toggleModal();
  };

  // toggleAccordion will handle the show/hide mechanism of the accordion with the movie details and Favorite button
  const toggleAccordion = () => {
    setDisplayDetail((previous) => !previous);
  };

  // handelAddToFavorite will call a mock API which will return success or error based on chance
  // Success and Error toast will be displayed accordingly
  const handleAddToFavorite = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    try {
      const response = await addToFavorite();
      if (response.success) {
        const successMessage = `${title} added to favorites`;
        successToast(successMessage);
      }
    } catch (err) {
      console.log(err.message);
      errorToast(err.message);
    }
  };

  return (
    <div>
      <Container fluid className="movie-card" onClick={toggleAccordion}>
        <Row noGutters>
          <Col className="poster-container">
            <img src={poster} alt="Poster" className="poster-image" data-testid="movie-card__poster-image" />
          </Col>
          <Col className="card-detail-container">
            <p className="card-detail-container__title" data-testid="card-detail-container__title">
              {title}
            </p>
            <p className="card-detail-container__genre" data-testid="card-detail-container__genre">
              {genre}
            </p>
            <p onClick={handleDirectorNameClick} data-testid="card-detail-container__director">
              {director}
            </p>
          </Col>
        </Row>
        <div className={`${displayDetail ? 'card-dropdown-container__active' : 'card-dropdown-container'}`}>
          <Row noGutters className="card-dropdown-container-item">
            {plot}
          </Row>
          <Row noGutters className="card-dropdown-container-item">
            <Button onClick={handleAddToFavorite} className="card-dropdown__add-favorite">
              Add to Favorite
            </Button>
          </Row>
        </div>
      </Container>
      {/* Modal to display the details of the Director */}
      <DirectorModal directorData={directorData} showDirectorModal={showDirectorModal} toggleModal={toggleModal} />
    </div>
  );
};

export default MovieCard;
