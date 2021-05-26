import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

import { IMovieList } from '../interfaces/movie-list';
import getDirectorData from '../mock-api/get-director-data';
import { IDirectorData } from '../interfaces/director-data';

const defaultDirectorData: IDirectorData = {
  directorName: 'N/A',
  imageUrl: 'N/A',
  info: 'N/A',
};

const MovieCard: React.FC<IMovieList> = (props) => {
  const { id, title, genre, director, poster, plot } = props;

  const [displayDetail, setDisplayDetail] = useState<boolean>(false);
  const [showDirectorModal, setShowDirectorModal] = useState<boolean>(false);
  const [directorData, setDirectorData] = useState<IDirectorData>(defaultDirectorData);

  const { directorName, imageUrl, info } = directorData;

  const handleDirectorNameClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setShowDirectorModal(!showDirectorModal);
  };

  const toggleAccordion = () => {
    setDisplayDetail((previous) => !previous);
  };

  const handleAddToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const fetchDirectorData = async () => {
    try {
      const response = await getDirectorData(id);
      setDirectorData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDirectorData();
  }, []);

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
            <Button onClick={handleAddToFavorite} className="card-dropdown__add-favorite">
              Add to Favorite
            </Button>
          </Row>
        </div>
      </Container>
      <Modal
        show={showDirectorModal}
        keyboard={true}
        onHide={() => setShowDirectorModal(false)}
        centered
        className="director-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{directorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} alt="" className="director-modal__director-image" />
          <p className="director-modal__director-text">{info}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieCard;
